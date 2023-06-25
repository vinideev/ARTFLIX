import { useState, useEffect } from "react"
import './favoritos.css'
import { Link } from "react-router-dom"


export default function Favoritos(){


    const [filmes, setFilmes] = useState([])

    useEffect(() => {


        const minhaLista = localStorage.getItem("@myvisualart")
        setFilmes(JSON.parse(minhaLista) || []) //converter a string para uma array ou nenhuma caso ainda não tenha adicionado

        }, [])



    return(
         <div>
            <h1>Minha lista</h1>
            <ul>
                {filmes.map((item)=> {
                    return(
                        <li key={item.id}>
                           <span>{item.title}</span> 

                           <div>
                            <Link to={`/filme/${item.id}`}>Detalhes</Link>
                            <button>Excluir</button>
                           </div>

                        </li>
                    )
                })}
            </ul>
        </div>
    )
}