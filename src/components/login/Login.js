import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {login} from "../../redux/actions/authActions";
import {Redirect} from "react-router-dom";
import {makeStyles} from "@material-ui/core";
import LoginForm from "./LoginForm";
import Loader from "react-loader-spinner";
import {reduxForm} from "redux-form";
import { useHistory } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

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

const Login = (props) => {

    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.token);
    let onSubmitClicked = false;
    const history = useHistory();
    const {image, root, paper, avatar} = useStyles();

    const onSubmit = async (formProps) => {
        onSubmitClicked = true;
        dispatch(
            await login({
                username: formProps.username,
                password: formProps.password,
            }),
            console.log("dispatch token: ", token)
        );
        if (token) {
            console.log("username: ", formProps.username);
            console.log("password: ", formProps.password);
            console.log("token: ", token);
            history.push("/home");
        }
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
                        Sign in
                    </Typography>
                    {(onSubmitClicked && (
                        <Loader
                            type="Puff"
                            color="#0000"
                            height={100}
                            width={100}
                            timeout={3000} //3 secs
                        />
                    )) ||
                    (!onSubmitClicked && token && (
                        <Redirect
                            to={{
                                pathname: "/home",
                                state: {
                                    from: props.location,
                                },
                            }}
                        />
                    ))}
                    <LoginForm onSubmit={onSubmit}/>
                    <Grid>
                        <Link variant="body2"
                              onClick={() => {
                                  history.push("/userRegister");
                              }}>
                            {"Want to rent apartments with us? Sign Up"}
                        </Link>
                    </Grid>
                </div>
            </Grid>
        </Grid>
    );
};
export default reduxForm({form: "login"})(Login);