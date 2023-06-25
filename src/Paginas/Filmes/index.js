import React from "react"
import {useEffect, useState} from 'react'
import api from '../../services/api'
import { Params, useParams, useNavigate } from "react-router-dom";
import './filme.css'



export default function Filmes(){

    const navigate = useNavigate()
    const {id} = useParams();
    const [filme, setFilme] = useState([]);
    const [loading, setLoading] = useState([true]);

        useEffect(() => {

            //Funçao para  buscar a Api 
            async function loadFilmes(){
             await api.get(`/movie/${id}`, {
                params: {
                    api_key:"22c78580d3bef99db15ed7775c9bc663",
                    language: "pt-br",
                    page:1,
                }
             })

             //Promises para caso a pagina exista ou não. Then existe, Catch nao
             .then((response)=> {
                setFilme(response.data);
                setLoading(false);
             })
             .catch(() => {
                navigate('/', {replace: true});
             })  
               
            }
    
            
    
            loadFilmes();
    
        }, [navigate, id]) // passar em dependencias para rodar melhor 

        
        function salvarFilme(){
           const minhaLista = localStorage.getItem("@myvisualart")
           
           let filmesSalvo = JSON.parse(minhaLista) || [];

           const hasFilme = filmesSalvo.some((filmesSalvo) => filmesSalvo.id === filme.id)

           if(hasFilme){
            alert('Esse filme já está na lista')
            return;
           }

           filmesSalvo.push(filme)
           localStorage.setItem("@myvisualart", JSON.stringify(filmesSalvo))
           alert('Filme salvo com sucesso')
        }
        
        if(loading){
            return(
                <div>
                <h1>Carregando Filmes...</h1>
                </div>
            )
        }

    return(
        <div className="lista">
         <h1 className="titulo">{filme.title}</h1>
         <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} />
         <strong>{filme.overview}</strong>
         <h3>Nota: {filme.vote_average} / 10</h3>

            <div className="area-botao">
            <button onClick={salvarFilme}>Salvar</button>
            <button>
                <a target="blank" href={`https://youtube.com/results?search_query=${filme.title} trailer`}>Trailer</a>
            </button>
            </div>
        
        </div>
    )
}