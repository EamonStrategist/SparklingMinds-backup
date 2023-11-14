import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './core/Home' 
import Users from './user/Users'
import Signin from './user/Signin'
import Signup from './user/Signup'

const MainRouter = () => {
return ( <div> 
<Routes>
<Route exact path="/" element={<Home />}/> 
<Route exact path="/signin" element={<Signin/>}/>
<Route exact path="/signup" element={<Signup/>}/>
<Route exact path="/users" element={<Users/>}/>
</Routes>
</div> 
)
}
export default MainRouter