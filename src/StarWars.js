import React from "react"

class StarWars extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loadedCharacter: false,
      name: null,
      height: null,
      mass: null,
      gender: null,
      homeworld: null,
      affiliations: [],
    }
  }
  getNewCharacter() {
    const randomNumber = Math.round(Math.random() * 82)
    const url = `https://raw.githubusercontent.com/akabab/starwars-api/master/api/id/${randomNumber}.json`

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        this.setState({
          name: data.name,
          height: data.height,
          mass: data.mass,
          gender: data.gender,
          homeworld: data.homeworld,
          affiliations: data.affiliations,
          image: data.image,
          loadedCharacter: true,
        })
      })
  }
  render() {
    const {
      name,
      height,
      mass,
      gender,
      homeworld,
      affiliations,
      loadedCharacter,
    } = this.state

    const affiliationsMap = affiliations.slice(0, 5).map((affiliation) => {
      return <li key={affiliation}>{affiliation}</li>
    })

    return (
      <div className="p-10 flex flex-col gap-9 justify-center items-center h-screen">
        {loadedCharacter && (
          <div className="bg-black bg-opacity-60  border border-yellow-300 rounded-lg p-4 text-center w-2/4 flex flex-col justify-center items-center">
            {console.log(this.state.image)}
            <div className="grid grid-cols-2 justify-center items-center">
              <div className="">
                <img src={this.state.image} alt={name} className="h-3/4" />
              </div>
              <div>
                <p className="text-4xl font-bold mb-6">{name}</p>
                <div className="grid grid-cols-2 justify-start">
                  <div className="font-bold">Gender:</div>
                  <div>{gender}</div>

                  <div className="font-bold">Height:</div>
                  <div>{height}</div>

                  <div className="font-bold">Mass:</div>
                  <div>{mass}</div>

                  <div className="mt-3 font-bold">Homeworld:</div>
                  <div className="mt-3">{homeworld}</div>
                </div>
                <p className="mt-3 font-bold">Affiliations</p>
                <ul className="listNone">{affiliationsMap}</ul>
              </div>
            </div>
          </div>
        )}
        <button
          type="button"
          onClick={() => {
            this.getNewCharacter()
          }}
          className="border border-yellow-300 py-2 px-4 rounded-lg"
        >
          Randomize Character
        </button>
      </div>
    )
  }
}

export default StarWars
