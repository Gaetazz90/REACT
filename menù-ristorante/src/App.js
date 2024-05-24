import './App.css';
import { useState } from 'react';
import List from './List';
import data from './data';
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './navbar';

function App() {
  const[foodcards, setFoodcards] = useState(data)

  function deleteAll(){
    setFoodcards([])
  }
  function resetAll(){
    setFoodcards(data)
  }

  function removeItem(id){
    setFoodcards((oldCards) => oldCards.filter((card) => card.id !== id))
  }
  function incrementQuantity(id){
    setFoodcards((oldCards)=>oldCards.map((card)=>{
      if(card.id === id){
        return {...card, quantità:card.quantità++}
      }
      else{
        return {...card}
      }
    }))
  }

  return (
    <>
      <Navbar/>
      <h2 className='mt-4'> COSA DESIDERI ORDINARE? </h2>
        <div className='container d-flex flex-wrap'>
            <List cardslist={foodcards} removeItem={removeItem} incrementQuantity={incrementQuantity}/>
        </div>
      
      <div className='my-5 ms-5 d-flex justify-content-evenly'>
        <button className='btn btn-success' onClick={resetAll}>Reload All</button>
        <button className='btn btn-danger' onClick={deleteAll}>Delete All</button>
      </div>
    </>
  );
}

export default App;
