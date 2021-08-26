import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import Link from "next/link";
import Layout from "../../components/Layout";
import { confirmOrder, deleteAllProduct } from "../../orm/actions";
import { productListSelector } from "../../orm/selectors";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import "date-fns";

const Order = ({ products }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch();
  const itogo = totalPrice + 200;

  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    let newTotalPrice = 0;
    if (products.length !== 0) {
      for (let i = 0; i <= products.length - 1; i++) {
        newTotalPrice = newTotalPrice + products[i].price;
      }
    }
    setTotalPrice(newTotalPrice);
  }, []);

  return (
    <Layout>
      <span
        style={{
          fontSize: 20,
          fontWeight: 700,
          color: "#2D2D2F",
        }}
      >
        Доставка
      </span>
      <div className="order-container">
        <div className="leftColumn">
          <span className="deliveryTitles">Когда доставить?</span>
          <div>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                label="Выберите дату"
                format="MM/dd/yyyy"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
              <KeyboardTimePicker
                margin="normal"
                id="time-picker"
                label="Выберите время"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change time",
                }}
              />
            </MuiPickersUtilsProvider>
          </div>
          <span className="deliveryTitles">Куда доставить?</span>
          <div className="address">
            <img src="/icons/address.png" />
            <input placeholder="Выберите адрес доставки" />
          </div>
          <span className="deliveryTitlesName">Имя</span>
          <input className="deliveryInputName" />
          <span className="deliveryTitlesName">Телефон</span>
          <input className="deliveryInputName" />
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
              dispatch(confirmOrder(products));
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
