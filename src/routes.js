import { BrowserRouter, Routes, Route } from "react-router-dom";

import Filmes from "./Paginas/Filmes";
import Home from "./Paginas/Home";
import Header from "./Componentes/Header";
import Favoritos from "./Paginas/Favoritos";

import Erro from "./Paginas/Erro";

import 'bootstrap/dist/css/bootstrap.min.css';


function routerApp(){
    return(
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/filme/:id" element={<Filmes/>} />
            <Route path="/favoritos" element={<Favoritos/>}/>

            <Route path="*" element={<Erro/>} />
        </Routes>
        </BrowserRouter>


    )
}

export default routerApp;