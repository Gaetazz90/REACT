import './App.css';
import { useState } from 'react';
import List from './List';
import data from './data';

function App() {
  const[people, setPeople] = useState(data)

  function removeItem(id){
    //1 metodo(functional return/uso dell'oldState)
    setPeople((oldPeople) => oldPeople.filter((person) => person.id !== id))
    
    //2 metodo
    // let newPeople = people.filter((person)=>{
    //   return person.id !== id
    // })
    // setPeople(newPeople)
  }

  return (
    <>
      <h2> LISTA DI APPUNTAMENTI </h2>
      <div className='container-list'>
        <List peoplelist={people} removeItem={removeItem}/>
      </div>
      <div className='btn-group'>
        <button className='btn btn-reset' onClick={()=>setPeople(data)}>Reload All</button>
        <button className='btn btn-delete' onClick={()=>setPeople([])}>Delete All</button>
      </div>
    </>
  );
}

export default App;
