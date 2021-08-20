import React from "react";
import {makeStyles} from "@material-ui/core";
import Image from "../../assets/main.jpg";
import ApartmentsByDate from "../apartments/ApartmentsByDate";


const useStyles = makeStyles(() => ({
    media: {
        backgroundSize: "cover",
        height: "150vh",
        backgroundImage: `url(${Image})`,
    }
}));
const Home = () => {
    console.log("home");
    const { media } = useStyles();
    return (
        <div className={media}>
            <ApartmentsByDate/>
        </div>
    );
};

export default Home;