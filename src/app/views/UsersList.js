/* eslint-disable react/prop-types */
import React, { useEffect } from "react";

// react-bootstrap components
import { Card, Table, Container, Row, Col } from "react-bootstrap";
import { getCountryNameFromCode } from "util";

function UsersList({ usersList, getUsers }) {
  useEffect(() => {
    if (!(usersList && usersList.length > 0)) {
      getUsers();
    }
  });
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Registered Users</Card.Title>
                <p className="card-category">
                  List of users registered for SentiX Inference
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">User ID</th>
                      <th className="border-0">Name</th>
                      <th className="border-0">e-Mail</th>
                      <th className="border-0">Phone</th>
                      <th className="border-0">Country</th>
                      <th className="border-0">Registered Since</th>
                    </tr>
                  </thead>
                  <tbody>
                    {usersList &&
                    Array.isArray(usersList) &&
                    usersList.length > 0 ? (
                      usersList.map((user, key) => (
                        <tr key={key}>
                          <td>{user.userID}</td>
                          <td>{user.fullName}</td>
                          <td>{user.emailID}</td>
                          <td>{user.phone}</td>
                          <td>{getCountryNameFromCode(user.countryCode)}</td>
                          <td>{user.createdAt}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={6}>No Users Registered Yet!</td>
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

export default UsersList;
