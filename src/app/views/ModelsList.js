/* eslint-disable react/prop-types */
import React from "react";

// react-bootstrap components
import { Card, Table, Container, Row, Col } from "react-bootstrap";

function ModelsList({ modelsList, user }) {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Subscribed Models</Card.Title>
                <p className="card-category">
                  List of subscribed models by {user.firstName}
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
                      modelsList.map((model, key) => (
                        <tr key={key}>
                          <td>{model.modelID}</td>
                          <td>{model.modelName}</td>
                          <td>{user.fullName}</td>
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

export default ModelsList;
