import React from "react";

// Component could be imported from import statement above
// Which would look like this
// import React { Component } from "react"; 
// Then just .Component below

class StatefulGreeting extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            introduction: "Hello!",
            buttonText: "Exit",
            count: 0
        };
        /* Third way to bind eventhandler */
        this.handleClick = this.handleClick.bind(this)
    }
    /* First to third way to bind eventhandler */
    // handleClick(){
    //     this.setState((prevState, prevProps) =>{
    //         console.log("Previous state", prevState) 
    //         console.log("Previous props", prevProps)
    //         return {
    //             introduction: prevState.introduction ===  "Hello!" ? "Goodbye!": "Hello!",
    //             buttonText: prevState.buttonText === "Exit" ? "Enter": "Exit",
    //             count: prevState.count + 1
    //         } 
    //     });
    // }
    /* Fourth way to bind eventhandler */
    handleClick = () => {
        this.setState((prevState, prevProps) =>{
            console.log("Previous state", prevState) 
            console.log("Previous props", prevProps)
            return {
                introduction: prevState.introduction ===  "Hello!" ? "Goodbye!": "Hello!",
                buttonText: prevState.buttonText === "Exit" ? "Enter": "Exit",
                count: prevState.count + 1
            } 
        });
    }

    // increment() {
    //     this.setState((prevState, prevProps) => {
    //         console.log("Previous state", prevState) 
    //         console.log("Previous props", prevProps)
    //         return {
    //             count: prevState.count + 1
    //         } 
    //     })
    // }



    render() {
        return (
            <div>
                <h1>{this.state.introduction} {this.props.greeting}{this.props.name} </h1>
                {/* First way to bind eventhandler */}
                {/* <button onClick={() => this.handleClick()}>{this.state.buttonText}</button> */}
                {/* Second way to bind eventhandler */}
                {/* <button onClick={this.handleClick.bind(this)}>{this.state.buttonText}</button> */}
                {/* Third and fourth way to bind eventhandler */}
                <button onClick={this.handleClick}>{this.state.buttonText}</button>
                <p>You have clicked {this.state.count} times</p>
            </div>
        )
    }

}

export default StatefulGreeting