import React from "react"
import "./App.css"

class StarWars extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loadedCharacter: false,
      name: null,
      height: null,
      homeworld: null,
      films: [],
    }
  }
  getNewCharacter() {
    console.log("Getting new character")
    const url = "https://swapi.dev/api/people/1"

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("oi")
        console.log(data)
        this.setState({
          name: data.name,
          height: data.height,
          homeworld: data.homeworld,
          films: data.films,
          loadedCharacter: true,
        })
      })
  }
  render() {
    return (
      <div>
        {this.state.loadedCharacter && (
          <div>
            <h1>{this.state.name}</h1>
            <p>{this.state.height}</p>
            <p>{this.state.homeworld}</p>
            <ul>
              <li>{this.state.films}</li>
            </ul>
          </div>
        )}
        <button
          type="button"
          onClick={() => {
            this.getNewCharacter()
          }}
          className="btn"
        >
          Randomize Character
        </button>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StarWars />
      </header>
    </div>
  )
}

export default App
