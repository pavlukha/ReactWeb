import { ORM } from "redux-orm";

import Counter from "./models/Counter";
import Product from "./models/Product";
import Category from "./models/Category";
import ProductList from "./models/ProductIList";
import OrderHistory from "./models/OrderHistory";

const orm = new ORM({
  stateSelector: (state) => state.orm,
});

orm.register(Category, Product, ProductList, OrderHistory, Counter);

export default orm;
