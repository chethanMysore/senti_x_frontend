/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { fetchAllModels } from "actions";
import React, { Component } from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { connect } from "react-redux";
import { getCountryNameFromCode } from "util";

class ModelsList extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchAllModels();
  }
  render() {
    const modelsList = this.props.modelsList;
    const authUser = this.props.authUser;
    return (
      <>
        <Container fluid>
          <Row>
            <Col md="12">
              <Card className="strpied-tabled-with-hover">
                <Card.Header>
                  <Card.Title as="h4">Subscribed Models</Card.Title>
                  <p className="card-category">
                    List of subscribed models by {authUser.firstName}
                  </p>
                </Card.Header>
                <Card.Body className="table-full-width table-responsive px-0">
                  <Table className="table-hover table-striped">
                    <thead>
                      <tr>
                        <th className="border-0">Model ID</th>
                        <th className="border-0">Model Name</th>
                        <th className="border-0">Created By</th>
                        <th className="border-0">Created At</th>
                        <th className="border-0">Last Modified At</th>
                      </tr>
                    </thead>
                    <tbody>
                      {modelsList &&
                      Array.isArray(modelsList) &&
                      modelsList.length > 0 ? (
                        modelsList.map((model, _index) => (
                          <tr>
                            <td>{model.modelID}</td>
                            <td>{model.modelName}</td>
                            <td>{authUser.fullName}</td>
                            <td>{model.createdAt}</td>
                            <td>{model.modifiedAt}</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={6}>No Models Subscribed Yet!</td>
                        </tr>
                      )}
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

const mapStateToProps = ({ model, auth }) => {
  const { modelsList } = model;
  const { authUser } = auth;
  return { modelsList, authUser };
};

export default connect(mapStateToProps, { fetchAllModels })(ModelsList);
