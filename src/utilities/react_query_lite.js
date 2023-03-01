//esta clase se encarga de gestionar todas las query que tenemos en nuestro sistema

export class QueryClient {
  constructor() {
    this.query = [];
  }
  getQuery = ({ queryFn, queryKey }) => {
    const queryHash = JSON.stringify(queryKey);
    let query = this.query.find((query) => query.queryHash === queryHash);
    if (!query) {
      query = createQuery({ queryKey, queryFn });
      this.query.push(query);
    }
    return query;
  };
}

//este contexto es para compartir a todos los componentes la clase QueryClient
import { createContext, useRef, useContext, useEffect, useState } from "react";

const QueryContext = createContext();

export const QueryClientProvider = ({ children, client }) => {
  return (
    <QueryContext.Provider value={client}>{children}</QueryContext.Provider>
  );
};

//hook
//queryFn :funcion asincrona, que queremos que se ejecute y controlar su estado
//queryKey: es una clave que identifica a la funcion queryFn y saber si esta cacheada
export const useQuery = ({ queryFn, queryKey, staleTime }) => {
  const client = useContext(QueryContext);
  const subscriberRef = useRef();
  const [_, setCount] = useState(0);

  if (!subscriberRef.current) {
    subscriberRef.current = createQuerySubscriber(client, {
      queryKey,
      queryFn,
      staleTime,
    });
  }
  useEffect(() => {
    return subscriberRef.current.start(() => {
      //con esto forzamos el render
      setCount((c) => c + 1);
    });
  }, []);
  return subscriberRef.current.getResult();
};

//creamos una funcion que nos permite crear querys
//promise es una promesa que encapsula a la funcion queryFn para poder gestionar su estado
//setState nos permite modificar el estado simpre que lo necesitemos. Es una funcion que recibe otra funcion.

const createQuery = ({ queryFn, queryKey }) => {
  let query = {
    queryKey,
    queryHash: JSON.stringify(queryKey),
    promise: null,
    state: {
      status: "loading",
      isFetching: true,
      data: undefined,
      error: undefined,
      lastUpadated: undefined,
    },
    setState: (updater) => {
      query.state = updater(query.state);
      query.subscribers.forEach((subscriber) => subscriber.notify());
    },
    //array que contiene funciones que observan que le esta pasando a la query que le pasamos.
    subscribers: [],
    //subscriber es una funcion
    subscribe: (subscriber) => {
      query.subscribers.push(subscriber);
      return function unsubscribe() {
        query.subscribers = query.subscribers.filter((s) => subscriber !== s);
      };
    },
    fetch: () => {
      if (!query.promise) {
        query.promise = (async () => {
          query.setState((oldState) => ({
            ...oldState,
            error: undefined,
            isFetching: true,
          }));
          try {
            const data = await queryFn();
            query.setState((oldState) => ({
              ...oldState,
              status: "success",
              isFetching: false,
              lastUpadated: Date.now(),
              data,
            }));
          } catch (error) {
            query.setState((oldState) => ({
              ...oldState,
              isFetching: false,
              status: "error",
              error,
            }));
          } finally {
            query.promise.null;
          }
        })();
      }
      return query.promise;
    },
  };
  return query;
};

//nos permite crear subscritores
const createQuerySubscriber = (
  client,
  { queryFn, queryKey, staleTime = 0 }
) => {
  const query = client.getQuery({ queryFn, queryKey });
  //es una funcion que tiene 3 propiedades
  //que tiene la funcion notify que va a ser invocada en cada cambio de estado de la query
  //getresult vuelve el estado de la query
  //funcion start la podemos invocar con un cb, de modo que nuestra propiedad notify la igualamos al cb
  //luego nos añadimos a la red de subscritores de la query que acabamos de recuperar
  //luego hacemos el fetch y vamos a empezar a recibir notificaciones de estados a medida que la query
  //vaya evolucionando.
  const subscriber = {
    notify: () => {},
    getResult: () => query.state,
    fetch: () => {
      const now = new Date();
      if (
        !query.state.lastUpadated ||
        now - query.state.lastUpadated > staleTime
      )
        query.fetch();
    },
    start: (callback) => {
      subscriber.notify = callback;
      const unsubscribe = query.subscribe(subscriber);
      subscriber.fetch();

      return unsubscribe;
    },
  };
  return subscriber;
};
