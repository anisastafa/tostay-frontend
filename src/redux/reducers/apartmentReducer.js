import {
    APARTMENT_SELECTED_FILE,
    CREATE_APARTMENT_FAIL,
    CREATE_APARTMENT_SUCCESS,
} from "../constants";


const initialStateAddApartment = {
    error: null,
    selectedFile: [],
    apartment: null,
};

export const createApartmentReducer = (state = initialStateAddApartment, action) => {
    switch (action.type) {
        case APARTMENT_SELECTED_FILE:
            return {
                ...state,
                selectedFile: action.payload
            };
        case CREATE_APARTMENT_SUCCESS:
            return {
                ...state,
                apartment: action.payload
            };
        case CREATE_APARTMENT_FAIL:
            return {
                ...state,
                selectedFile: null,
                apartment: null,
                error: action.payload.error,
            };
        default:
            return state
    }
};

