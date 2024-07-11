import React, { useEffect, useState } from 'react';
import { Route, useParams, useRouteMatch, Link, Switch } from 'react-router-dom';
import { busca } from '../api/api';
import '../assets/css/blog.css';
import ListaCategorias from '../components/ListaCategorias';
import SubCategorias from '../paginas/SubCategorias';
import ListaPost from '../components/ListaPost';

const Categoria = () => {
    const { id } = useParams()
    const { path } = useRouteMatch()
    const [subcategorias, setSubCategorias] = useState([])

    useEffect(() => {
        busca(`/categoria/${id}`, (categoria) => {
            setSubCategorias(categoria.subcategorias)
        })
    }, [id])
    return(
        <>
        <div className="container">
            <h2 className="titulo-pagina">Pet Notícias</h2>
            </div>
            <ListaCategorias />
            <ul className="Lista-categorias container flex">
                {
                    subcategorias.map((subcategorias) => (
                        <li className={`lista-categorias__categoria lista-categorias__categorias--${id}`} key={subcategorias}>
                            <Link to={`${url}/${subcategorias}`}>
                                {subcategorias}
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <Switch>
                <Route exact path={`${path}/`}>
                    <ListaPost url={`/posts?categoria=${id}`} />
                </Route>
                <Route path={`${path}/:subcategorias`}>
                    <SubCategorias />
                </Route>
            </Switch>
            </>
    )
}

export default Categoria;