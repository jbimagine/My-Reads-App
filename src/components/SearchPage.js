import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import Book from './Book'
class SearchPage extends Component {
    state = {
        books: [],
        results: [],
        query: ''
      }

    handleGetAllBooks =()=>{
        BooksAPI.getAll().then(resp => {
          this.setState({ books:resp })
        })
      }
    
      componentDidMount() {
        this.handleGetAllBooks();
      }
    
      changeShelf = ( book, shelf ) => {
        BooksAPI.update(book, shelf)
        .then(resp => {
          book.shelf = shelf;
          this.setState(state => ({
              books: state.books.filter(currentBook => currentBook.id !== book.id).concat([book])
          }))
        });
      }

      updateQuery = ( query ) => {
          this.setState({query: query}, this.submitSearch)
      }

      submitSearch() {
          if(this.state.query === '' || this.state.query === undefined){
              return this.setState({ results: [] });
          }
          BooksAPI.search(this.state.query.trim()).then(res => {
              if(res.error){
                  return this.setState({ results: [] });
              }
              else {
                  res.forEach(book => {
                      let find = this.state.books.filter(b =>b.id === book.id);
                      if(find[0]) {
                          book.shelf = find[0].shelf;
                      }
                  });
                  return this.setState({ results: res })
              }
          })
      }

    render() {
     return (
        <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" value ={this.state.query}
                onChange = {(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          {
              this.state.results.map((book, key) =>  
              <Book  
              changeShelf ={this.changeShelf} 
              book = { book } 
              key = { key }
              />
              )
          }
          </ol>
        </div>
      </div>
     )
    }
 }
 
 export default SearchPage