import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

let User = () => {
    let [Val, Orgval] = useState({ name: "", email: "" });
    let navigate = useNavigate();

    let change = (e) => {
        Orgval({ ...Val, [e.target.name]: e.target.value });
    };

    function add(e) {
        e.preventDefault();
        axios.post("http://localhost:2070/details", Val)
            .then((response) => {
                console.log(response.data);  
                navigate("/");  
            })
            .catch((error) => {
                console.error("There was an error adding the user!", error);
            });
    }

    return (
        <>
            <h1>ADD NEW USER</h1>
            <br />
            <form>
            <input  type="text"  placeholder="Id no"  name="id"   value={Val.id}  onChange={change}  /> <br />
                <input type="text"  placeholder="Username"  name="name"  value={Val.name}  onChange={change} />
                <br />
                <input  type="text"   placeholder="Email address"  name="email"  value={Val.email}  onChange={change}  />
                <br />
                <button type="submit" onClick={add}>ADD USER</button>
            </form>
        </>
    );
};

export default User;
