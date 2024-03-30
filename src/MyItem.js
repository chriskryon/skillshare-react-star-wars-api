import React from "react"

class Item extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      clicks: 0,
    }
  }
  clickMe() {
    console.log("I was clicked.")
  }

  render() {
    return (
      <h1
        onClick={() => {
          // this.clickMe()
          this.setState({
            clicks: this.state.clicks + 1,
          })
        }}
      >
        Hello, {this.props.name}!
      </h1>
    )
  }
}

export default Item
