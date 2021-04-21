import React from "react";
import { connect } from "react-redux";
import { fetchWatches } from "../store/watches";
import { Link } from 'react-router-dom';
// import "./watches.css"
// import {Slide} from './slide'

export class AllWatches extends React.Component {
  componentDidMount() {
    this.props.getWatches();
  }

  render() {
    const watches = this.props.watches;
    return (
      <div>
        <div>
          <h2 className="title"> All Watches:</h2>
        </div>
          {/* <h2> Slideshow</h2>
          <h2> Contact Info</h2> */}
          {watches.map((watch) => (
            <div key={watch.id}>
              <div>
                Name:<Link to={`/watches/${watch.id}`}>{watch.name}</Link>
              <img src={watch.ImageURL} />
              </div>
              {/* <button onClick={() => this.props.deleteRobot(robot.id)}>X</button> */}
            </div>
            
          ))}
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    watches: state.watchesReducer,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getWatches: () => dispatch(fetchWatches()),
  };
};

export default connect(mapState, mapDispatch)(AllWatches);
