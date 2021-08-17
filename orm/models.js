import { Model, attr } from "redux-orm";

class Product extends Model {
  toString() {
    return `Product: ${this.name}`;
  }
}
Product.modelName = "Product";
Product.fields = {
  id: attr(), // non-relational field for any value; optional but highly recommended
  name: attr(),
  category_id: attr(),
  description: attr(),
};

export default Product;
