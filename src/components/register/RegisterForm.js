import Button from "@material-ui/core/Button";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Field, reduxForm} from "redux-form";
import CustomInput from "../CustomInput";
import {useDropzone} from "react-dropzone";
import {useLocation} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    form: {},
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

let RegisterForm = (props) => {
    const classes = useStyles();
    const {handleSubmit, onSubmit} = props;
    const location = useLocation();
    return (
        <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
            <Field
                type="text"
                placeholder="FirstName"
                name="firstname"
                component={CustomInput}
            />
            <Field
                type="text"
                placeholder="lastname"
                name="LastName"
                component={CustomInput}
            />
            <Field
                type="text"
                placeholder="Username"
                name="username"
                component={CustomInput}
            />
            <Field
                type="text"
                name="email"
                placeholder="email"
                component={CustomInput}
            />
            <Field
                type="password"
                name="password"
                placeholder="Password"
                component={CustomInput}
            />
            <Field
                type="text"
                name="description"
                placeholder="description"
                component={CustomInput}
            />
            <Field
                type="text"
                name="phone_number"
                placeholder="Phone Number"
                component={CustomInput}
            />

            {location.pathname === "/hostRegister" &&
            <Field
                name="file"
                component={DropzoneField}
            />
            }
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
    RegisterForm
);

function DropzoneField(props) {
    const {
        input: {onChange}
    } = props;
    const {getRootProps, getInputProps} = useDropzone({
        onDrop: file => onChange(file)
    });

    const classes = useStyles();

    return (
        <div>
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                <p>Drop Image or Click Here</p>
            </div>
        </div>
    );
}