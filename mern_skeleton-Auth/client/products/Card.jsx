import React, {useState, useEffect} from 'react';
import './Card.css';


const Card = (props) => {

    const [values, setValues] = useState(
    []
   );
 


   useEffect(() =>{
     fetch('http://localhost:3000/api/products/')
     .then(response => response.json())
     .then(data => setValues(data)) 

         },[]);




    return <div>

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


}


export default Card;
