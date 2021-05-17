import React, { Component } from 'react'
import Search from './Search'
import ShowResults from './ShowResults'
import Banner from './Banner'

class App extends Component {
    render() {
        return(
            <div>
            <Banner />
            <br></br><br></br>
            <Search />
            <ShowResults />
            </div>
        )
    }
}

export default App