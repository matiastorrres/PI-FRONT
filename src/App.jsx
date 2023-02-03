import "./app.css";
import { AppRouter } from "./AppRouter";
import { BrowserRouter } from "react-router-dom";
import { HomeProvider } from "./pages/Home/context/HomeContext";
function App() {
  return (
    <BrowserRouter>
      <HomeProvider>
        <AppRouter />
      </HomeProvider>
    </BrowserRouter>
  );
}

export default App;
