import React from "react";
import { NavLink } from "react-router-dom";
import useSearchProduct from "../../hooks/useSearchProduct";

const AppMenu = () => {
    const {setSearch} = useSearchProduct();

    const searchProducts = (e) => {
        setSearch(e.target.value)
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <h5 className="mr-5">mmartan</h5>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item mr-5">
                                <NavLink exact to="/">Início</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to="produtos">Produtos</NavLink>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <input className="form-control me-2" onChange={(e) => (searchProducts(e))} type="search" 
                                placeholder="Pesquisar" aria-label="Search"></input>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default AppMenu