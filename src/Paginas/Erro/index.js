import React from "react"
import {Link} from 'react-router-dom'
import './erro.css'

export default function Erro(){
    return(
        <div className="container-erro"> 
            <h1>404</h1>
            <h3>Ops, página não encontrada!</h3>
            <Link to='/'>Nossa Página</Link>
        </div>
    )
}