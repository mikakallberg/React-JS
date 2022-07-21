import React from "react";


const FunctionalGreetingWitProps = (props) => {
    console.log(props);
    return <h1>Hello, {props.greeting} My name is {props.name}, I'm {props.age} years old.</h1>

}

export default FunctionalGreetingWitProps;
