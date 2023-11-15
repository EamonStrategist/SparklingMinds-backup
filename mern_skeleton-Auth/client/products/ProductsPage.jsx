import React, {useEffect, useState} from 'react';
import Card from './Card';
import ProductContainer from './ProductContainer';
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





            /*onComponentMount(){
                fetch('http://localhost:3000/api/products/')
                .then(response => response.json())
                .then(data => setValues(data)) 
             };
        

        const getProduct = () =>{
            fetch('http://localhost:3000/api/products/')
            .then(response => response.json())
            .then(data => setValues(data))
        };
*/

 

return <div>
    <h1>ProductsPage</h1>
    <ProductContainer>
        <Card/>
    </ProductContainer>
   
     
    </div>



}

export default ProductsPage;