/* eslint-disable react/prop-types */
import { hideAuthMessage } from "actions";
import { showAuthLoader } from "actions";
import { loginUser } from "actions";
// import CircularProgress from "components/CircularProgress";
import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
// import { tokenValidator } from "util";
import IntlMessages from "util/IntlMessages";
import { Button, Card, Container, Form, InputGroup } from "react-bootstrap";
import { UserRoles } from "constants/DefaultValues";
// import LoginBackground from "assets/img/sidebar-2.jpg"

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

  render() {
    const { username, password } = this.state;
    const { authUser } = this.props;
    // const { loader } = this.props;
    // const notificationAlertRef = React.useRef(null);
    return authUser ? (
      authUser.role && authUser.role === UserRoles.ADMIN ? (
        <Navigate to={"/app/admin"} />
      ) : (
        <Navigate to={"/app/user"} />
      )
    ) : (
      <>
        {/* {loader ? (
          <div className="loader-view">
            <CircularProgress />
          </div>
        ) : ( */}
        <Container fluid className="login-container">
          <Card>
            <Card.Body className="login-form">
              <Card.Title className="login-title">
                <h3>Welcome Back to SentiX!</h3>
              </Card.Title>
              <InputGroup className="mb-3 login-input">
                <InputGroup.Text id="basic-addon1">Username</InputGroup.Text>
                <Form.Control
                  placeholder="Username"
                  defaultValue={username}
                  onChange={this.handleUsernameChange}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
              <InputGroup className="mb-3 login-input">
                <InputGroup.Text id="basic-addon2">
                  Password&nbsp;
                </InputGroup.Text>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  defaultValue={password}
                  onChange={this.handlePasswordChange}
                  aria-label="Password"
                  aria-describedby="basic-addon2"
                />
              </InputGroup>
              <Button
                variant="primary"
                className="login-btn"
                onClick={this.handleSubmit}
              >
                <IntlMessages id="appModule.signIn" />
              </Button>
            </Card.Body>
          </Card>
        </Container>
        {/* )} */}
      </>
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
