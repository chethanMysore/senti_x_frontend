/* eslint-disable react/prop-types */
import { hideAuthMessage } from "actions";
import { showAuthLoader } from "actions";
import { loginUser } from "actions";
import CircularProgress from "components/CircularProgress";
import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { tokenValidator } from "util";
import IntlMessages from "util/IntlMessages";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
    };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleUsernameChange(e) {
    this.setState({ username: e.target.value });
  }
  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }
  handleSubmit() {
    this.props.showAuthLoader();
    this.props.loginUser({
      username: this.state.username,
      password: this.state.password,
    });
  }

  componentDidUpdate() {
    if (this.props.authUser && tokenValidator()) {
      this.props.history.push("/");
    }
  }

  render() {
    const { username, password } = this.state;
    const { loader } = this.props;
    // const notificationAlertRef = React.useRef(null);
    return (
      <div className="app-login">
        <div>
          <h1>SentiX Login</h1>
        </div>
        <div>
          <form>
            <div className="form-group mb-6">
              <input
                placeholder="Username"
                onChange={this.handleUsernameChange}
                defaultValue={username}
                className="form-control form-control-lg"
              />
            </div>
            <div className="form-group mb-6">
              <input
                type="password"
                placeholder="Password"
                onChange={this.handlePasswordChange}
                defaultValue={password}
                className="form-control form-control-lg"
              />
            </div>
            <div className="mb-3 d-flex align-items-center justify-content-between">
              <Button onClick={this.handleSubmit} color="primary">
                <IntlMessages id="appModule.signIn" />
              </Button>
            </div>
          </form>
        </div>
        {loader && (
          <div className="loader-view">
            <CircularProgress />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { loader, authUser } = auth;
  return {
    loader,
    authUser,
  };
};

export default connect(mapStateToProps, {
  loginUser,
  hideAuthMessage,
  showAuthLoader,
})(Login);
