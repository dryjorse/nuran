import { $api, apiConfig } from "../constants/api";
import { ISimpleData } from "../types/api.types";

class GalleryService {
  getAll() {
    return $api<ISimpleData[]>(apiConfig.Gallery);
  }
}

export default new GalleryService();
