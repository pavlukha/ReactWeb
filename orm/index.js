import { ORM } from "redux-orm";
import Product from "./models/Product";
import Category from "./models/Category";
import ProductList from "./models/ProductIList";

const orm = new ORM({
  stateSelector: (state) => state.orm,
});

orm.register(Category, Product, ProductList);

export default orm;
