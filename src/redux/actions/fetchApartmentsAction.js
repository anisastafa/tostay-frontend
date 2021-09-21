import {FETCH_APARTMENT_FAIL, FETCH_APARTMENT_PENDING, FETCH_APARTMENT_SUCCESS} from "../constants";
import axios from "axios";

export const fetchHostsApartmentsAction = () => async (dispatch) => {

    const token = localStorage.getItem("token");
    dispatch({
        type: FETCH_APARTMENT_PENDING,
        isLoading: true
    });
    axios({
        method: "GET",
        url: "http://localhost:8080/apartments/getHostsApartments",
        // url: "http://localhost:8080/apartments/getHostsApartments/?_page=1&_limit=1",
        headers: {
            Authorization: "Bearer " + token
        }
    }).then((response) => {
        // console.log("apartments: ", response.data);
        // console.log("images of first apartment: ", response.data[1].mediaList);
        dispatch({
            type: FETCH_APARTMENT_SUCCESS,
            payload: {
                isLoading: false,
                apartments: response.data
            }
        })
    }).catch(error => {
        dispatch({
            type: FETCH_APARTMENT_FAIL,
            payload: {
                error: error,
                isLoading: false
            }
        })
    })
};

export const getAllApartmentsAction = () => async (dispatch) => {
    axios({
        method: "GET",
        url: "http://localhost:8080/getAllApartments",
    }).then(response => {
        dispatch({
            type: FETCH_APARTMENT_SUCCESS,
            payload: {
                apartments: response.data,
            }
        })
    }).catch(error => {
        dispatch({
            type: FETCH_APARTMENT_FAIL,
            payload: {
                error: error,
            }
        });
    });
};