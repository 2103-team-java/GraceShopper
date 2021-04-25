import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchWatches } from "../store/watches";
import { Link } from "react-router-dom";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Filter from "./Filter";
// import { filterWatches } from "../store/filter";

// const useStyles = makeStyles(() => ({
//   header: {
//     paddingTop: 5,
//   },
// }));

// export function AllWatches(props) {

//     const classes = useStyles();

//     let formatter = new Intl.NumberFormat("en-US", {
//     style: "currency",
//     currency: "USD",
//   });

//   if (props.watches.length === 0) {
//       props.getWatches();
//     }

//   const watches = props.watches;
//   const brand = props.brand;

export class AllWatches extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "All",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.props.getWatches('All');
  }

//   filterWatches(event) {
//     const brand = [...this.sate.brand]
//       event.preventDefault();
//       console.log(event.target.value);
//       this.setState({
//         brand.filter(brands => {
//             return brands.brand.includes(this.state.brand)
//         })
//     });
//   };

//the state is changing after all the watches render. So it's rendering the watches from the previous section
handleChange(event) {
    this.setState({
        ...this.state, brand: event.target.value
    })
    this.props.getWatches(this.state.brand);
}

  render() {
    const watches = this.props.watches;
    return (
      <div>
        <section>
          <Typography
            variant="h1"
            className="header"
            data-aos="zoom-out"
            align="center"
          >
            Java Luxury Timepieces
          </Typography>
        </section>

        <section className="slider">
          <div
            id="carousel-example"
            className="carousel slide"
            data-ride="carousel"
            data-interval="3000"
          >
            <div className="carousel-inner">
              <div className="item active">
                <img src="https://www.morettis.com/wp-content/uploads/2019/10/m126234-0015-october-rolex-banner.jpg" />
              </div>
              <div className="item">
                <img src="https://www.patseas.gr/wp-content/uploads/2015/01/patek-philippe-banner-watch.jpg" />
              </div>
              <div className="item">
                <img src="https://argyll-arcade.com/site/wp-content/uploads/2016/10/cm-audemars-piguet-royal-oak-chronograph-watch.jpg" />
              </div>
            </div>

            <a
              className="left carousel-control"
              href="#carousel-example"
              data-slide="prev"
            >
              <span className="glyphicon glyphicon-chevron-left"></span>
            </a>
            <a
              className="right carousel-control"
              href="#carousel-example"
              data-slide="next"
            >
              <span className="glyphicon glyphicon-chevron-right"></span>
            </a>
          </div>
        </section>

        <div className='filter'>
        <div className="filter-result">{this.props.count} Watches </div>
        
        <div className="filter-brand">
            Filter By Brand 
            <select value = {this.state.brand} onChange={this.handleChange}>
            <option value="All">All</option>
            <option value="Omega">Omega</option>
            <option value="Rolex">Rolex</option>
            <option value="Patek Phillipe">Patek Phillipe</option>
            <option value="Audemars Piguet">Audemars Piguet</option>
            <option value="Vacheron Constantin">Vacheron Constantin</option>
            <option value="Jaeger LeCoultre">Jaeger LeCoultre</option>
            <option value="Cartier">Cartier</option>
            <option value="A.Lange & Sohne">A.Lange & Sohne</option>
            <option value="Richard Mille">Richard Mille</option>
          </select>
        </div>
      </div>

        {/* <div className="control" style={{ minWidth: "300px" }}>
        <input onChange={(e) => { this.filterByInput(e);
          }} style={{ width: "100%" }} placeholder="Filter by" type="text" />
      </div> */}

        <Grid container>
          {watches.map((watch) => (
            <Grid item key={watch.id}>
              <Link to={`/watches/${watch.id}`}>
                {" "}
                <img src={watch.ImageURL} />
              </Link>
              <Typography variant="h4">{watch.brand}</Typography>
              <Typography variant="h4">{watch.name}</Typography>
              <Typography variant="h4">${watch.price}</Typography>
              <Typography variant="h4">
                {/* {formatter.format(watch.price)} */}
              </Typography>
            </Grid>
          ))}
        </Grid>
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
    getWatches: (brand) => dispatch(fetchWatches(brand)),
  };
};

export default connect(mapState, mapDispatch)(AllWatches);
