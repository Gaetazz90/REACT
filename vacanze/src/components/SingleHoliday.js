import React from 'react'
import { GrLinkNext, GrLinkPrevious} from "react-icons/gr";

function SingleHoliday(props) {
  return (
    <>
      <div className='holiday-container'>
        <img src={props.img} alt='img-holiday'></img>
        <div className='holiday-info'>
            <h4>{props.titolo}</h4>
            <p>{props.descrizione}</p>
            <div className='holiday-info2'>
                <p><strong>{props.durata}</strong></p>
                <p><strong>{props.prezzo}</strong> € </p>
            </div>
        </div>
        <div className='holiday-buttons'>
            <button onClick={props.prev}>
                <GrLinkPrevious/>  
            </button>
            <button onClick={props.next}>
                <GrLinkNext/>
            </button>
        </div>
      </div>
    </>
  )
}

export default SingleHoliday
