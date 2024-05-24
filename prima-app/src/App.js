import './App.css';
import ProductCard from './ProductCard';
import products from './products';


function App() {
  return (
    <div className='app'>
      <header className='app-header'>
        <h1>
          Questa è la mia prima App React
        </h1>
      </header>
      <div className='container'>

        {/* Qui io ho dei singoli oggetti e quindi singoli componenti ProductCard */}

        {/* Questo è dimostrativo...non si fa così se no il codice non è pulito */}
        {/* <ProductCard name={primaCard.name} price={primaCard.price} img={primaCard.img}/>
            <ProductCard name={secondaCard.name} price={secondaCard.price} img={secondaCard.img}/>
            <ProductCard name={terzaCard.name} price={terzaCard.price} img={terzaCard.img}/> 
        */}

        {/* Si fa così, ovvero si utilizza lo spread operator */}
        {/* <ProductCard {...primaCard}> */}
        {/* Esempio children props */}
          {/* <p>Descrizione: prodotto fantastico  </p>
        </ProductCard>
        <ProductCard {...secondaCard}/>
        <ProductCard {...terzaCard}/> */}


        {/* Sintassi se ho un array di oggetti e non oggetti singoli come prima*/}
        {products.map((product)=>{
          return <ProductCard key={product.id} {...product}/>
        })}

        {/* Sintassi se ho un array di oggetti e non oggetti singoli come prima, e voglio utilizzare il children props...ovvero aggiungere una proprietà solo a 1 oggetto
            Prima mi bastava passare il child direttamente nel componente interessato, perchè essendo singoli oggetti avevo componenti separati...
            Adesso ho un array di oggetti, quindi non ho più il singolo componente ma l'elemento(product) dell'array di oggetti products, quindi dovrai fare un if nel .map      
        */}
        {/* {products.map((product, key)=>{
          if(key === 1){
            return <ProductCard {...product}>
              <p>Descrizione: prodotto fantastico </p>
            </ProductCard>  
          }
          else if(key === 3){
            return <ProductCard {...product}>
              <p>Descrizione: prodotto fantastico </p>
            </ProductCard>  
          }
          else{
            return <ProductCard {...product}/>
          }
        })}  */}

      </div>
    </div>
  );
}

export default App;



