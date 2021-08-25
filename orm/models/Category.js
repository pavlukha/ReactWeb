import { Model, attr } from "redux-orm";

class Category extends Model {
  toString() {
    return `Category: ${this.name}`;
  }
}
Category.modelName = "Category";
Category.fields = {
  id: attr(),
  name: attr(),
};

export default Category;
