import "./app.css";
import { AppRouter } from "./AppRouter";
import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import { VideogamesProvider } from "./pages/Home/context/videogames";

function App() {
  return (
    <Suspense fallback={<>Cargando pagina....</>}>
      <BrowserRouter>
        <VideogamesProvider>
          <AppRouter />
        </VideogamesProvider>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
