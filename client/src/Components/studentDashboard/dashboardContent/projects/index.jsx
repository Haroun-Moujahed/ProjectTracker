import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// import EditModal from "./EditModal";
// import {deleteProject} from '../../../../actions/projectStudentAction';

class index extends Component {
  state = {
    isOpen: false
  };
  toggleIsOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
    console.log("toggled modal");
  };
  render() {
    return (
      <div className="row">
        {this.props.authStudent.projects.map((project, key) => (
          <div key={key} className="col-lg-3 col-xs-12 mt-4">
            <div
              // className={
              //   project.idInstructor
              //     ? "card"
              //     : "card text-white bg-secondary mb-3"
              // }
              className="card"
            >
              <h5 className="card-header">{project.name}</h5>
              <div className="card-body">
                <p className="card-text">{project.description}</p>
                <p className="card-text">Github Link: {project.githubLink}</p>
                {/* eslint-disable-next-line */}
                <a
                  href=""
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  Detail
                </a>
                {/* <EditModal id="#exampleModal" project={project} /> */}
                {/* <button
                  className="btn btn-danger ml-3"
                  onClick={() => {
                    deleteProject(props.project._id);
                  }}
                >
                  Delete
                </button> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
index.propTypes = {
  authStudent: PropTypes.object.isRequired
  // errors:PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  authStudent: state.authStudent
  // errors: state.errors
});
export default connect(mapStateToProps, {})(index);