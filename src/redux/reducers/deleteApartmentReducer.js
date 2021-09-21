import {
    DELETE_APARTMENT_FAIL,
    DELETE_APARTMENT_PENDING, DELETE_APARTMENT_SUCCESS,
} from "../constants";

const initialState = {
    pending: false,
    apartments: [],
    error: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case DELETE_APARTMENT_PENDING:
            return {
                ...state,
                pending: true,
            };
        case DELETE_APARTMENT_SUCCESS:
            return {
                ...state,
                // apartments: state.apartments.filter(apartment => apartment !== action.payload),
                pending: false,
            };
        case DELETE_APARTMENT_FAIL:
            return {
                ...state,
                error: action.payload,
                pending: false,
            };
        default:
            return state;
    }
}