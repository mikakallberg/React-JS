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
    }

    handleClick(){
        this.setState((prevState, prevProps) =>{
            console.log("Previous state", prevState) 
            console.log("Previous props", prevProps)
            return {
                introduction: prevState.introduction ===  "Hello!" ? "Goodbye!": "Hello!",
                buttonText: prevState.buttonText === "Exit" ? "Enter": "Exit",
                count: prevState.count + 1
            } 
            // introduction: this.state.introduction ===  "Hello!" ? "Goodbye!": "Hello!",
            // buttonText: this.state.buttonText === "Exit" ? "Enter": "Exit",
        }, () =>{
            // console.log('The new state', this.state.introduction);
            // console.log('The new state', this.state.buttonText);

        });
        // console.log(this.state.introduction);
        // console.log(this.state.buttonText);
    }

    increment(){
        // this.setState({
        //     count: this.state.count + 1
        // })
        // console.log(this.state.counts)
        this.setState((prevState, prevProps) => {
            console.log("Previous state", prevState) 
            console.log("Previous props", prevProps)
            return {
                count: prevState.count + 1
            } 
        })
    }

    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }


    render() {
        return (
            <div>
                <h1>{this.state.introduction} {this.props.greeting}{this.props.name} </h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                <button onClick={() => this.incrementFive()}>incrementFive</button>
                <p>You have clicked {this.state.count} times</p>
            </div>
        )
    }

}

export default StatefulGreeting
