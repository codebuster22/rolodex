import './App.css';
import {Component} from "react";
import CardList from "./components/card-list/card-list.component";
import SearchField from "./components/search-box/search-box.component";

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ``,
      testCheckbox: false
    }
  }

  handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.type === `checkbox` ? !(this.state[name]) : target.value;
    this.setState({
      [name] : value
    })
  }

  async componentDidMount() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const users = await response.json();
    this.setState({monsters: users})
  }

  render() {
    const {handleChange} = this;
    const { monsters , searchField } = this.state
    const filteredMonsters = monsters.filter(
        monster =>
        monster.name.toLowerCase()
            .includes(
                searchField.toLowerCase()
            ));
    return (
        <div className="App">
          <h1>Rolodex</h1>
          <SearchField placeholder={`Search Monsters`} handleChange={handleChange}/>
          <CardList monsters={filteredMonsters} />
        </div>
    );
  }

}

export default App;
