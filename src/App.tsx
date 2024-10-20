import { Route, Routes } from "react-router-dom";
import { routes } from "./constants/routes";
import Header from "./components/header/Header";
import "./i18n";
import Notification from "./components/ui/notification/Notification";

function App() {
  return (
    <div className="overflow-hidden">
      <Notification />
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
