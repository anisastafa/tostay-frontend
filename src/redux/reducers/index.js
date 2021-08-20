import authReducer from "./authReducer"
import {combineReducers} from "redux";
import { reducer as formReducer } from "redux-form";

const allReducers = combineReducers({
    form: formReducer,
    auth: authReducer,
});

export default allReducers;