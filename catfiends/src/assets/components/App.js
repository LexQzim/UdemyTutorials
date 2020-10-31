import React, {Component} from 'react';
// My Components
import CardList from './CardList';
import SearchBox from './SearchBox';

import '../style/App.css';

class App extends Component {
    constructor(){
        super()
        this.state = {
            cats:[],
            searchField: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({cats:users}))
    }

    onSearchChanged = (event) => {
        this.setState({ searchField: event.target.value})
    }

    render(){
        const filteredCats = this.state.cats.filter(cats => {
            return cats.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })

        if(this.state.cats.length === 0){
            return <h1>Loading</h1>
        }
        else{
            return (
                <div className='tc'>
                    <h1 className='f1'>CatFiends</h1>
                    <SearchBox searchChange={this.onSearchChanged}/>
                    <CardList cats={filteredCats}/>
                </div>
            );
        }
    }
   
}
export default App;