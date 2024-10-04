import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Style.css'; 

let Code = () => {
    // let navigate = useNavigate();
    let [state, setState] = useState([]);
    let api = "http://localhost:2070/details";
    useEffect(() => {
        axios.get(api)
            .then((response) => {
                setState(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, [api]);
    function Delete1(id) {
        axios.delete(`http://localhost:2070/details/${id}`)
            .then(() => {
                setState(state.filter(user => user.id !== id));
            })
            .catch((error) => {
                console.error("Error deleting user:", error);
            });
    }

    return (
        <>
            <Link to="/Click">
                <div><button>ADD A USER +</button></div>
            </Link>
            <div>
                <table border={"3px"}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>USERNAME</th>
                            <th>EMAIL</th>
                            <th>OPERATIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {state.map((d) => {
                            return (
                                <tr key={d.id}>
                                    <td>{d.id}</td>
                                    <td>{d.name}</td>
                                    <td>{d.username}</td>
                                    <td>{d.email}</td>
                                    <td>
                                        <Link to={`/Update/${d.id}`}>
                                            <button>Edit</button>
                                        </Link>
                                        &nbsp;
                                        <button onClick={() => Delete1(d.id)}>Delete</button>
                                        &nbsp;
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Code;
