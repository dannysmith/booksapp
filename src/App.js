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
    fetch('/.netlify/functions/getBooks')
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
