import React, { Component } from 'react';
import CardList from './CardList.js';
import {robots} from './robots.js';
import SearchBox from './SearchBox'
import './App.css'


class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: robots,
            searchfields: '',
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfields: event.target.value});
    }

    render(){
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfields.toLowerCase())
        })
        return(
            <div className = 'tc'>
                <h1 className= 'f1'>Robofriends</h1>
                <SearchBox searchChange = {this.onSearchChange} />
                <CardList robots = {filteredRobots} />
            </div>
           
        )
    }
    
}

export default App;