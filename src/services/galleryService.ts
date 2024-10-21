import { $api, apiConfig } from "../constants/api";
import { IGallery } from "../types/api.types";

class GalleryService {
  getAll() {
    return $api<IGallery[]>(apiConfig.Gallery);
  }
}

export default new GalleryService();
