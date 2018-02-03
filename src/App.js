import React, { Component } from 'react';
import CardList from './CardList.js';
import SearchBox from './SearchBox'
import Scroll from './Scroll.js';
import './App.css'


class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfields: '',
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response => {
            return response.json();
        }).then(users => {
            this.setState({robots: users});
        })
        
    }

    onSearchChange = (event) => {
        this.setState({searchfields: event.target.value});
    }

    render(){
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfields.toLowerCase())
        })
        if(this.state.robots.length === 0){
            return(
                <h1>Loading</h1>
            )
        }else{
            return(
                <div className = 'tc'>
                    <h1 className= 'f1'>Robofriends</h1>
                    <SearchBox searchChange = {this.onSearchChange} />
                    <Scroll>
                        <CardList robots = {filteredRobots} />
                    </Scroll>
                </div>
               
            )
        }
       
    }
    
}

export default App;