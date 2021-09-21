import './App.css';
import React from "react";
import Header from "./components/header/Header";
import { Route } from "react-router-dom";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import UsersBookings from "./components/bookings/UsersBookings";
import HostsApartments from "./components/apartments/HostsApartments";
import UserRegister from "./components/register/UserRegister";
import HostRegister from "./components/register/HostRegister";
import {ProtectedRoute} from "./components/ProtectedRoute";
import AddApartments from "./components/apartments/AddApartments";

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Route path="/home" exact component={Home}/>
            <Route path="/" exact component={Home}/>
            <Route path="/login" component={Login}/>
            <ProtectedRoute path="/usersBookings" component={UsersBookings}/>
            <ProtectedRoute path="/hostsApartments" component={HostsApartments}/>
            <ProtectedRoute path="/addApartments" component={AddApartments}/>
            <Route path="/hostRegister" component={HostRegister}/>
            <Route path="/userRegister" component={UserRegister}/>

        </div>
    )
};

export default App;
