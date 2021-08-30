import React from "react";
import {Toolbar, AppBar, Typography, Button, makeStyles} from "@material-ui/core";
import {Link as RouterLink} from "react-router-dom";
import "../header/Header.css"
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles(() => ({
    header: {
        backgroundColor: "#FFFFFF",
        height: 100,
        paddingLeft: "80px",
        paddingRight: "80px",
    },
    logo: {
        fontFamily: "Work Sans, sans-serif",
        fontWeight: 900,
        color: "#388E3C",
        textAlign: "left",
    },
    headerButtons: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 600,
        marginLeft: "38px",
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
        paddingTop: "17px"
    },
}));

const Header = () => {
    const {header, logo, headerButtons, toolbar} = useStyles();
    const token = useSelector((state) => state.auth.token);
    const history = useHistory();
    const displayHeader = () => {
        return <Toolbar className={toolbar}>
            {toStayLogo}
            <div>{getHeaderButtons()}</div>
        </Toolbar>;
    };

    const toStayLogo = (
        <Typography variant="h6" className={logo}
                    {...{
                        to: "/home",
                        component: RouterLink
                    }}
        >
            toStay
        </Typography>
    );

    const authority = useSelector((state) => state.auth.authority);
    console.log("authorities from header: ", authority);
    const getHeaderButtons = () => {
        return (
            <div>
                {(token && authority === "ROLE_HOST" &&
                    [
                        <Button
                            {...{
                                to: "/addApartments",
                                component: RouterLink,
                                className: headerButtons
                            }}>
                            Add Apartments
                        </Button>,
                        <Button
                            {...{
                                to: "/hostsApartments",
                                component: RouterLink,
                                className: headerButtons
                            }}>
                            My Apartments
                        </Button>
                    ]
                )}
                {(token && authority === "ROLE_USER" &&
                    <Button
                        {...{
                            to: "/usersBookings",
                            component: RouterLink,
                            className: headerButtons
                        }}>
                        My Bookings
                    </Button>
                )}
                {(!token &&
                    <Button
                        {...{
                            to: "/hostRegister",
                            component: RouterLink,
                            className: headerButtons
                        }}>
                        Become a Host
                    </Button>
                )}
                {(!token &&
                    <Button
                        variant="outlined" color="primary"
                        {...{
                            to: "/login",
                            component: RouterLink,
                            className: headerButtons
                        }}
                    >
                        Log In
                    </Button>
                ) ||
                <Button
                    variant="outlined" color="secondary"
                    onClick={() => {
                        localStorage.removeItem("token");
                        history.push("/home")
                    }}
                    {...{
                        to: "/home",
                        component: RouterLink,
                        className: headerButtons
                    }}
                >
                    Log Out
                </Button>
                }
            </div>
        )
    };
    return (
        <header>
            <AppBar className={header}>{displayHeader()}</AppBar>
        </header>
    )
};

export default Header;