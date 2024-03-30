import React from "react"
import StarWars from "./StarWars"
import "./App.css"

function App() {
  return (
    <div
      className="h-screen text-yellow-300 bg-fixed bg-repeat bg-contain"
      style={{ backgroundImage: "url(../imgs/background.jpg)" }}
    >
      <StarWars />
    </div>
  )
}

export default App
