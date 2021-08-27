import { Model, attr } from "redux-orm";
import { CONFIRM_ORDER } from "../constants/actionTypes";

class OrderHistory extends Model {
  static reducer(action, OrderHistory, session) {
    const sessionState = session.state.ProductList.itemsById;
    const { payload, type } = action;
    switch (type) {
      case CONFIRM_ORDER:
        OrderHistory.create({
          orders: sessionState,
          address: payload.address,
          name: payload.name,
          phone: payload.phone,
          selectedDate: payload.selectedDate,
          selectedTime: payload.selectedTime,
        });
        break;
    }
    return session.state;
  }
}
OrderHistory.modelName = "OrderHistory";
OrderHistory.fields = {
  orders: attr(),
  address: attr(),
  name: attr(),
  phone: attr(),
  selectedDate: attr(),
  selectedTime: attr(),
};

export default OrderHistory;
