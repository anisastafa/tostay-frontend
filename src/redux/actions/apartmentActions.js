import {
    APARTMENT_SELECTED_FILE,
    CREATE_APARTMENT_FAIL,
    CREATE_APARTMENT_SUCCESS,
    DELETE_APARTMENT_FAIL,
    DELETE_APARTMENT_PENDING,
    DELETE_APARTMENT_SUCCESS,
    FETCH_APARTMENT_FAIL,
    FETCH_APARTMENT_PENDING,
    FETCH_APARTMENT_SUCCESS
} from "../constants";
import axios from "axios";

export const createApartmentAction = (data) => async (dispatch) => {
    dispatch({
        type: APARTMENT_SELECTED_FILE,
        payload: {
            selectedFile: data.files
        }
    });
    const token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("apartment_name", data.apartment_name);
    formData.append("description", data.description);
    formData.append("country", data.country);
    formData.append("city", data.city);
    formData.append("total_bedrooms", data.total_bedrooms);
    formData.append("total_bathrooms", data.total_bathrooms);
    formData.append("has_tv", data.has_tv);
    formData.append("has_internet", data.has_internet);
    formData.append("has_heating", data.has_heating);
    formData.append("price_per_night", data.price_per_night);

    for (let i = 0; i < data.files.length; i++) {
        formData.append("files", data.files[i]);
    }
    console.log("formData for loop .files: ", formData.getAll("files"));
    axios({
        method: "POST",
        url: "http://localhost:8080/apartments/createApartment",
        headers: {
            Authorization: "Bearer " + token,
        },
        data: formData,
    }).then((response) => {
        dispatch({
            type: CREATE_APARTMENT_SUCCESS,
            payload: {
                apartment: response
            }
        })
    }).catch((error) => {
        dispatch({
            type: CREATE_APARTMENT_FAIL,
            payload: {
                error: error,
            }
        })
    })
};

export const fetchHostsApartmentsAction = () => async (dispatch) => {

    const token = localStorage.getItem("token");
    dispatch({
        type: FETCH_APARTMENT_PENDING,
        isLoading: true
    });
    axios({
        method: "GET",
        url: "http://localhost:8080/apartments/getHostsApartments",
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

export const deleteApartmentAction = (apartment_id) => async (dispatch) => {
    const token = localStorage.getItem("token");
    dispatch({type: DELETE_APARTMENT_PENDING});
    await axios
        .delete("http://localhost:8080/apartments/?id=" + apartment_id, {
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json",
            },
        })
        .then((response) => {
            dispatch({
                type: DELETE_APARTMENT_SUCCESS,
                payload: {
                    pending: false,
                    apartments: apartment_id
                },
            });
        }).catch((err) => {
            console.log(err.response);
            dispatch({
                type: DELETE_APARTMENT_FAIL,
                payload: {
                    error: err,
                }
            });
        });
};



