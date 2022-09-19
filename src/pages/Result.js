import React, {useContext} from "react";
import storesContext from "../contexts/store"
import { observer } from 'mobx-react-lite';

function Result() {
    const { cart } = useContext(storesContext);
	const { total } = cart;

    const { order } = useContext(storesContext);
	const { userName } = order;

    return <>
        <h1>Congratulate, { userName }</h1>
        <hr/>
        <div>
            <strong> { total } </strong>
        </div>
    </>    
}

export default observer(Result);