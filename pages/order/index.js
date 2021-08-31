import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import Link from "next/link";

import "date-fns";
import DateFnsUtils from "@date-io/date-fns";

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

import Layout from "../../components/Layout";

import { confirmOrder, deleteAllProduct } from "../../orm/actions";
import { productListSelector } from "../../orm/selectors";

const Order = ({ products }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [selectedTime, setSelectedTime] = React.useState(new Date());
  const [address, setAddress] = React.useState("");
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState(null);

  const dispatch = useDispatch();
  const itogo = totalPrice + 200;

  useEffect(() => {
    let newTotalPrice = 0;
    let totalProducts = 0;
    if (products.length !== 0) {
      for (let i = 0; i <= products.length - 1; i++) {
        newTotalPrice = newTotalPrice + products[i].price * products[i].counter;
        totalProducts = totalProducts + products[i].counter;
      }
    }
    setTotalPrice(newTotalPrice);
    setTotalItems(totalProducts);
  }, []);

  return (
    <Layout>
      <span className="orderMainTitle">Доставка</span>
      <div className="order-container">
        <div className="leftColumn">
          <span className="deliveryTitles">Когда доставить?</span>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                className="dateTimeInput"
                margin="normal"
                id="date-picker-dialog"
                label="Выберите дату"
                format="dd/MM/yyyy"
                value={selectedDate}
                onChange={(data) => setSelectedDate(data)}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
              <KeyboardTimePicker
                className="dateTimeInput"
                margin="normal"
                id="time-picker"
                label="Выберите время"
                ampm={false}
                value={selectedTime}
                onChange={(data) => setSelectedTime(data)}
                KeyboardButtonProps={{
                  "aria-label": "change time",
                }}
              />
            </MuiPickersUtilsProvider>
          </div>
          <span className="deliveryTitles">Куда доставить?</span>
          <div className="address">
            <img src="/icons/address.png" />
            <input
              placeholder="Выберите адрес доставки"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <span className="deliveryTitlesName">Имя</span>
          <input
            className="deliveryInputName"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <span className="deliveryTitlesName">Телефон</span>
          <input
            className="deliveryInputName"
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="rightColumn">
          <div className="infoBox">
            <div className="infoBoxLeft">
              <span>Стоимость товаров: </span>
              <span>Стоимость доставки: </span>
              <span>Итого: </span>
            </div>

            <div className="infoBoxRight">
              <span>{totalPrice} ₽</span>
              <span>200 ₽</span>
              <span>
                <b>{itogo} ₽</b>
              </span>
            </div>
          </div>
          <div
            className="orderBtn"
            onClick={() => {
              dispatch(
                confirmOrder(
                  address,
                  name,
                  phone,
                  selectedDate.toLocaleDateString("en-GB"),
                  selectedTime.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false,
                  }),
                  totalPrice,
                  totalItems
                )
              );
              dispatch(deleteAllProduct(products));
            }}
          >
            <Link href="/history">Сделать заказ</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

function mapStateToProps(state) {
  return {
    products: productListSelector(state),
  };
}
export default connect(mapStateToProps)(Order);
