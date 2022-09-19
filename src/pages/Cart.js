import React, {useContext} from "react";
import Counter from '../components/Counter';
import storesContext from '../contexts/store';
import { observer } from 'mobx-react-lite';
import {Link} from "react-router-dom";
import { routesMap } from '../router';

function Cart() {
    const { cart } = useContext(storesContext);
	const { products, total, changeCnt, removeItem } = cart;
	const { dbProducts } = useContext(storesContext);
    //todo 


    const productRows = products.map(pr => (
        <tr key={pr.id}>
            <td>{pr.title}</td>
            <td>{pr.price}</td>
            <td>
                <Counter min={1}
                    max={pr.rest} 
                    current={pr.cnt} 
                    onChange={val => changeCnt(pr.id, val) }
                    key={pr.rest} 
                />
            </td>
            <td>{pr.price * pr.cnt}</td>
            <td>
                <button onClick={() => removeItem(pr.id)}>Remove</button>
            </td>
        </tr>
    ));
    
    return <>
        <h1>Cart</h1>
        <hr/>
        <table>
            <thead>
                <tr>
                    <td>Title</td>
                    <td>Price</td>
                    <td>Count</td>
                    <td>Total</td>                  
                </tr>
            </thead>
            <tbody>
                {productRows}
            </tbody>
        </table>
        <div>
            <strong>Total: {total}</strong>
        </div>
        <Link className="btn btn-success" to={routesMap.order}>Next</Link>
    </>    
}

export default observer(Cart);