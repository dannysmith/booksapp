import React, { Component } from 'react'
import './App.scss'
import Spinner from './components/spinner'
import Overlay from './components/overlay'
import Book from './components/book'
import BookGrid from './components/bookGrid'

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
      'https://gist.githubusercontent.com/dannysmith/0e203810e2561d235fad1175487b43c3/raw/e4b51ba21b43a58dfb77440f9a6af27b247e6d3a/books.json'
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
    let { isLoaded, books } = this.state

    if (!isLoaded) {
      return (
        <Overlay>
          <Spinner />
        </Overlay>
      )
    } else {
      return (
        <div className="app">
          <BookGrid>
            {books.map((book, index) => (
              <Book key={index} {...book} />
            ))}
          </BookGrid>
        </div>
      )
    }
  }
}

export default App
