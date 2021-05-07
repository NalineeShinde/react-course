import React, {useState} from 'react';
function CreateUser() {
const [name,setName]= useState("");
const [age,setAge]= useState("");
const [address,setAddress]= useState("");

function makeUser(){
    let data={name,age,address};
    console.warn("submitted",data)
}

    return ( 
        <div>
            <h3>Create New User</h3>
            
            <input type="text" onChange={(e)=>setName(e.target.value)} name="username" value={name} /><br/>
            <input type="text"  onChange={(e)=>setAge(e.target.value)} name="age" value={age}/><br/>
            <input type="text"  onChange={(e)=>setAddress(e.target.value)} name="address" value={address} /><br/>
            <button onClick={makeUser}>Submit</button>
        </div>
     );
}
 
export default CreateUser ;