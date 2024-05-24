import React from 'react'
import { TiDelete } from "react-icons/ti";

//Componente Lista con tutte gli oggetti(persone)
//Quindi da App a List, il props che stai passando è people(ovvero lo state di data, ovvero l'array di oggetti, overro la lista di persone)
function List(props) {
  return (
    <>
      <ul>
        {
            props.peoplelist.map((person)=>{
                return <li key={person.id}>
                            <Person {...person} removeItem={props.removeItem} />
                        </li>
            })
        }
      </ul>
    </>
  )
}

//Componente Persona (singolo oggetto con tutte le proprietà)
//Qua invece il props che stai passando è la singola persona, ovvero il singolo oggetto dell'array people(data)
function Person(props) {
  return (
    <>
        <div className='person-card'>
            <img src={props.img} className='person-img' alt='person-img'/>
            <h4 className='person-name'>{props.nome}</h4>
            <p className='person-stato'>{props.stato}</p>
            <TiDelete size={30} className='icon-delete' onClick={()=>props.removeItem(props.id)}/> 
        </div>
    </>
  )
}


export default List

