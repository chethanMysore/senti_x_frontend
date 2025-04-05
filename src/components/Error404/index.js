/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import IntlMessages from "util/IntlMessages";
import ErrorImage from "assets/img/Error404.jpg";
import { homeUrl } from "constants/DefaultValues";

const Error404 = (props) => (
  <div className="error-container">
    <div className="error-image">
      <img src={ErrorImage} alt="Error 404!!!" />
    </div>
    <div>
      {props.showMessage ? (
        <h2>{props.alertMessage}</h2>
      ) : (
        <h2>
          <IntlMessages id="extraPages.404Msg" />
        </h2>
      )}
      <p>
        <Link
          className="btn btn-primary"
          to={homeUrl + props.redirectTo}
          onClick={props.clearErrors}
        >
          <IntlMessages id="extraPages.goHome" />
        </Link>
      </p>
    </div>
  </div>
);

export default Error404;
