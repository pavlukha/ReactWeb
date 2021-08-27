import { Model, attr } from "redux-orm";
import { GET_COUNTER } from "../constants/actionTypes";

class Counter extends Model {
  static reducer(action, Counter, session) {
    const { payload, type } = action;

    switch (type) {
      case GET_COUNTER:
        Counter.create({ value: payload });
        break;
    }
    return session.state;
  }
}
Counter.modelName = "Counter";
Counter.fields = {
  value: attr(),
};

export default Counter;
