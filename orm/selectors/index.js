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

export const ordersListSelector = createSelector(orm, (session) =>
  session.OrderHistory.all()
    .toModelArray()
    .map((productList) => {
      const { ref } = productList;
      return { ...ref };
    })
);
