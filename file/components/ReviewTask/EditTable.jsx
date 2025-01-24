import React, { useState } from 'react'

export default function EditTable() {

    const [items, setItems] = useState([
        { id: '1', name: 'Arun' },
        { id: '2', name: 'Gopi' },
        { id: '3', name: 'Karthi' }
    ]);

    const [editId, setEditId]=useState(null);
    const [editName, setEditName]=useState('');


    const handleEdit=((id,name)=>{
        // here, id and name is stored in editId and editName
        setEditId(id);
        setEditName(name);
    }); 

    const handleInput = ((event)=>{
        // here, the editname(which is already set as same as name in handleEdit) is updated to new name
        setEditName(event.target.value);
    });

    const handleSave = () =>{
        setItems(items.map((item)=>
            //  once the save button is clicked , itchecks the id matches - the name is updated
            item.id === editId ? { ...item, name: editName} : item 
        ));

        alert(`Name is updated to ${editName}`);
        setEditId(null);
        setEditName('');
    };

    return (
        <div>
            <table>
                <tbody>
                    {/* map each object in items array*/}
                    {items.map((value)=>(
                        <tr key={value.id}>
                            <td>{value.id}</td>
                            <td>
                                {/* initially editId is null, so condition is false - name is displayed */}
                                {/* After click on edit, input box is displayed and we can edit name and the name is updated in handleInput */}
                                {editId === value.id ? <input type='text' value={editName} onChange={handleInput}></input> : value.name}
                            </td>
                            <td>
                                {/* once the editId value is set in handleEdit, -> Save button is displayed */}
                                {editId === value.id ? <button onClick={handleSave}>Save</button> 
                                : <button onClick={()=> {handleEdit(value.id, value.name)}}>Edit</button> } {/* if edit is clicked , id and name is passed to handleEdit */ }
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
