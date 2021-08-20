import React, {useState} from "react";
import {makeStyles} from "@material-ui/core";
import "react-dates/initialize";
import {DateRangePicker} from "react-dates";
import "react-dates/lib/css/_datepicker.css";
// import "../apartments/styles.css";
import {TextField, Button} from "@material-ui/core";
import Autocomplete from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles((theme) => ({
    dateBar: {
        display: "flex",
        justifyContent: "center",
        paddingTop: 100,
    },
    label: {
        width: 250,
        backgroundColor: "white",
        marginLeft:21,
        marginTop: 1
    },
}));
const top100Films = [
    {title: 'The Shawshank Redemption', year: 1994},
    {title: 'The Godfather', year: 1972},
    {title: 'Pulp Fiction', year: 1994}
];

const ApartmentsByDate = () => {
    const {dateBar, label} = useStyles();

    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [focusedInput, setFocusedInput] = useState();
    return (
        <div className={dateBar}>
            <DateRangePicker
                startDate={startDate}
                startDateId="start-date"
                endDate={endDate}
                endDateId="end-date"
                onDatesChange={({startDate, endDate}) => {
                    setStartDate(startDate);
                    setEndDate(endDate);
                }}
                focusedInput={focusedInput}
                onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
            />
            <div style={{width: 300}}>
                <Autocomplete
                    className={label}
                    id="free-solo-demo"
                    freeSolo
                    options={top100Films.map((option) => option.title)}
                    renderInput={(params) => (
                        <TextField {...params} label="Location" margin="none" variant="standard"/>
                    )}
                />
            </div>
            <Button variant="contained" color="primary">
                Search
            </Button>
        </div>
    );
};

export default ApartmentsByDate;