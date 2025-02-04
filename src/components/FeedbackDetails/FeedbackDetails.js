// import React, { Component } from "react";

// class FeedbackDetails extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       notes: this.props.data.notes,
//     };
//     this.handleAddNote = this.handleAddNote.bind(this);
//     this.handleCheck = this.handleCheck.bind(this);
//     this.handleNotesChange = this.handleNotesChange.bind(this);
//   }
//   handleNotesChange(e) {
//     this.setState({ notes: e.target.value });
//   }
//   handleAddNote() {
//     if (this.state.notes !== "" && this.state.notes !== this.props.data.notes)
//       this.props.handleEdit(this.props.data.id, { notes: this.state.notes });
//   }
//   handleCheck() {
//     let checked = !!this.props.data.checked ? this.props.data.checked : false;
//     this.props.handleEdit(this.props.data.id, {
//       checked: !checked,
//     });
//   }
//   render() {
//     const { timestamp, trackingBox, image2, state, duration, notes } =
//       this.props.data;
//     let checked = !!this.props.data.checked ? this.props.data.checked : false;
//     return (
//       <div className="user-list d-sm-flex flex-sm-row card">
//         <div className="description">
//           <h3>
//             {timestamp} {!!trackingBox ? `// ${trackingBox.name}` : ""}
//           </h3>
//           <h3>Status:</h3> {state}
//           <h3>Dauer:</h3> {duration}
//           {!!notes && <p>{notes}</p>}
//           <ListGroup className="list-inline d-sm-flex flex-sm-row gx-btn-list">
//             {checked && (
//               <ListGroupItem className="border-0">
//                 <a
//                   className="btn btn-dark jr-btn-rounded btn-gray"
//                   onClick={this.handleCheck}
//                 >
//                   Uncheck
//                 </a>
//               </ListGroupItem>
//             )}
//             {!checked && (
//               <ListGroupItem className="border-0">
//                 <a
//                   className="btn btn-dark jr-btn-rounded btn-primary"
//                   onClick={this.handleCheck}
//                 >
//                   Check
//                 </a>
//               </ListGroupItem>
//             )}
//           </ListGroup>
//           <div className="col-md-4 col-12 mt-4">
//             <div className="form-group">
//               <label htmlFor="exampleFormControlTextarea1">Notes</label>
//               <textarea
//                 className="form-control"
//                 id="exampleFormControlTextarea1"
//                 rows="2"
//                 placeholder="Add notes here"
//                 onChange={this.handleNotesChange}
//               />
//               <ListGroup className="list-inline d-sm-flex flex-sm-row gx-btn-list">
//                 <ListGroupItem className="border-0">
//                   <a
//                     className="btn btn-light jr-btn-rounded btn-gray"
//                     onClick={this.handleAddNote}
//                   >
//                     Add Note
//                   </a>
//                 </ListGroupItem>
//               </ListGroup>
//             </div>
//           </div>
//         </div>
//         {!!image2 && (
//           <div className="img-section ml-sm-4 mb-2">
//             <img className="img-fluid " src={image2} alt="..." />
//           </div>
//         )}
//       </div>
//     );
//   }
// }

// export default FeedbackDetails;
