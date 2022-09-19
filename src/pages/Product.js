import React, {useContext} from 'react';
import storesContext from '../contexts/store';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';
import F404 from '../components/F404';

function Product() {

    const { products } = useContext(storesContext);
    const {id} = useParams();

    const product = products.getById(id);

    if(!product) return <><F404 message="product not found"/></>
    
    return <>
        <h1>Product: {product.title} </h1>
        <hr/>
        <div>
            <strong> Price: {product.price}</strong>
        </div>
        <div>
            <strong> Rest: {product.rest}</strong>
        </div>
    </>    
}

export default observer(Product);