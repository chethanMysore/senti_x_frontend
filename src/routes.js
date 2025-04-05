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
import UserProfile from "app/views/UserProfile";
import UsersList from "app/views/UsersList";

export const userRoutes = [
  {
    path: "/profile",
    name: "Profile",
    icon: "nc-icon nc-circle-09",
    component: UserProfile,
    layout: "/app/user",
  },
];

export const adminRoutes = [
  {
    path: "/profile",
    name: "Profile",
    icon: "nc-icon nc-circle-09",
    component: UserProfile,
    layout: "/app/admin",
  },
  {
    path: "/users",
    name: "Registered Users",
    icon: "nc-icon nc-alien-33",
    component: UsersList,
    layout: "/app/admin",
  },
];
