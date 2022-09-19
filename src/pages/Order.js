import React, {useContext} from "react";
import storesContext from "../contexts/store"
import {observer} from 'mobx-react-lite';
import {Link} from "react-router-dom";

function Order() {
    const { order } = useContext(storesContext);
	const { formData, change, isFormValid} = order;

    const inputs = Object.entries(formData).map(([name, field]) => {
        return <div className="form-group" key={name}>
            <label>{field.label}</label>
            <input 
                type="text" 
                className="form-control"
                value={field.value}
                name={name}
                onChange={(e) => change(name, e.target.value.trim())}
            />
        </div>
    });

    return <>
        <h1>Your order data</h1>
        <form>
            { inputs }
        </form>
        <Link className="btn btn-danger" to="/cart">Back</Link>
        {isFormValid && <Link className="btn btn-success" to="/result">Next</Link>}
    </>    
}

export default observer(Order);