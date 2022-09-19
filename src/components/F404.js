import React from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { routesMap } from '../router';

export default function ({message}) {
    const navigate = useNavigate();
    const onBackClick  = e => {
        e.preventDefault()
        navigate(-1);
    }   

    return <>
        <h1>Page not found</h1>
        <hr/>
        {message}
        <div className='alert alert-danger'>
            <a href="#" onClick={onBackClick}>
                go back 
            </a>    
        </div>
    </>
}