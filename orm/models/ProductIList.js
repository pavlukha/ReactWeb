import { Model, attr } from "redux-orm";
import {
  TOGGLE_PRODUCT,
  DELETE_PRODUCT,
  DELETE_ALL_PRODUCTS,
} from "../constants/actionTypes";

class ProductList extends Model {
  static reducer(action, ProductList, session) {
    const { payload, type } = action;
    const st = session.state.ProductList.items;
    const filtered = st.filter((productId) => {
      return productId === payload.id;
    });
    switch (type) {
      case TOGGLE_PRODUCT:
        if (filtered.length === 0) {
          ProductList.create(payload);
        }
        break;
      case DELETE_PRODUCT:
        ProductList.withId(payload.id).delete();
        break;
      case DELETE_ALL_PRODUCTS:
        ProductList.delete();
        break;
    }
    return session.state;
  }
}

ProductList.modelName = "ProductList";
ProductList.fields = {
  id: attr(),
  name: attr(),
  category_id: attr(),
  description: attr(),
  price: attr(),
};

export default ProductList;
