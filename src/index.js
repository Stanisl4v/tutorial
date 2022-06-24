import React from 'react'
import ReactDom from 'react-dom'

import './index.css';
const books = [ 
  {
    id: 1,
    img:'https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL302_SR302,200_.jpg',
    title:'I Love You to the Moon and ',
    author:'Amelia Hepworth',
  },
  ,
  {
    id: 2,
    img:'https://images-na.ssl-images-amazon.com/images/I/81EVdWdmOKL._AC_UL302_SR302,200_.jpg',
    title:'The Very Hungry Caterpillar',
    author:'Eric Carle',
  },
  ,
  {
    id: 3,
    img:'https://images-na.ssl-images-amazon.com/images/I/61sDK3mWV9L._AC_UL604_SR604,400_.jpg',
    title:'Things We Never Got Over',
    author:'Lucy Score',
  },
];
function BookList() {
   return ( 
  <section className='booklist'>
    {books.map((book) => {
      return <Book key={book.id} {...book}></Book>;
    })}
  </section> 
   );
}

const Book = ({img, title, author}) =>{
    // const {img, title, author} = props;
    return ( 
        <article className='book'>
        <img src={img} alt="" />
        <h1>{title}</h1>
        <h4>{author}</h4>
        </article>
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