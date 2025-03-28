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
import ModelsList from "app/views/ModelPage.js";
import UsersList from "app/views/UsersPage.js";

const dashboardRoutes = [
  {
    path: "/models",
    name: "Subscribed Models",
    icon: "nc-icon nc-alien-33",
    component: ModelsList,
    layout: "/profile",
  },
  {
    path: "/users",
    name: "Registered Users",
    icon: "nc-icon nc-circle-09",
    component: UsersList,
    layout: "/admin",
  },
];

export default dashboardRoutes;
