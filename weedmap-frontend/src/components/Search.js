import React, { Component } from 'react'
import ShowResults from './ShowResults'

class Search extends Component {
    constructor(){
        super()
        this.state = {
            searchTerm: "",
            results: []
        }
    }

    handleSubmit = e => {
        e.preventDefault()
        // let configObj = {
        //     method: "GET",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify({
        //         search: {name: e.target.children[2].value}
        //     })
        // }
        // debugger
        fetch("http://localhost:3000/users")
        //handle this in backend
    }

    render() {
        return(
            <div className="search"> 
            <form onSubmit={this.handleSubmit} name="search">
                Search by Name<br></br><br></br>
                <input className="search-field" type="text" name="search">
                </input><br></br>
                <br></br>
                <input type="submit" className="button" value="find"></input>
            </form>
            <ShowResults />
            </div>
        )
    }
}

export default Search