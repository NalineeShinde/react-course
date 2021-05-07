import React,{useEffect} from 'react';


function Property(props){
    useEffect(()=>{
console.warn("check props",props.name);
    },[])
    useEffect(()=>{
        console.warn(" 2 fro Update props",props.name);
            },[props.name])
    return(
        <div>
            <h4>Learn Props In Function</h4>
            <small>{props.name}</small>
        </div>
    )
}

export default Property;