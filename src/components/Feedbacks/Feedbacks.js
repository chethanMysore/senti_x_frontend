import React, { Component } from "react";
import { connect } from "react-redux";
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
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

import { fetchAllFeedbacks } from "actions/Api";
// import EventList from "components/EventList";
// import { eventData } from "../data";

class Feedbacks extends Component {
  constructor(props) {
    super(props);
    // this.editSubmitHandler = this.editSubmitHandler.bind(this);
  }
  componentDidMount() {
    //ToDo: Uncomment this for api calls
    this.props.fetchAllFeedbacks();
  }
  editSubmitHandler(id, data) {
    //ToDo: Uncomment this for api calls
    //this.props.editEventTableData(id, data);
  }
  render() {
    const feedbacksData = this.props.feedbacksData;
    return (
      <Row>
        <Col md="12">
          <Card className="strpied-tabled-with-hover">
            <Card.Header>
              <Card.Title as="h4">Feedbacks</Card.Title>
              <p className="card-category">Feedbacks from kafka cluster</p>
            </Card.Header>
            <Card.Body className="table-full-width table-responsive px-0">
              <Table className="table-hover table-striped">
                <thead>
                  <tr>
                    <th className="border-0">Type</th>
                    <th className="border-0">Message</th>
                    <th className="border-0">Created On</th>
                  </tr>
                </thead>
                <tbody>
                  {!!feedbacksData &&
                    !!feedbacksData.feedbacks &&
                    feedbacksData.feedbacks.length > 0 &&
                    feedbacksData.feedbacks.map((data, index) => (
                      <tr>
                        <td>{data.typ}</td>
                        <td>{data.msg}</td>
                        <td>{data.created_on}</td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
        {/* <Col lg="3" sm="6">
          <Card>
            <p>Feedbacks Page</p>
            <Card.Body>
              <Row>
                {!!feedbacksData &&
                  !!feedbacksData.feedbacks &&
                  feedbacksData.feedbacks.length > 0 &&
                  feedbacksData.feedbacks.map((data, index) => (
                    <div>
                      <p className="card-category">{index}</p>
                      <p className="card-category">{data}</p>
                    </div>
                  ))}
              </Row>
            </Card.Body>
          </Card>
        </Col> */}
      </Row>
      //   <div className="app-wrapper">
      //     <ContainerHeader match={this.props.match} title={"Event List"} />
      //     {/* <div className="d-flex justify-content-center">
      //                 <h1>Events are here!</h1>
      //             </div> */}

      //     <div className="animated slideInUpTiny animation-duration-3">
      //       {!!eventsData &&
      //         eventsData.length > 0 &&
      //         eventsData.map((data, index) => (
      //           <EventList
      //             key={index}
      //             data={data}
      //             styleName="card shadow "
      //             handleEdit={this.editSubmitHandler}
      //           />
      //         ))}
      //       {(eventsData === null ||
      //         eventsData === undefined ||
      //         eventsData.length == 0) && (
      //         <div className="user-list d-sm-flex flex-sm-row card">
      //           <div className="description">
      //             <h3>No Events</h3>
      //           </div>
      //         </div>
      //       )}
      //     </div>
      //   </div>
    );
  }
}

const mapStateToProps = ({ api }) => {
  const { feedbacksData } = api;
  return { feedbacksData };
};

export default connect(mapStateToProps, {
  fetchAllFeedbacks,
})(Feedbacks);
