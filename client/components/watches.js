import React from "react";
import { connect } from "react-redux";
import { fetchWatches } from "../store/watches";

class AllWatches extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getWatches();
  }

  render() {
    const watches = this.props.watches;
    return (
      <div>
        <div>
          <h2> All Watches:</h2>
          {watches}
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    watches: state.watches
  };
};

const mapDispatch = (dispatch) => {
  return {
    getWatches: () => dispatch(fetchWatches()),
  };
};

export default connect(mapState, mapDispatch)(AllWatches);
