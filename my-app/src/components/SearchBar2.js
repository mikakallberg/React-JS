import React, { Component } from 'react'
import importedNames from '../names'

export class SearchBar2 extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: importedNames
        }
    }
    render() {
    return (
        <div>
            <h1>Name Search</h1>
            <p>mathcing names found: {this.state.names.lenght}</p>
            <form>
                <input
                    type='text'
                    placeholder='search names...'
                />
            </form>
            <div style={{margin: 'auto'}}>
                {this.state.names.map(name => {
                    return <p key={name}>{name}</p>
                })}
            </div>
        </div>
    )
    }
}

export default SearchBar2