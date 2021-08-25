import { createSelector } from "redux-orm";
import orm from "../index";

export const productListSelector = createSelector(orm, (session) =>
  session.ProductList.all()
    .toModelArray()
    .map((product) => {
      const { ref } = product;
      return { ...ref };
    })
);
