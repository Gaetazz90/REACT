import './App.css';
import data from './data';
import Article from './Article';
import { useEffect, useState } from 'react';

function App() {

  const [theme, setTheme] = useState("dark-mode")

  function changeTheme(){
    if(theme === "dark-mode"){
      setTheme("light-mode")
    }
    else{
      setTheme("dark-mode")
    }
  }

  useEffect(()=>{
    document.documentElement.className = theme
  }, [theme])

  return (
    <>
     <div className='container-fluid pt-5'>
     <h1 className='text-center my-3'>DARK MODE- LIGHT MODE</h1>
      <div className='row d-flex justify-content-center'>
        <div className='col-4 text-center mb-3'>
          <button onClick={changeTheme}>Cambia</button>
        </div>
      </div>  
      <div className='row d-flex flex-wrap justify-content-center'>
          {
            data.map((el)=>{
              return(
                <div className='col-4 article-card' key={el.id}>
                <Article {...el}/>
                </div>
              )
            })
          }
         </div>
      </div>
    </>
  );
}

export default App;
