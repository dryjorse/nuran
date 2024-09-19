import { Route, Routes } from "react-router-dom";
import { routes } from "./constants/routes";
import Header from "./components/header/Header";
import "./i18n";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} {...route} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
