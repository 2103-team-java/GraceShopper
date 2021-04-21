import React from "react";
import { connect } from "react-redux";
import { getOneItem } from "../store/watches";
import { Link } from "react-router-dom";

export class SingleItem extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.oneItem(id);
  }

  render() {
    const { singleItem } = this.props;

    // const orders = singleItem.orders || [];
    //association for orders

    return (
      <div>

        <img src={singleItem.ImageURL} alt={singleRobot.name} className="image" />

        <h3>Name: {singleItem.name}</h3>
        <h3>Brand: {singleItem.brand}</h3>
        <h3>Price: {singleItem.price}</h3>
        <h3>Description: {singleItem.description}</h3>


        <Link to={`/robots/${singleRobot.id}/update`}>
          <button type="submit" className="editButton">edit</button>
        </Link>

        <h3>Projects assigned to {singleRobot.name}</h3>


        {projects.length > 0 ? (
          <div className="listOfRoPj">
            {projects.map((project) => (
              <div key={project.id}>
                <Link to={`/projects/${project.id}`} className="singleLink">{project.title}</Link>
                <div>Complete: {project.completed.toString()}</div>
                <div>Deadline: {project.deadline}</div>
                <div>Priortiy: {project.priority}</div>
              </div>
            ))}
          </div> )
          : (
          <div className="listOfRoPjNone">There are no projects at this time.</div>
            )
        }

      </div>
    );
  }
}

const mapState = (state) => {
  return {
    singleItem: state.oneItemReducer.item,
  };
};

const mapDispatch = (dispatch) => {
  return {
    oneItem: (id) => dispatch(getOneItem(id)),
  };
};

export default connect(mapState, mapDispatch)(SingleItem);
