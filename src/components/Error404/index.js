/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import IntlMessages from "util/IntlMessages";
import { connect } from "react-redux";
import { clearErrors } from "actions";
import ErrorImage from "assets/img/Error404.jpg";

const Error404 = (props) => {
  return (
    <div className="error-container">
      <div className="error-image">
        <img src={ErrorImage} alt="Error 404!!!" />
      </div>
      <div>
        <h2>
          <IntlMessages id="extraPages.404Msg" />
        </h2>
        <p>
          <Link className="btn btn-primary" to="/" onClick={props.clearErrors}>
            <IntlMessages id="extraPages.goHome" />
          </Link>
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = ({ auth }) => {
  const { alertMessage, showMessage } = auth;
  return { alertMessage, showMessage };
};

export default connect(mapStateToProps, { clearErrors })(Error404);
