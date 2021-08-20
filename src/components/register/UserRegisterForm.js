import Button from "@material-ui/core/Button";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import { Field, reduxForm } from "redux-form";
import CustomInput from "../CustomInput";

const useStyles = makeStyles((theme) => ({
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

let UserRegisterForm = (props) => {
    const classes = useStyles();
    const {handleSubmit, onSubmit} = props;
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Field
                type="text"
                placeholder="Username"
                name="username"
                component={CustomInput}
            />
            <Field
                type="password"
                name="password"
                placeholder="Password"
                component={CustomInput}
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
            >
                Register
            </Button>
        </form>
    );
};
export default reduxForm({form: "register"})(
    UserRegisterForm
);