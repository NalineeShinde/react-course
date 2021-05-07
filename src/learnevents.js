import React, {useState} from 'react';

function LearnEvents () {

    const[val,setVal]=useState("Nalinee");

    function testONClick(){
        console.warn("Hello on click using function");
    }

    const test =(e)=>{
        console.warn("Hello on click using Arrow Function",e.target.value);
        setVal(e.target.value);
        
    }
    return ( 
        <div>
            <h1>Learn Event In React</h1>
            <input type="text" value={val} onChange={test}></input>
            <button onClick={()=> alert(val)} >Submit</button>
            <button onClick={testONClick}>Click Me</button>
            <button onClick={test}>Click Me</button>
        </div>
     )
}
 
export default LearnEvents;