import React from 'react';


class Learnprops extends React.Component{
    constructor(){
        super();
    }
    componentDidMount(){
        console.warn("props" ,this.props.name);
    }
    componentDidUpdate(){
        console.warn("props in update" ,this.props.name);
    }
    render(){
        return(
            <div>
                <h1>Learn Props in Class</h1>
            <p>Props are used when we want to transfer some data
                from one component to another
            </p>
            <h3>{this.props.name}</h3>
            </div>
        )
    }
}


export default Learnprops;