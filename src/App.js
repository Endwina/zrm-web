import React,{Suspense,lazy} from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import "./pages/asset/base.css"

const Login = lazy(() => import('./pages/Login'))
const Register = lazy(() => import('./pages/register'))

function App(){
        return(
            <>
            <Router>
                <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                 </Routes> 
                </Suspense> 
            </Router>
            </>
        )
    }

export default App;