import React from 'react';
import CardList from './CardList.js';
import {robots} from './robots.js';
import SearchBox from './SearchBox'

const App = () => {
    return(
        <div>
            <h1>Robofriends</h1>
            <SearchBox />
            <CardList robots = {robots} />
        </div>
       
    )
}

export default App;