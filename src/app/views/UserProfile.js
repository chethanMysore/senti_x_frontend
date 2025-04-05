/* eslint-disable react/prop-types */
import React, { Component } from "react";
import { updateUserDetails } from "actions";
import { Card, Row, Col, InputGroup, Form, Button } from "react-bootstrap";
import { getCountryNameFromCode } from "util";
import { connect } from "react-redux";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: props.authUser,
      firstName: props.authUser.firstName,
      lastName: props.authUser.lastName,
      emailID: props.authUser.emailID,
      phone: props.authUser.phone,
      countryCode: props.authUser.countryCode,
      allowUpdate: false,
    };
    this.toggleUpdate = this.toggleUpdate.bind(this);
    this.updateProfile = this.updateProfile.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleCountryChange = this.handleCountryChange.bind(this);
  }

  toggleUpdate() {
    this.setState({ allowUpdate: !this.state.allowUpdate });
  }

  updateProfile() {
    const userData = {
      userID: this.props.authUser.userID,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emailID: this.state.emailID,
      phone: this.state.phone,
      countryCode: this.props.authUser.countryCode,
    };
    this.props.updateUserDetails(this.props.authUser.userID, userData);
  }

  handleFirstNameChange(e) {
    this.setState({ firstName: e.target.value });
  }

  handleLastNameChange(e) {
    this.setState({ lastName: e.target.value });
  }

  handleEmailChange(e) {
    this.setState({ emailID: e.target.value });
  }

  handlePhoneChange(e) {
    this.setState({ phone: e.target.value });
  }

  handleCountryChange(e) {
    this.setState({ countryCode: e.target.value });
  }

  render() {
    const authUser = this.props.authUser;
    const allowUpdate = this.state.allowUpdate;
    return (
      <Card>
        <Card.Body>
          <Card.Title>Profile Information</Card.Title>
          {!allowUpdate ? (
            <>
              <Row>
                <Col sm={4}>First Name</Col>
                <Col sm={8}>{authUser.firstName}</Col>
                <Col sm={4}>Last Name</Col>
                <Col sm={8}>{authUser.lastName}</Col>
                <Col sm={4}>Full Name</Col>
                <Col sm={8}>{authUser.fullName}</Col>
                <Col sm={4}>Email ID</Col>
                <Col sm={8}>{authUser.emailID}</Col>
                <Col sm={4}>Phone</Col>
                <Col sm={8}>{authUser.phone}</Col>
                <Col sm={4}>Country</Col>
                <Col sm={8}>{getCountryNameFromCode(authUser.countryCode)}</Col>
              </Row>
              <Row>
                <Col sm={4}>
                  <Button variant="primary" onClick={this.toggleUpdate}>
                    Update
                  </Button>
                </Col>
              </Row>
            </>
          ) : (
            <>
              <Row>
                <Col sm={12}>
                  <InputGroup className="mb-6">
                    <InputGroup.Text id="basic_addon1">
                      First Name
                    </InputGroup.Text>
                    <Form.Control
                      placeholder={authUser.firstName}
                      defaultValue={authUser.firstName}
                      onChange={this.handleFirstNameChange}
                      aria-label="FirstName"
                      aria-describedby="basic_addon1"
                    />
                  </InputGroup>
                </Col>
                <Col sm={12}>
                  <InputGroup className="mb-6">
                    <InputGroup.Text id="basic_addon2">
                      Last Name
                    </InputGroup.Text>
                    <Form.Control
                      placeholder={authUser.lastName}
                      defaultValue={authUser.lastName}
                      onChange={this.handleLastNameChange}
                      aria-label="LastName"
                      aria-describedby="basic_addon2"
                    />
                  </InputGroup>
                </Col>
                <Col sm={4}>Full Name</Col>
                <Col sm={8}>{authUser.fullName}</Col>
                <Col sm={12}>
                  <InputGroup className="mb-6">
                    <InputGroup.Text id="basic_addon3">
                      Email ID
                    </InputGroup.Text>
                    <Form.Control
                      placeholder={authUser.emailID}
                      defaultValue={authUser.emailID}
                      onChange={this.handleEmailChange}
                      aria-label="EmailID"
                      aria-describedby="basic_addon3"
                    />
                  </InputGroup>
                </Col>
                <Col sm={12}>
                  <InputGroup className="mb-6">
                    <InputGroup.Text id="basic_addon4">Phone</InputGroup.Text>
                    <Form.Control
                      placeholder={authUser.phone}
                      defaultValue={authUser.phone}
                      onChange={this.handlePhoneChange}
                      aria-label="Phone"
                      aria-describedby="basic_addon4"
                    />
                  </InputGroup>
                </Col>
                <Col sm={4}>Country</Col>
                <Col sm={8}>{getCountryNameFromCode(authUser.countryCode)}</Col>
                {/* <Col className="mb-12">
                <InputGroup className="mb-6">
                  <InputGroup.Text id="basic_addon5">Country</InputGroup.Text>
                  <Form.Control
                    placeholder={authUser.countryCode}
                    defaultValue={authUser.countryCode}
                    onChange={this.handleCountryChange}
                    aria-label="Country"
                    aria-describedby="basic_addon5"
                  />
                </InputGroup>
              </Col> */}
              </Row>
              <Row>
                <Col sm={4}>
                  <Button variant="secondary" onClick={this.toggleUpdate}>
                    Cancel
                  </Button>
                </Col>
                <Col sm={4}>
                  <Button variant="secondary" onClick={this.updateProfile}>
                    Update
                  </Button>
                </Col>
              </Row>
            </>
          )}
        </Card.Body>
      </Card>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { authUser } = auth;
  return { authUser };
};

export default connect(mapStateToProps, { updateUserDetails })(UserProfile);
