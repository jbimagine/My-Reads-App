import React from 'react'
import Book from './Book'


class Bookshelf extends React.Component {
   render() {
    const {books, name} = this.props;
       return(
        
       <div>
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">{name}</h2>
              <div className="bookshelf-books">
              <ol className = 'books-grid'>
                {
                  books
                  .map((book, key) =>(
                    <Book  
                    changeShelf ={this.props.changeShelf} 
                    book = { book } 
                    key = { key }
                    />
                  ))
                }
                </ol>
              </div>
            </div>  
          </div>     
      </div>
       )
   }
}

export default Bookshelf