import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteApartmentAction} from "../../redux/actions/apartmentActions";
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
import TvIcon from '@material-ui/icons/Tv';
import WifiIcon from '@material-ui/icons/Wifi';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import Input from "@material-ui/core/Input";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from '@material-ui/icons/Search';
import {Pagination} from "./Pagination";
import {fetchHostsApartmentsAction} from "../../redux/actions/fetchApartmentsAction";
import MapComponent from "../MapComponent/MapComponent";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 600,
        marginTop: 40
    },
    gridContainer: {
        paddingLeft: 400,
        // display: 'flex',
        // justifyContent: 'center',

    },
    media: {
        width: "100%",
        height: "65vh",
        backgroundSize: "cover",
    },
    icons: {
        marginLeft: 10,
    },
    search: {
        marginTop: 30,
        width: 300,
        height: 40,
        fontSize: 20,
        paddingLeft: 10,
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    price: {
        margin: 2,
        padding: 3,
        borderRadius: 2,
        border: "1px solid #2b2eef"
    }
}));

const responsive = {
    desktop: {
        breakpoint: {max: 3000, min: 1024},
        items: 1,
        paritialVisibilityGutter: 60
    },
    tablet: {
        breakpoint: {max: 1024, min: 464},
        items: 1,
        paritialVisibilityGutter: 50
    },
    mobile: {
        breakpoint: {max: 464, min: 0},
        items: 1,
        paritialVisibilityGutter: 30
    }
};

const HostsApartments = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const apartments = useSelector(state => state.fetchApartmentsReducer.apartments);

    const [page, setPage] = useState(0);
    const perPage = 2;
    const pagesVisited = page * perPage;

    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        dispatch(fetchHostsApartmentsAction());
    }, []);

    const pageCount = Math.ceil(apartments.length / perPage);

    const changePage = ({selected}) => {
        setPage(selected);
    };


    return (
        <Grid container spacing={4} className={classes.gridContainer} justify="center">
            <Grid item xs={12}>
                <Input placeholder="Search apartment by city" className={classes.search}
                       onChange={event => {
                           setSearchTerm(event.target.value)
                       }}
                />
                <IconButton type="submit" className={classes.iconButton} aria-label="search">
                    <SearchIcon/>
                </IconButton>
                {apartments.filter((val) => {
                    if (searchTerm === "") {
                        console.log("val: ", val);
                        return val;
                    } else if (val.location.city.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return val;
                    }
                }).slice(pagesVisited, pagesVisited + perPage)
                    .map(apartment => (
                        <Card className={classes.root}>
                            <CardActionArea>
                                <Carousel
                                    ssr
                                    itemClass="image-item"
                                    responsive={responsive}
                                >
                                    {apartment.mediaList.slice(0, 5).map((image, index) => {
                                        return (
                                            <div key={index} style={{position: "relative", borderRadius: "10px"}}>
                                                <img
                                                    draggable={false}
                                                    alt="text"
                                                    src={`data:image/jpg;base64,${image.pic}`}
                                                    className={classes.media}
                                                />
                                            </div>
                                        );
                                    })}
                                </Carousel>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h1">
                                        {apartment.apartment_name}
                                    </Typography>
                                    <Typography variant="body1" color="textPrimary" component="h1">
                                        {apartment.location.city}, {apartment.location.country}
                                    </Typography>
                                    <Typography variant="body2" color="textPrimary" component="h1">
                                        {apartment.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <Grid container className={classes.icons}>
                                <Grid item xs={4}>
                                    <Typography>
                                        {apartment.has_tv ? "Apartment has TV" : "Apartment does not have a TV"}
                                    </Typography>
                                </Grid>
                                <Grid item xs={8} className={classes.onlyIcons}>
                                    <TvIcon/>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography>
                                        {apartment.has_internet ? "Apartment has Internet" : "Apartment does not have Internet"}
                                    </Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <WifiIcon/>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography color="textPrimary">
                                        {apartment.has_heating ? "Apartment has Heating" : "Apartment does not have Heating"}
                                    </Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <AcUnitIcon/>
                                </Grid>
                                <Typography color="primary" className={classes.price}>
                                    Price per night : ${apartment.price_per_night}
                                </Typography>
                            </Grid>
                            <CardActions>
                                <Button size="small" color="secondary" variant="contained" onClick={() => {
                                    if (window.confirm("Are you sure you want to delete this apartment?")) {
                                        dispatch(deleteApartmentAction(apartment.apartment_id));
                                        console.log("delete: ", apartment.apartment_id);
                                        window.location.reload(false);
                                    }
                                }}>
                                    Delete Apartment
                                </Button>
                            </CardActions>
                            <MapComponent/>
                            </Card>
                    ))}
                <Pagination
                    pageCount={pageCount}
                    changePage={changePage}
                />
            </Grid>
        </Grid>
    );
};

export default HostsApartments;