import React from 'react';
import './ProductCard.css';

function ProductCard(props) {
    function clickImg(){
        console.log("hai cliccato sull'immagine")
    }
    return (
    <>
        <div className='card'>
            <img src={props.img} alt='img-product' className='img-card' onClick={clickImg}/>
            {/* //Oppure potresti scrivere 
            <img src={props.img} alt='img-product' className='img-card' onClick={ ()=> clickImg() }/>   */}
            <h3>{props.name}</h3>
            <>{props.children}</>
            <p>{props.price}€</p>
            <p>____________________________________</p>
            <strong>Buono Sconto 20%</strong>
            <button onClick={ ()=> alert('Bene! Hai ottenuto lo sconto!') }>Ottieni sconto</button>
        </div>        
    </>
    )
}

export default ProductCard

// Se invece vuoi evitare di scrivere ogni volta props.nomeproprietà, puoi deconstrutturare l'oggetto(quindi tipo l'opposto di ciò che fa prima lo spread operator)
// Ma io preferisco il metodo sopra, così anche se scrivo props ogni volta non devo stare a deconstrutturare l'oggetto e a scrivermi i parametri nelle graffe ecc.

// function ProductCard(props) {
//     let {name, price,img} = props
//     return (
//     <>
//         <div className='card'>
//             <img src={img} alt='img-product' className='img-card'/>
//             <h3>{name}</h3>
//             <p>____________________________________</p>
//             <p>{price}€</p>
//             <strong>Buono Sconto 20%</strong>
//             <button>Ottieni sconto</button>
//         </div>        
//     </>
//     )
// }


