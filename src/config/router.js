import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
    Outlet
  } from "react-router-dom"
   import Home from '../view/home'
   import Login from '../view/login'
  
  export default function router() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="login" element={<Login />} />
            <Route path="/" element={<Home />} />

        </Routes>
        </BrowserRouter>
    )
  }
  