import { $api, apiConfig } from "../constants/api";
import { ILinks } from "../types/api.types";

class LinksService {
  getAll() {
    return $api<ILinks>(apiConfig.Links);
  }
}

export default new LinksService();
