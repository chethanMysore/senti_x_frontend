/* eslint-disable react/prop-types */
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
import React from "react";
import { Route, Routes } from "react-router-dom";

import Footer from "components/Footer/Footer";

import AdminDashboard from "./views/AdminDashboard";
import UserDashboard from "./views/UserDashboard";
import { userRoutes, adminRoutes } from "routes";
import Sidebar from "components/Sidebar/Sidebar";
import sidebarImage from "assets/img/sidebar-3.jpg";
import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";
import { UserRoles } from "constants/DefaultValues";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: sidebarImage,
      color: "black",
      hasImage: true,
    };
    this.setHasImage = this.setHasImage.bind(this);
    this.setColor = this.setColor.bind(this);
    this.setImage = this.setImage.bind(this);
  }

  componentDidUpdate() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;

    if (
      window.innerWidth < 993 &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
      var element = document.getElementById("bodyClick");
      element.parentNode.removeChild(element);
    }
  }

  setHasImage() {
    this.setState({ hasImage: !this.state.hasImage });
  }

  setColor(color) {
    this.setState({ color: color });
  }

  setImage(image) {
    this.setState({ image: image });
  }

  render() {
    const authUser = this.props.authUser;
    const routes =
      authUser && authUser.role
        ? authUser.role === UserRoles.ADMIN
          ? adminRoutes
          : userRoutes
        : [];
    return (
      <>
        <div className="wrapper">
          <Sidebar
            color={this.state.color}
            image={this.state.hasImage ? this.state.image : ""}
            routes={routes}
          />
          <div className="main-panel">
            <Routes>
              <Route
                path="/app/admin/*"
                element={<AdminDashboard {...this.props} routes={routes} />}
              />
              <Route
                path="/app/user/*"
                element={<UserDashboard {...this.props} routes={routes} />}
              />
              {/* <Navigate from="/" to="/app/profile" /> */}
            </Routes>

            <Footer />
          </div>
        </div>
        <FixedPlugin
          hasImage={this.state.hasImage}
          setHasImage={() => this.setHasImage()}
          color={this.state.color}
          setColor={(color) => this.setColor(color)}
          image={this.state.image}
          setImage={(image) => this.setImage(image)}
        />
      </>
    );
  }
}

export default App;
