import { $api, apiConfig } from "../constants/api";
import { IAbout } from "../types/api.types";

class AboutServce {
  getInfo() {
    return $api<IAbout>(apiConfig.About);
  }
}

export default new AboutServce();
