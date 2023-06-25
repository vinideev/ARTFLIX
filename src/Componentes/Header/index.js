import './header.css'
import { Link } from "react-router-dom"


export default function Header(){
    return(
        <div className='cabecalho'>
            <Link className='link-home' to='/' >MYVISUALART</Link>
            <Link className='link-fav' to='/favoritos'>Minhas Listas</Link>
        </div>
    )
}