import "./app.css";
import { AppRouter } from "./AppRouter";
import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";

function App() {
  return (
    <Suspense fallback={<>Cargando pagina....</>}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
