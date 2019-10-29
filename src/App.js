import React, {Component} from 'react';


import './App.css';
import { CardList } from './component/card-list/card-list.component';
import { SearchBox } from './component/search-box/search-box.components';



class App extends Component {
  constructor(){
    super()

    this.state= {
      monsters : [],
      searchField : ''
    }

    // **this.handleChange=this.handleChange.bind(this);  
    //or we used arrow function which automatically binds 'this' with our app component
  }

  componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json()
    .then(users => {this.setState({monsters : users})})
    );
  }

  handleChange = (e) => {
    this.setState({ searchField : e.target.value})
  }

  render () {
    const { monsters , searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>  Amrita I just Love you So much.</h1>
        <h2> It has been a year since i met you first. </h2>  
        <h2> I want to tell you that it is a very important and special day for me </h2> 
        <h1> I promise you a very happy and happening ;) life ahead. I LOVE YOU !!</h1>
        <SearchBox
            placeholder='search monsters'
            handleChange= {this.handleChange}
        />
        <CardList monsters={filteredMonsters} />    
      </div>
    );
  }  
}

export default App;
