import React from "react";
import { connect } from "react-redux";

import Layout from "../../components/Layout";
import OrderSection from "../../components/OrderPanel/OrderSection";

import { ordersListSelector } from "../../orm/selectors";

const History = ({ orders }) => {
  return (
    <Layout>
      <div className="historyContainer">
        <span>История заказов</span>
        <div className="historyOrderBx">
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
