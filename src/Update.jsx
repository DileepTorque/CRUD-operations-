import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function Updateuser() {
    let navigate = useNavigate()

    let [modify, setModify] = useState({ name: '', email: '' })

    function change(e) {
        setModify({ ...modify, [e.target.name]: e.target.value })
    }

    let { id } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:2070/details/${id}`)
            .then(x => setModify(x.data))
            .catch(err => console.log(err))
    }, [id])

    function update(e) {
        e.preventDefault()
        axios.put(`http://localhost:2070/details/${id}`, modify)
            .then(x => navigate('/'))
            .catch(err => console.log(err))
    }

    console.log(modify)

    return (
        <>
            <form onSubmit={update}>
                <table>
                    <caption>Update User</caption>
                    <tbody>
                        <tr>
                            <td>
                                <input 
                                    onChange={change} 
                                    value={modify.name} 
                                    name='name' 
                                    type="text" 
                                    placeholder='Name' 
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input 
                                    onChange={change} 
                                    value={modify.email} 
                                    name='email' 
                                    type="email" 
                                    placeholder='Email' 
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button type="submit">Update Details</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </>
    )
}
