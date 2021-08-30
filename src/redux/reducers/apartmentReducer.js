import {
    APARTMENT_SELECTED_FILE,
    CREATE_APARTMENT_FAIL,
    CREATE_APARTMENT_SUCCESS, FETCH_APARTMENT_FAIL, FETCH_APARTMENT_PENDING, FETCH_APARTMENT_SUCCESS,
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

const initialFetchHostsApartmentsState = {
    isLoading: false,
    apartments: [],
    error: null
};

export const fetchHostsApartments = (state = initialFetchHostsApartmentsState, action) => {
    switch (action.type) {
        case FETCH_APARTMENT_PENDING:
            return {
                ...state,
                isLoading: true,
            };
        case FETCH_APARTMENT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                apartments: action.payload.apartments,
            };
        case FETCH_APARTMENT_FAIL:
            return{
                ...state,
                isLoading: false,
                data: null,
                error: action.payload
            };
        default:
            return state
    }
};
