import {
  TOGGLE_PRODUCT,
  DELETE_ALL_PRODUCTS,
  DELETE_PRODUCT,
} from "../constants/actionTypes";

export const toggleProduct = (id, category_id, name, description, price) => {
  return {
    type: TOGGLE_PRODUCT,
    payload: { id, category_id, name, description, price },
  };
};

export const deleteProduct = (id, category_id, name, description) => {
  return {
    type: DELETE_PRODUCT,
    payload: { id, category_id, name, description },
  };
};

export const deleteAllProduct = () => {
  return {
    type: DELETE_ALL_PRODUCTS,
    payload: {},
  };
};
