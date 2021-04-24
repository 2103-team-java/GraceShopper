import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchWatches } from '../store/watches';
import { Link } from 'react-router-dom';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
    header: {
        paddingTop: 5,
    },
}));

export function AllWatches(props) {
    const classes = useStyles();
    let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    useEffect(() => {
        props.getWatches();
    }, []);
    const watches = props.watches;
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
            <Grid container>
                {watches.map((watch) => (
                    <Grid item key={watch.id} className={classes.watch}>
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
