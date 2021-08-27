import {
  TOGGLE_PRODUCT,
  DELETE_ALL_PRODUCTS,
  DELETE_PRODUCT,
  CONFIRM_ORDER,
  DELETE_ORDER_HISTORY,
  GET_COUNTER,
} from "../constants/actionTypes";

export const toggleProduct = (
  id,
  category_id,
  name,
  description,
  price,
  imageUrl
) => {
  return {
    type: TOGGLE_PRODUCT,
    payload: { id, category_id, name, description, price, imageUrl },
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

export const confirmOrder = (
  address,
  name,
  phone,
  selectedDate,
  selectedTime
) => {
  return {
    type: CONFIRM_ORDER,
    payload: { address, name, phone, selectedDate, selectedTime },
  };
};

export const deleteOrderHistory = () => {
  return {
    type: DELETE_ORDER_HISTORY,
    payload: {},
  };
};

export const getCounter = (counter) => {
  return {
    type: GET_COUNTER,
    payload: { counter },
  };
};
