import React, {useState, useEffect } from 'react'
import Item from './component/Item';


export default function Shop (user){
  const [items, setItems] = useState([])

  const getItems = async () => {
    const res = await fetch('http://127.0.0.1:5000/api/products');
    const data = await res.json();
    console.log(data)
    setItems(data.items);
  };

  useEffect(() => {
    getItems();
  }, [])


  const showItems = () => {
    if (items.length > 0) {
      return items.map(i => <div className='col-3' key={i.id} to={`/products/${i.id}`} ><Item itemInfo={i} user={user} /></div>)
      }
  };


    return (
      <div className='container'>
        <h1 className="text-center my-3">Welcome Galaxy far far away</h1>
      
        {console.log(items, 'rendered')}
        <div className='row'>
        {showItems()}
        </div>       
      </div>
    )
  }






































// import React, { Component, useState, useEffect } from 'react'
// import { Link } from 'react-router-dom';
// import Iten from './component/Item';

// export default class Shop extends Component  {
//   constructor() {
//     super();
//     this.state = {
//       items: []
//     }
//   };

//   getItems = async () => {
//     const res = await fetch('http://127.0.0.1:5000/api/products');
//     const data = await res.json();
//     console.log(data)
//     this.setState({ items: data.items });
//   };

//   componentDidMount = () => {
//     this.getItems();
//   }


//   showItems = () => {
//     if (this.state.items.length > 0) {
//       return this.state.items.map(i => <Link  className='col-3'    key={i.id} to={`/product/${i.id}`} ><Iten itemInfo={i}/></Link>)
//       }
//   };

//   render() {
//     return (
//       <div className='row'>
//         <h1 className="text-center my-3">Welcome to the galaxy far far away</h1>
    
//         {console.log(this.state.items, 'rendered')}
//         <div className='row'>
//         {this.showItems()}
//         </div>       
//       </div>
//     )
//   }
// }
