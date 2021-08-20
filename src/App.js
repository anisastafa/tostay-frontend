import './App.css';
import React from "react";
import Header from "./components/header/Header";
import { Route } from "react-router-dom";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import HostRegister from "./components/register/HostRegister";
import UsersBookings from "./components/bookings/UsersBookings";
import HostsApartments from "./components/apartments/HostsApartments";
import UserRegister from "./components/register/UserRegister";

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Route path="/home" exact component={Home}/>
            <Route path="/" exact component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/hostRegister" component={HostRegister}/>
            <Route path="/usersBookings" component={UsersBookings}/>
            <Route path="/hostsApartments" component={HostsApartments}/>
            <Route path="/hostRegister" component={HostRegister}/>
            <Route path="/userRegister" component={UserRegister}/>
        </div>
    )
};

export default App;
