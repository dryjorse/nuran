import axios from "axios";

export const API_URL = import.meta.env.VITE_SERVER_URL;
export const $api = axios.create({ baseURL: API_URL });

export enum apiConfig {
  About = "about/",
  Gallery = "gallery/",
  Order = "order/", 
  Stages = "stages/", 
  Links = "links/", 
}

export enum queryKeys {
  About = "about",
  Gallery = "gallery",
  Order = "order",
  Stages = "stages",
  Links = "links",
}
