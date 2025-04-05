// /*!

// =========================================================
// * Light Bootstrap Dashboard React - v2.0.1
// =========================================================

// * Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
// * Copyright 2022 Creative Tim (https://www.creative-tim.com)
// * Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

// * Coded by Creative Tim

// =========================================================

// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

// */
// import React from "react";
// import ReactDOM from "react-dom/client";
// import MainApp from "./MainApp";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "./assets/css/animate.min.css";
// import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
// import "./assets/css/demo.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";

// const rootElem = ReactDOM.createRoot(document.getElementById("root"));

// let render = () => {
//   // Dynamically import our main App component, and render it
//   rootElem.render(<MainApp />);
// };

// // if (module.hot) {
// //   module.hot.accept("./MainApp", () => {
// //     render(<MainApp />, rootElem);
// //   });
// // }

// render();
/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { IntlProvider } from "react-intl";
// import { ConnectedRouter } from "react-router-redux";
// import { Provider } from "react-redux";
// import { Route, Switch } from "react-router-dom";
// import configureStore, { history } from "store";

// import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

// import AdminDashboard from "app/views/AdminDashboard";
// import Login from "containers/Login";
import MainApp from "./MainApp";
import AppLocale from "lngProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
// export const store = configureStore();

// Create a reusable render method that we can call more than once
const currentAppLocale = AppLocale["en"];
let render = () => {
  // Dynamically import our main App component, and render it
  root.render(
    <StrictMode>
      <IntlProvider
        locale={currentAppLocale.locale}
        messages={currentAppLocale.messages}
      >
        <MainApp />
      </IntlProvider>
    </StrictMode>
    // <Provider store={store}>
    //   <BrowserRouter history={history}>
    //     <Switch>
    //       <Route
    //         path="/admin"
    //         render={(props) => <AdminDashboard {...props} />}
    //       />
    //       <Route path="/" render={(props) => <Login {...props} />} />
    //     </Switch>
    //   </BrowserRouter>
    // </Provider>
  );
};

// root.render(
//   <BrowserRouter>
//     <Switch>
//       <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
//       <Redirect from="/" to="/admin/dashboard" />
//     </Switch>
//   </BrowserRouter>
// );

render();
