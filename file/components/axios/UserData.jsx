import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function () {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/users');
                setData(response.data);
            }
            catch (error) {
                alert(error);
            }
        };

        fetchData();
    }, []);

    const handleDelete = async (userID) => {
        try {
            await axios.delete(`http://localhost:3000/users/${userID}`); //delete data in db.json
            setData(data.filter((user)=>(user.id !== userID))); // filter the items(except deleted id) in data and update 
            alert("User Deleted");
        }
        catch (error) {
            alert(error);
        }
    }


    return (
        <div>
            <table>
                <thead>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Delete</th>
                </thead>
                <tbody>
                    {data.map(fields => {
                        return (
                            <tr key={fields.id}>
                                <td>{fields.username}</td>
                                <td>{fields.email}</td>
                                <td><button onClick={()=>handleDelete(fields.id)}>Delete</button></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}
