import { $api, apiConfig } from "../constants/api";
import { IOrderBody } from "../types/api.types";

class OrderService {
  sendOrder(body: IOrderBody) {
    return $api.post(apiConfig.Order, body);
  }
}

export default new OrderService();
