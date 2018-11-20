import React, { Component } from 'react'
import './App.scss'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      books: [],
      isLoaded: false,
    }
  }

  componentDidMount() {
    fetch(
      'https://gist.githubusercontent.com/dannysmith/0e203810e2561d235fad1175487b43c3/raw/5e4bb34d44c00f2ad2a5d0d1fdcb93fc3364a0d2/books.json'
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          books: json,
        })
      })
  }

  render() {
    let { isLoaded, items } = this.state

    if (!isLoaded) {
      return <p>Loading!</p>
    } else {
      return (
        <div className="app">
          <p>Data is loaded</p>
        </div>
      )
    }
  }
}

export default App
