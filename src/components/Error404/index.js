/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import IntlMessages from "util/IntlMessages";
import { connect } from "react-redux";
import { clearErrors } from "actions";

const Error404 = (props) => {
  return (
    <div className="app-error">
      <div>
        <img src="assets/img/Error404.jpg" />
      </div>
      <h2>
        <IntlMessages id="extraPages.404Msg" />
      </h2>
      <p>
        <Link className="btn btn-primary" to="/" onClick={props.clearErrors}>
          <IntlMessages id="extraPages.goHome" />
        </Link>
      </p>
    </div>
  );
};

const mapStateToProps = ({ auth }) => {
  const { alertMessage, showMessage } = auth;
  return { alertMessage, showMessage };
};

export default connect(mapStateToProps, { clearErrors })(Error404);
