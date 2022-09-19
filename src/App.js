import React from "react";
import {BrowserRouter as Router, Routes, Route, NavLink} from "react-router-dom";
import { routes } from './router';
import { Nav } from 'react-bootstrap';


function App () {

    const routeComponents = routes.map(r => (
        <Route path={r.path} element={r.element} key={r.path}/>
    ));

    return <Router>
            <div>
                <header>
                    <div className="container">
                        header
                    </div>
                </header>
                <main>
                    <div className="container">
                        <div className="row">
                        <div className="col col-12 col-sm-3">
                            <Nav variant="pills" defaultActiveKey="/home">
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <NavLink to="cart" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>Cart</NavLink>
                                    </li>
                                    <li className="list-group-item">
                                        <NavLink to="order" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>Order</NavLink>
                                    </li> 
                                    <li className="list-group-item">
                                        <NavLink to="result" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>Result</NavLink>
                                    </li>
                                </ul>
                            </Nav>
                        </div>
                        <div className="col col-12 col-sm-9">
                                <Routes>
                                    { routeComponents }
                                </Routes>
                            </div>
                        </div>
                    </div>
                </main>
                <footer>
                    <div className="container">
                        footer
                    </div>
                </footer>
            </div>
        </Router>;
    
}

export default App;