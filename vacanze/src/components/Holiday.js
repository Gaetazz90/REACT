import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import SingleHoliday from './SingleHoliday'

const url = "https://react--course-api.herokuapp.com/api/v1/data/vacanze"

function Holiday() {

  const [data, setData] = useState([])
  async function getData(){
    try {
        const response = await axios.get(url)
        setData(response.data)
        console.log(response)
    }
    catch (error) {
        console.log(error)
    } 
  }
  useEffect(()=>{
    getData()
  },[])


  const [selected, setSelected] = useState(0)
  function goprev(){
    setSelected((oldvalue)=>{
        if(oldvalue - 1 < 0){
            return data.data.length - 1
        }
        else{
            return oldvalue - 1
        }
    })
  }
  function gonext(){
    setSelected((oldvalue)=>{
        if(oldvalue + 1 === data.data.length){
            return 0
        }
        else{
            return oldvalue + 1
        }
    })
  }

 
  if(data.success){
    return (
        <>
            {  
                data.data.length > 0 ? <SingleHoliday {...data.data[selected]} prev={goprev} next={gonext}/> : <h3>Nessuna vacanza</h3>
            }
        </>
      )
  }
  else{
    return <h3> ...Loading </h3>
  }
}

export default Holiday
