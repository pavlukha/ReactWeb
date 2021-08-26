import React from "react";
import { connect, useDispatch } from "react-redux";

import Layout from "../../components/Layout";
import { confirmOrder } from "../../orm/actions";
import { ordersListSelector } from "../../orm/selectors";

const History = ({ orders }) => {
  console.log("ORDERS in HISTORY PAGE: ", orders);
  return (
    <Layout>
      <div>HUI</div>
    </Layout>
  );
};

function mapStateToProps(state) {
  return {
    orders: ordersListSelector(state),
  };
}
export default connect(mapStateToProps)(History);
