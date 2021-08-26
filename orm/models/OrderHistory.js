import { Model, many, attr } from "redux-orm";
import { CONFIRM_ORDER } from "../constants/actionTypes";

class OrderHistory extends Model {
  static reducer(action, OrderHistory, session) {
    const { payload, type } = action;
    switch (type) {
      case CONFIRM_ORDER:
        OrderHistory.create(payload);
        break;
    }
    return session.state;
  }
}
OrderHistory.modelName = "OrderHistory";
OrderHistory.fields = {
  orders: attr(),
};

export default OrderHistory;
