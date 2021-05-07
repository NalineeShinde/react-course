import React,{useEffect,useState} from 'react';

function Contact(){
const [name, setName]=useState("anil");
const [age, setAge]=useState(30);
    useEffect(()=>{
        console.warn("Hello from Hooks")
    },[age]
    )
    //JSX enables us use javascript with html internally embedded ith XML 
    let data="JSX allows us use javascript with html ek sath internally embedded with XML"
    return(
    <div>
<h5>Contact Page{data}</h5>

<p>{name}  {age}</p>
<button onClick  ={()=>setName("Anil Chandgude")}>Update Name</button>
<button onClick  ={()=>setAge(35)} >set Age</button>
    </div> 
    )
}

export default Contact;

// <h1>{data} JSX means Javascript XML</h1>
// <h2>Life Cycle methods are used in Class Components where as
//     Life Cycle Hooks are used In Functional Component</h2>
// <b>life cycle methods</b>
// <ul>
// <li>componentdidmount</li>
// <li>componentwillunmount</li>
// <li>componentDid</li>
// <li>componentDidupdate</li>
// <li>componentreceiveProps</li>
// </ul>
