import React from "react";
import { connect, useDispatch } from "react-redux";

import Layout from "../../components/Layout";
import OrderSection from "../../components/OrderPanelHistory/OrderSection";

import { ordersListSelector } from "../../orm/selectors";
import { deleteOrderHistory } from "../../orm/actions";

const History = ({ orders }) => {
  const dispatch = useDispatch();

  return (
    <Layout>
      <div className="historyContainer">
        <div
          style={{ display: "flex", marginBottom: 50, alignItems: "center" }}
        >
          <span className="historyTitle">История заказов</span>
          <span
            style={{
              marginLeft: 30,
              color: "#FF2D87",
              fontSize: 16,
              fontWeight: 600,
              cursor: "pointer",
            }}
            // onClick={() => dispatch(deleteOrderHistory(orders))}
          >
            Очистить историю заказов
          </span>
        </div>
        <div className="historyOrderBx">
          {orders.length === 0 && <p>История пуста</p>}
          {orders.map((order, ind) => (
            <OrderSection order={order} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

function mapStateToProps(state) {
  return {
    orders: ordersListSelector(state),
  };
}
export default connect(mapStateToProps)(History);
