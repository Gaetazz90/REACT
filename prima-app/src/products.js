//Definisco qui l'array di oggetti, ed eventuali altri elementi che posso inserire per avere un codice più pulito nel componente App.
//Ovviamente così dovrai sia esportare questo file(non è un componente visto che è scritto minuscolo, e infatti non è definito da una funzione),
//sia importare poi questo file nel componente dove vorrai utilizzarlo(in questo caso App).

let products =
[
    { id:1,
      name: "Prodotto1",
      price: 20,
      img: "https://a71eba0458acf57331d3-d31ce5ebd093935dff8526660841b743.ssl.cf2.rackcdn.com/products/f4942.jpg"
    },
    { id:2,
      name: "Prodotto2",
      price: 50,
      img:"https://a71eba0458acf57331d3-d31ce5ebd093935dff8526660841b743.ssl.cf2.rackcdn.com/products/f4944.jpg"
    },
    { id:3,
      name: "Prodotto3",
      price: 80,
      img: "https://a71eba0458acf57331d3-d31ce5ebd093935dff8526660841b743.ssl.cf2.rackcdn.com/products/f13794.jpg"
    },
    { id:4,
      name: "Prodotto4",
      price: 100,
      img: "https://a71eba0458acf57331d3-d31ce5ebd093935dff8526660841b743.ssl.cf2.rackcdn.com/products/f13794.jpg"
    },
    { id:5,
      name: "Prodotto5",
      price: 150,
      img: "https://a71eba0458acf57331d3-d31ce5ebd093935dff8526660841b743.ssl.cf2.rackcdn.com/products/f13794.jpg"
    }
]

export default products;