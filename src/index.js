import React from 'react'
import ReactDom from 'react-dom'
//css 
import './index.css';

import {books} from './books'
import Book from './Book'
import {greeting} from './testing/testing'

function BookList() {
  console.log(greeting)
   return ( 
  <section className='booklist'>
    {books.map((book) => {
      return <Book key={book.id} {...book}></Book>;
    })}
  </section> 
   );
}



// const Greeting = () =>{
//     return React.createElement(
//         'div',
//         {},
//         React.createElement('h1', {}, 'hello world')
//     );
// };

ReactDom.render(<BookList/>,document.getElementById('root'));