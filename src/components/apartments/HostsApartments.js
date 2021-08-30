import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteApartmentAction, fetchHostsApartmentsAction} from "../../redux/actions/apartmentActions";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const useStyles = makeStyles({
    root: {
        maxWidth: 600,
        marginTop: 50
    },
    gridContainer: {
        paddingLeft: 400,
    },
    // media: {
    //     borderRadius: "10px",
    //     height: "60vh"
    // },
});

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        paritialVisibilityGutter: 60
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        paritialVisibilityGutter: 50
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        paritialVisibilityGutter: 30
    }
};

const HostsApartments = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const apartments = useSelector(state => state.fetchHostsApartments.apartments);


    useEffect(() => {
        dispatch(fetchHostsApartmentsAction());
    }, []);

    return (
        <Grid container spacing={4} className={classes.gridContainer} justify="center">
            <Grid item xs={12}>
                {apartments.map((apartment, index) => (
                    <Card className={classes.root}>
                        <CardActionArea>
                            <Carousel
                                ssr
                                itemClass="image-item"
                                responsive={responsive}
                            >
                                {apartment.mediaList.slice(0, 5).map((image, index) => {
                                    return (
                                        <div key={index} style={{ position: "relative", borderRadius: "10px" }}>
                                            <img
                                                draggable={false}
                                                alt="text"
                                                style={{width: "100%", height: "60vh",  backgroundSize: "cover" }}
                                                src={`data:image/jpg;base64,${image.pic}`}
                                            />
                                        </div>
                                    );
                                })}
                            </Carousel>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {apartment.apartment_name}
                                </Typography>
                                <Typography variant="body1" color="textPrimary" component="h1">
                                    {apartment.location.city}, {apartment.location.country}
                                </Typography>
                                <Typography variant="caption" color="textPrimary" component="h1">
                                    {apartment.description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="secondary" variant="outlined" onClick={() => {
                                dispatch(deleteApartmentAction(apartment.apartment_id));
                                console.log("delete: ", apartment.apartment_id);
                                // window.location.reload(false);
                            }}>
                                Delete Apartment
                            </Button>
                        </CardActions>
                    </Card>
                ))}
            </Grid>
        </Grid>
    );
};

export default HostsApartments;