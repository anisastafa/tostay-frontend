import authReducer from "./authReducer"
import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";
import {createApartmentReducer} from "./apartmentReducer";
import deleteApartmentReducer from "./deleteApartmentReducer";
import {fetchApartmentsReducer} from "./fetchApartmentsReducer";

const allReducers = combineReducers({
    form: formReducer,
    auth: authReducer,
    createApartmentReducer: createApartmentReducer,
    fetchApartmentsReducer: fetchApartmentsReducer,
    deleteApartmentReducer: deleteApartmentReducer
});

export default allReducers;