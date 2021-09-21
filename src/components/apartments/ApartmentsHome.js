import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllApartmentsAction} from "../../redux/actions/fetchApartmentsAction";


export const ApartmentsHome = () => {

    const dispatch = useDispatch();
    const apartments = useSelector(state => state.fetchApartmentsReducer.apartments);
    console.log("apartmentsss ", apartments);

    useEffect(() => {
        dispatch(getAllApartmentsAction())
    }, []);

    return (
        <div>apartments home</div>
    );
};