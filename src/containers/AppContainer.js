/* eslint-disable react/prop-types */
import React, { Component } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
// import { tokenValidator } from "util";
// import MainApp from "app/index";
import App from "app";
import Login from "./Login";
import { setInitURL } from "actions";
import { connect } from "react-redux";
import { showAuthMessage } from "actions";
import { hideAuthMessage } from "actions";
import { clearNotifications } from "actions";
import Notifications from "components/Notifications/Notifications";
import { reloadUserData } from "actions";
import Error404 from "components/Error404";
import { clearErrors } from "actions";
import { UserRoles } from "constants/DefaultValues";

function RestrictedRoute({ children, redirectTo, authUser }) {
  return authUser ? children : <Navigate to={redirectTo} />;
}

function ErrorBoundary({
  children,
  isError,
  authUser,
  alertMessage,
  showMessage,
  clearErrors,
}) {
  const redirectTo = authUser
    ? authUser.role && authUser.role === UserRoles.ADMIN
      ? "/app/admin"
      : "/app/user"
    : "";
  return isError ? (
    <Error404
      redirectTo={redirectTo}
      alertMessage={alertMessage}
      showMessage={showMessage}
      clearErrors={clearErrors}
    />
  ) : (
    children
  );
}

class AppContainer extends Component {
  componentDidMount() {
    const isAuthorized = sessionStorage.getItem("isAuthorized");
    if (isAuthorized) {
      this.props.reloadUserData();
    }
  }
  componentDidUpdate() {
    if (
      this.props.notificationMessage &&
      this.props.notificationMessage !== ""
    ) {
      setTimeout(() => {
        this.props.clearNotifications();
      }, 100);
    }
  }
  render() {
    const {
      authUser,
      notificationMessage,
      notificationType,
      notificationOptions,
      isError,
      alertMessage,
      showMessage,
    } = this.props;

    return (
      <div className="app-main">
        <ErrorBoundary
          redirectTo={"/error"}
          isError={isError}
          authUser={authUser}
          alertMessage={alertMessage}
          showMessage={showMessage}
          clearErrors={this.props.clearErrors}
        >
          <Notifications
            message={notificationMessage}
            messageType={notificationType}
            options={notificationOptions}
          />
          <Routes>
            <Route
              path="/*"
              element={
                <RestrictedRoute redirectTo={"/login"} authUser={authUser}>
                  <App {...this.props} />
                </RestrictedRoute>
              }
            />
            <Route path="/login" element={<Login authUser={authUser} />} />
          </Routes>
        </ErrorBoundary>
      </div>
    );
  }
}

const mapStateToProps = ({ settings, auth, notification }) => {
  const { locale } = settings;
  const { authUser, initURL, alertMessage, showMessage } = auth;
  const {
    notificationType,
    notificationMessage,
    notificationOptions,
    isError,
    errorMessage,
    source,
  } = notification;
  return {
    locale,
    authUser,
    isError,
    initURL,
    notificationType,
    notificationMessage,
    notificationOptions,
    errorMessage,
    source,
    alertMessage,
    showMessage,
  };
};

export default connect(mapStateToProps, {
  setInitURL,
  showAuthMessage,
  hideAuthMessage,
  clearNotifications,
  reloadUserData,
  clearErrors,
})(AppContainer);
