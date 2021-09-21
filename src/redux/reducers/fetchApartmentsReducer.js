import {FETCH_APARTMENT_FAIL, FETCH_APARTMENT_PENDING, FETCH_APARTMENT_SUCCESS} from "../constants";

const initialFetchHostsApartmentsState = {
    isLoading: false,
    apartments: [],
    error: null
};

export const fetchApartmentsReducer = (state = initialFetchHostsApartmentsState, action) => {
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
            return {
                ...state,
                isLoading: false,
                data: null,
                error: action.payload
            };
        default:
            return state
    }
};