import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './core/Home' 
import Users from './user/Users'
import Signin from './user/Signin'
import Signup from './user/Signup'
import Admin from './admin/Admin';
import ProductAdmin from './admin/ProductAdmin';
import About from './about/About';
import ProductsPage from './products/ProductsPage';
import Contact from './contact/Contact';
import TestPage from './user/TestPage';

const MainRouter = () => {
return ( <div> 
<Routes>
<Route exact path="/" element={<Home />}/> 
<Route exact path="/signin" element={<Signin/>}/>
<Route exact path="/signup" element={<Signup/>}/>
<Route exact path="/users" element={<Users/>}/>
<Route exact path="/admin" element={<Admin/>}/>
<Route exact path="/admin/products" element={<ProductAdmin/>}/>
<Route exact path="/about" element={<About/>}/>
<Route exact path="/products" element={<ProductsPage/>}/>
<Route exact path="/contact" element={<Contact/>}/>
<Route exact path="/testpage" element={<TestPage/>}/>

</Routes>
</div> 
)
}
export default MainRouter