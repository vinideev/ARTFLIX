import { useEffect, useState} from 'react' //Para criar ciclos de vida e armazenar
import api from '../../services/api'
import {Link} from 'react-router-dom'
import './home.css'


// url da api https://api.themoviedb.org/3//movie/now_playing550?api_key=22c78580d3bef99db15ed7775c9bc663

export default function Home(){

    const [ filmes, setFilmes] = useState([])
    const [loading, setLoading] = useState([true]);

    useEffect(() => {

        //Funçao para  buscar a Api 
        async function loadFilmes(){
            const response = await api.get('movie/now_playing', {
                params: {
                    api_key:"22c78580d3bef99db15ed7775c9bc663",
                    language: "pt-BR",
                    page:1,
                }
            }) 

           setFilmes(response.data.results.slice(0,10));
           setLoading(false);
        }

        

        loadFilmes();

    }, [])



    //if criado para mensagem enquanto carrega a página
    if(loading){
        return(
            <div>
            <h1>Carregando Página...</h1>
            </div>
        )
    }

    
    return(
        <div className='home'>
          
           
                <div className='lista-filmes'>
                    {filmes.map((filme)=> {
                        return(
                            <article className='artigo' key={filme.id}>
                            <h1>{filme.title}</h1>
                             <img  className='imagem' src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} />
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                           
                            </article>
                           
                        )
                    })}
                
            </div>

        </div>
    )
}

