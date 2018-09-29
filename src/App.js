import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import Main from './components/Main'
import SearchPage from './components/SearchPage'

class BooksApp extends React.Component { 
  render() {
    return (
      <div>
         <Route exact path='/' component = { Main }/>
         <Route exact path='/search' component = { SearchPage }/>
      </div>
    )
  }
}

export default BooksApp
