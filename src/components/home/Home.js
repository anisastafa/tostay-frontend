import React from "react";
import {makeStyles} from "@material-ui/core";
import Image from "../../assets/main.jpg";
import {ApartmentsHome} from "../apartments/ApartmentsHome";


const useStyles = makeStyles(() => ({
    media: {
        backgroundSize: "cover",
        height: "150vh",
        backgroundImage: `url(${Image})`,
    }
}));
const Home = () => {
    const { media } = useStyles();
    return (
        <div className={media}>
            <ApartmentsHome/>
        </div>
    );
};

export default Home;