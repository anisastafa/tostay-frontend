import authReducer from "./authReducer"
import {combineReducers} from "redux";
import { reducer as formReducer } from "redux-form";
import {createApartmentReducer, fetchHostsApartments} from "./apartmentReducer";
import deleteApartmentReducer from "./deleteApartmentReducer";

const allReducers = combineReducers({
    form: formReducer,
    auth: authReducer,
    createApartmentReducer: createApartmentReducer,
    fetchHostsApartments: fetchHostsApartments,
    deleteApartmentReducer: deleteApartmentReducer
});

export default allReducers;