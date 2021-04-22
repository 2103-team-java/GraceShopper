import React from 'react';
import { connect } from 'react-redux';
import { fetchWatches } from '../store/watches';
import { Link } from 'react-router-dom';
import { Button, Grid, Typography } from '@material-ui/core';

export class AllWatches extends React.Component {
    componentDidMount() {
        this.props.getWatches();
    }

    render() {
        const watches = this.props.watches;
        return (
            <div>
                {/* <section className="nav">
                    <h3 className="cart">Cart(1)</h3>
                    <Button
                        className="login"
                        variant="contained"
                        color="primary"
                    >
                        Login
                    </Button>
                    <Button
                        className="checkout"
                        variant="contained"
                        color="primary"
                    >
                        Checkout
                    </Button>
                </section> */}

                <section>
                    <Typography
                        variant="h1"
                        className="header"
                        data-aos="zoom-out"
                    >
                        Java Luxury Timepieces
                    </Typography>
                </section>

                <section className="slider">
                    <div
                        id="carousel-example"
                        class="carousel slide"
                        data-ride="carousel"
                        data-interval="3000"
                    >
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
                            data-slide="prev"
                        >
                            <span class="glyphicon glyphicon-chevron-left"></span>
                        </a>
                        <a
                            class="right carousel-control"
                            href="#carousel-example"
                            data-slide="next"
                        >
                            <span class="glyphicon glyphicon-chevron-right"></span>
                        </a>
                    </div>
                </section>
                <Grid container>
                    {watches.map((watch) => (
                        <Grid item xs={3}>
                            {/* <section className="watchInfo" key={watch.id}> */}
                            <Link to={`/${watch.id}`}>
                                {' '}
                                <img src={watch.ImageURL} />
                            </Link>
                            <Typography className="brand">
                                {watch.brand}
                            </Typography>
                            <Typography className="brand">
                                {watch.name}
                            </Typography>
                            <Typography className="brand">
                                ${watch.price}
                            </Typography>
                            {/* <img src={watch.ImageURL} /> */}
                            {/* </section> */}
                        </Grid>
                        // <section>
                        //     // <h2> Contact Info</h2>
                        // </section>
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
        getWatches: () => dispatch(fetchWatches()),
    };
};

export default connect(mapState, mapDispatch)(AllWatches);
