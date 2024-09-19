import MainPage from "../pages/mainPage/MainPage";
import PanoramaPage from "../pages/PanoramaPage/PanoramaPage";

export const routes = [
  { path: "/", element: <MainPage /> },
  { path: "/360", element: <PanoramaPage /> },
];
