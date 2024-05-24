import React from 'react'

//Componente Lista con tutte gli oggetti(persone)
//Quindi da App a List, il props che stai passando è people(ovvero lo state di data, ovvero l'array di oggetti, overro la lista di persone)
function List(props) {
  return (
    <>
        {
            props.cardslist.map((card)=>{
                return <FoodCard key={card.id} {...card} removeItem={props.removeItem} incrementQuantity={props.incrementQuantity}/>
            })
        }
    </>
  )
}

function FoodCard(props){
  return (
        <>
              <div className="card foodcard mx-5 my-3">
                <button className="btn btn-primary" onClick={()=>props.incrementQuantity(props.id)}>
                  Quantità: <span>{props.quantità}</span>
                </button>
                <img src={props.img} className="card-img-top foodcardimg" alt="img-product"/>
                <div className="card-body">
                  <h5 className="card-title">{props.nome}</h5>
                  <p className="card-text">{props.prezzo}</p>
                  <button className="btn btn-outline-danger mx-auto" onClick={()=>props.removeItem(props.id)}>Elimina</button>
                </div>
              </div>
        </>
  )
}


export default List

