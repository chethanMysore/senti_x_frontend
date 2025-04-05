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
import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";

import ModelsList from "./ModelsList";
import { connect } from "react-redux";
import { getRoutes } from "util";
import { fetchModelsByUser } from "actions";

class UserDashboard extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.authUser) {
      this.props.fetchModelsByUser(this.props.authUser.username);
    }
  }

  render() {
    const { authUser, modelsList, routes } = this.props;
    return (
      <>
        <Routes>
          <Route
            path="/"
            element={
              <div className="content">
                <ModelsList user={authUser} modelsList={modelsList} />
              </div>
            }
          />
          {getRoutes(routes, this.props)}
          {/* <Navigate to={"/app/profile/models"} /> */}
        </Routes>
      </>
    );
  }
}

const mapStateToProps = ({ model }) => {
  const { modelsList, modelDetails } = model;
  return { modelsList, modelDetails };
};

export default connect(mapStateToProps, { fetchModelsByUser })(UserDashboard);
