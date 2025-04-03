/* eslint-disable react/prop-types */
import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { UserRoles } from "constants/DefaultValues";
import AppLocale from "lngProvider";
import { IntlProvider } from "react-intl";
import ErrorBoundary from "./ErrorBoundary";
// import { tokenValidator } from "util";
// import MainApp from "app/index";
import App from "app";
import Login from "./Login";
import Error404 from "components/Error404";
import { setInitURL } from "actions";
import { connect } from "react-redux";
import { showAuthMessage } from "actions";
import { hideAuthMessage } from "actions";
import { clearNotifications } from "actions";
import Notifications from "components/Notifications/Notifications";
import { reloadUserData } from "actions";

const RestrictedRoute = ({ component: Component, authUser, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      authUser ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      )
    }
  />
);

class AppContainer extends Component {
  // componentDidMount() {
  //   if (!this.props.authUser) {
  //     this.props.reloadUserData();
  //   }
  // }
  UNSAFE_componentWillMount() {
    if (this.props.initURL === "") {
      this.props.setInitURL(this.props.history.location.pathname);
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
      match,
      location,
      locale,
      initURL,
      notificationMessage,
      notificationType,
      notificationOptions,
      isError,
    } = this.props;
    // if (location.pathname === "/") {
    //   return <Redirect to={"/login"} />;
    // }
    if (location.pathname === "/") {
      if (isError) {
        return <Redirect to={"/error"} />;
      } else if (!authUser) {
        return <Redirect to={"/login"} />;
      } else if (initURL === "" || initURL === "/" || initURL === "/login") {
        return authUser.role && authUser.role === UserRoles.ADMIN ? (
          <Redirect to={"/app/admin/"} />
        ) : (
          <Redirect to={"/app/profile"} />
        );
      } else {
        return <Redirect to={initURL} />;
      }
    }

    const currentAppLocale = AppLocale[locale.locale];
    return (
      <IntlProvider
        locale={currentAppLocale.locale}
        messages={currentAppLocale.messages}
      >
        <div className="app-main">
          <ErrorBoundary isError={isError}>
            <Notifications
              message={notificationMessage}
              messageType={notificationType}
              options={notificationOptions}
            />
            <Switch>
              <RestrictedRoute
                path={`${match.url}app`}
                authUser={authUser}
                component={App}
              />
              {/* <Route
                path="/app*"
                render={(props) => (
                  <RestrictedRoute
                    path="/app*"
                    authUser={authUser}
                    component={App}
                    {...props}
                  />
                )}
              /> */}
              <Route path="/login" component={Login} />
              <Route
                path="/error"
                render={(props) => <Error404 {...props} />}
              />
            </Switch>
          </ErrorBoundary>
        </div>
      </IntlProvider>
    );
  }
}

const mapStateToProps = ({ settings, auth, notification }) => {
  const { locale } = settings;
  const { authUser, initURL } = auth;
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
  };
};

export default connect(mapStateToProps, {
  setInitURL,
  showAuthMessage,
  hideAuthMessage,
  clearNotifications,
  reloadUserData,
})(AppContainer);
