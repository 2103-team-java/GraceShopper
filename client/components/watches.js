import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchWatches } from '../store/watches';
import { Link } from 'react-router-dom';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { LocalConvenienceStoreOutlined } from '@material-ui/icons';

export class AllWatches extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: 'All',
            singleWatch: [],
        };
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        this.props.getWatches();
    }

    //the state is changing after all the watches render. So it's rendering the watches from the previous section
    handleChange(event) {
        console.log('i have been hit');
        this.setState({ brand: event.target.value });
        const watches = this.props.watches;
        if (watches.length > 0) {
            const singleWatch = watches.filter(
                (watch) => watch.brand === this.state.brand
            );
            console.log(singleWatch);
            this.setState({ singleWatch: singleWatch });
        }
    }

    render() {
        let formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        });
        let watches;
        if (this.state.singleWatch.length > 0) {
            watches = this.state.singleWatch;
        } else {
            watches = this.props.watches;
        }
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

                <div className="filter">
                    <div className="filter-result">
                        {this.props.count} Watches{' '}
                    </div>

                    <div className="filter-brand">
                        Filter By Brand
                        <select onChange={this.handleChange}>
                            <option name="brand" value="All">
                                All
                            </option>
                            <option name="brand" value="Omega">
                                Omega
                            </option>
                            <option name="brand" value="Rolex">
                                Rolex
                            </option>
                            ``
                            <option name="brand" value="Patek Phillipe">
                                Patek Phillipe
                            </option>
                            <option name="brand" value="Audemars Piguet">
                                Audemars Piguet
                            </option>
                            <option name="brand" value="Vacheron Constantin">
                                Vacheron Constantin
                            </option>
                            <option name="brand" value="Jaeger LeCoultre">
                                Jaeger LeCoultre
                            </option>
                            <option name="brand" value="Cartier">
                                Cartier
                            </option>
                            <option name="brand" value="A.Lange & Sohne">
                                A.Lange & Sohne
                            </option>
                            <option name="brand" value="Richard Mille">
                                Richard Mille
                            </option>
                        </select>
                    </div>
                </div>

                <Grid container>
                    {watches.map((watch) => (
                        <Grid item key={watch.id}>
                            <Link to={`/watches/${watch.id}`}>
                                {' '}
                                <img src={watch.ImageURL} />
                            </Link>
                            <Typography variant="h4">{watch.brand}</Typography>
                            <Typography variant="h4">{watch.name}</Typography>
                            <Typography variant="h4">
                                {formatter.format(watch.price)}
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
        getWatches: (brand) => dispatch(fetchWatches()),
    };
};

export default connect(mapState, mapDispatch)(AllWatches);
