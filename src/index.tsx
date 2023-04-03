import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./state/store";
import vi_VN from "antd/lib/locale/vi_VN";
import { ConfigProvider } from "antd";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ConfigProvider locale={vi_VN}>
        <App />
      </ConfigProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
