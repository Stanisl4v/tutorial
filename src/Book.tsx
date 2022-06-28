import React from 'react'
import { makeStyles } from '@material-ui/styles';

const useSyles = makeStyles({
  Book:{
    background: '#fff',
    border-radius: '1rem',
    padding: '1rem 2rem',
  }
});

const Book = ({img, title, author}) =>{
    // const {img, title, author} = props;
    // attribute, event Handler
    // onClick, onMouseOver
    const clickHeandler = (e) => {
      console.log(e);
      console.log(e.target);
      alert('hello world');
    };
    const complexExample = (author) => {
      console.log(author)
    }
    return ( 
      <article className='book' onMouseOver={()=>{
        console.log(title)
      }}>
        <img src={img} alt="" />
        <h1 onClick={() => console.log(title)}> {title}</h1>
        <h4>{author}</h4>
        <button type='button' onClick={clickHeandler}>
          reference exmple
        </button>
        <button type='button' onClick={() => complexExample(author)}>more complex example</button>
       </article>
    );
};


export default Book
