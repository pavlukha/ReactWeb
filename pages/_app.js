import { Provider } from "react-redux";

import { store } from "../store/index";

import "../styles/globals.css";
import "../styles/dateTimeInput.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
