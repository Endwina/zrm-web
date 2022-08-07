import React,{Suspense,lazy} from 'react'
import "./asset/base.css"
import { Button } from 'antd'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Link } from 'react-router-dom'

const Login = lazy(() => import('./pages/Login'))
const Register = lazy(() => import('./pages/Register'))

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