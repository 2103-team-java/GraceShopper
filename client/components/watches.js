import React from "react";
import { connect } from "react-redux";
import { fetchWatches } from "../store/watches";
import { Link } from "react-router-dom";
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
        <section className="navbar">
              <h3>Cart(1)</h3>
          </section>
        <section>
          <h1 className="header" data-aos="zoom-out">
            Java Luxury Timepieces
          </h1>
        </section>

        <section className="slider">
          <div
            id="carousel-example"
            class="carousel slide"
            data-ride="carousel"
            data-interval="3000">

            <div class="carousel-inner">
              <div class="item active">
                  <img src="https://www.morettis.com/wp-content/uploads/2019/10/m126234-0015-october-rolex-banner.jpg" />
              </div>
              <div class="item">
                  <img src="https://www.patseas.gr/wp-content/uploads/2015/01/patek-philippe-banner-watch.jpg" />
              </div>
              <div class="item">
                  <img src="https://argyll-arcade.com/site/wp-content/uploads/2016/10/cm-audemars-piguet-royal-oak-chronograph-watch.jpg" />
              </div>
            </div>

            <a
              class="left carousel-control"
              href="#carousel-example"
              data-slide="prev">
              <span class="glyphicon glyphicon-chevron-left"></span>
            </a>
            <a
              class="right carousel-control"
              href="#carousel-example"
              data-slide="next">
              <span class="glyphicon glyphicon-chevron-right"></span>
            </a>
          </div>
        </section>

        {watches.map((watch) => (
          <section className="watchInfo" key={watch.id}>
            <p className="brand">{watch.brand}</p>
            <p className="brand">{watch.name}</p>
            <br />
            <Link to={`/watches/${watch.id}`}> <img src ={watch.ImageURL} /></Link>
            <p className="brand">${watch.price}</p>
            {/* <img src={watch.ImageURL} /> */}
          </section>
          // <section>
          //     // <h2> Contact Info</h2>
          // </section>
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
