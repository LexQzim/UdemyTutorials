import React, {Component} from 'react';
// My Components
import CardList from './CardList';
import SearchBox from './SearchBox';
import {cats} from './cats';

import '../style/App.css';

class App extends Component {
    constructor(){
        super()
        this.state = {
            cats: cats,
            searchField: ''
        }
    }

    onSearchChanged = (event) => {
        this.setState({ searchField: event.target.value})
    }

    render(){
        const filteredCats = this.state.cats.filter(cats => {
            return cats.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })
        return (
            <div className='tc'>
                <h1 className='f1'>CatFiends</h1>
                <SearchBox searchChange={this.onSearchChanged}/>
                <CardList cats={filteredCats}/>
            </div>
        );
    }
   
}
export default App;