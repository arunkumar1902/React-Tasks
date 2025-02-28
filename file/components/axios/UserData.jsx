import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function () {

    const [data, setData] = useState([]);
    const [id, setId] = useState(0);
    const [newName, setNewName] = useState('');
    const [newEmail, setNewEmail] = useState('');


    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3000/users');
            setData(response.data);
        }
        catch (error) {
            alert(error);
        }
    };

    useEffect(() => {
        fetchData();
    },[]);

    const handleDelete = async (userID) => {
        try {
            await axios.delete(`http://localhost:3000/users/${userID}`); //delete data in db.json
            setData(data.filter((user) => (user.id !== userID))); // filter the items(except deleted id) in data and update 
            alert("User Deleted");
        }
        catch (error) {
            alert(error);
        }
    }

    const handleSubmit = async(event)=>{
        event.preventDefault();

        if (!newName || !newEmail) {
            alert('Enter username and email');
            return;
        }
      
        try {
            const updatedUser = {
                username: newName,
                email: newEmail
            };

            await axios.patch(`http://localhost:3000/users/${id}`, updatedUser);
            fetchData(); 
            alert("User Updated");

            setData(data.map((user) => (user.id === id ? { ...user, ...updatedUser } : user)));

            setId(0);
            setNewName('');
            setNewEmail('');
        }
        catch (error) {
            alert("Id does not exist:  " + error);
        }
    }


    return (
        <div>
            <table>
                <thead>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Delete</th>
                </thead>
                <tbody>
                    {data.map(fields => {
                        return (
                            <tr key={fields.id}>
                                <td>{fields.id}</td>
                                <td>{fields.username}</td>
                                <td>{fields.email}</td>
                                <td><button onClick={() => handleDelete(fields.id)}>Delete</button></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            <br />

            <div>
                <form onSubmit={handleSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td><label htmlFor="id">ID</label></td>
                                <td><input type="number" id='id' value={id} onChange={(event)=>setId(event.target.value)}/></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="username">Username</label></td>
                                <td><input type="text" id='username' value={newName} onChange={(event)=>setNewName(event.target.value)}/></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="email">Email</label></td>
                                <td><input type="email" id='email' value={newEmail} onChange={(event)=>setNewEmail(event.target.value)}/></td>
                            </tr>
                            <button type='submit'>Update</button>
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    )
}
