import React from "react";
import {registerHost} from "../../redux/actions/authActions";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import RegisterForm from "./RegisterForm";
import {makeStyles} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {reduxForm} from "redux-form";

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://source.unsplash.com/user/erondu)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
}));

const HostRegister = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const {image, root, paper, avatar} = useStyles();

    const onSubmit = async (formProps) => {
        dispatch(
            await registerHost({
                firstname: formProps.firstname,
                lastname: formProps.lastname,
                username: formProps.username,
                email: formProps.email,
                password: formProps.password,
            })
        );
        history.push("/login");
    };

    return (
        <Grid container component="main" className={root}>
            <CssBaseline/>
            <Grid item xs={false} sm={4} md={7} className={image}/>
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={paper}>
                    <Avatar className={avatar}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Become a Host.
                    </Typography>
                    <RegisterForm onSubmit={onSubmit}/>
                </div>
            </Grid>
        </Grid>
    )
};

export default reduxForm({form: "register"})(HostRegister);