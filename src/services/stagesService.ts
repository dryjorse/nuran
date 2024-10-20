import { $api, apiConfig } from "../constants/api";
import { ISimpleData } from "../types/api.types";

class StagesService {
  getAll() {
    return $api<ISimpleData[]>(apiConfig.Stages);
  }
}

export default new StagesService();
