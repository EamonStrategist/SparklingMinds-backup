import React, {useEffect, Component, useState} from 'react';
//import { list } from './api-products.js';

const ProductsPage = () =>  {

   /* constructor(){
        super();
        const [values, setValues] = useState([]);
    }*/

    /*
     name: '',
        description: '',
        price: '',
        category: '',
        coll: '',
        quantity: '',
        imageURL: ''
    */

  

    const [values, setValues] = useState(
       []
      );

      /*useEffect(() =>{
        fetch('http://localhost:3000/api/products/')
        .then(response => response.json())
        .then(data => setValues(data)) 
            },[values]);*/

            /*onComponentMount(){
                fetch('http://localhost:3000/api/products/')
                .then(response => response.json())
                .then(data => setValues(data)) 
             };*/
        

        const getProduct = () =>{
            fetch('http://localhost:3000/api/products/')
            .then(response => response.json())
            .then(data => setValues(data))
        };



return <div>
    <h1>ProductsPage</h1>
        <div className='item-container'>
            {values.map((product) => (
                <div className='card' key={product.id}>
                    <img src={"../images/" + product.imageURL} alt={product.name}/>
                    <h3>Name</h3>
                    <p>{product.name}</p>
                    <h4>Description</h4>
                    <p>{product.description}</p>
                    <h4>Price:</h4>
                    <p>{product.price}</p>
                    <h4>Category</h4>
                    <p>{product.category}</p>
                    <h4>Collection</h4>
                    <p>{product.coll}</p>
                    <h4>Quantity</h4>
                    <p>{product.quantity}</p>

                    </div>

            ))}
        </div>
        <button type="submit" onClick={getProduct} value="View Products"/>
    </div>



}

export default ProductsPage;