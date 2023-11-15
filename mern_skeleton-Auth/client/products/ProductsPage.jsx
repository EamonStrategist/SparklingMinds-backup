import React, {useEffect, useState} from 'react';
import Card from './Card';
import ProductContainer from './ProductContainer';
import Title from './Title';
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


const [values, setValues] = useState(
    []
   );
 


   useEffect(() =>{
     fetch('http://localhost:3000/api/products/')
     .then(response => response.json())
     .then(data => setValues(data)) 

         },[]);

 

return <div>
    <Title/>
    
    <ProductContainer>

    {values.map((product) => (
        <Card productInfo={product} key={values.id}/>
    ))}
    </ProductContainer>
   
     
    </div>



}

export default ProductsPage;