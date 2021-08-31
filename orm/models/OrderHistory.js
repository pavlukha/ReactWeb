import { Model, attr } from "redux-orm";
import { CONFIRM_ORDER, DELETE_ORDER_HISTORY } from "../constants/actionTypes";

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
          totalPrice: payload.totalPrice,
          totalItems: payload.totalItems,
        });
        break;
      case DELETE_ORDER_HISTORY:
        OrderHistory.delete();
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
  totalPrice: attr(),
  totalItems: attr(),
};

export default OrderHistory;
