// const url = "http://localhost:3001/videogame";

export const fetchingData = ({ url, signal }) => {
  return fetch(url, { signal }).then((res) => {
    if (!res?.ok) throw new Error("hubo un error");
    return res.json();
  });
};

//tener en cuenta que el error de fetch que atrapa catch es solo de red
//osea cuando el usuario pierde la señal,la computadora esta offline, el
//servidor no responde o es una url que no existe.
//los codigo de error 404 o 400 o 500, son respuesta del protocologo http
//no son tomados como error para fetch

// Cuando un usuario intenta acceder a una página web y recibe un error 404, significa que el servidor no puede encontrar la página que se está solicitando. Esto puede deberse a que la página se ha eliminado, se ha movido a una ubicación diferente o se ha renombrado.

// El error 404 es una respuesta común del servidor web cuando una página no se encuentra, y se muestra en el navegador web del usuario como un mensaje de error. Los sitios web suelen personalizar la página de error 404 para ayudar al usuario a encontrar la información que está buscando o para proporcionar opciones de navegación alternativas.

// En otras palabras, el error 400 se debe a un error en la solicitud del cliente, mientras que el error 404 se debe a un error en el servidor. El error 400 se produce cuando el cliente envía una solicitud incorrecta al servidor, como una URL mal escrita o parámetros de solicitud incompletos o incorrectos. El error 404 se produce cuando el servidor no puede encontrar la página que el cliente está solicitando, lo que puede deberse a que la página se ha eliminado, se ha movido a una ubicación diferente o se ha renombrado.

// El error 500 es un código de estado HTTP que indica que se ha producido un error en el servidor que impide que se complete la solicitud del cliente. El código "500" significa "error interno del servidor", y se utiliza cuando el servidor no puede completar la solicitud debido a un error en el software del servidor.

//arreglar los datos enviados desde el servidor.
