import React,{ useEffect, useRef, useContext} from 'react';
import PropTypes from 'prop-types';

Counter.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    current: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
}

function Counter ({min, max, current, onChange}) {
    const inp = useRef();
    const updateImp = num => inp.current.value = num;

    const plus = () => applyCurrent(current + 1);
    const minus = () => applyCurrent(current - 1);

    const handleBlur = (e) => {
        const { value: val } = e.target;

        if(val > max) applyCurrent(max)
        else if(val < min) applyCurrent(min)

        applyCurrent(val);
    }

    const applyCurrent = (value) => {
        const numberValue = Number(value);
        if (isNaN(numberValue) || numberValue > max || numberValue < min) return;
        updateImp(numberValue); 
        onChange(numberValue);
        return numberValue;
    }

    useEffect(() => updateImp(current), [current]);

    return <div>
        <button className="btn btn-danger mr-3" onClick={minus}>-</button>
        <input 
            type="number"
            defaultValue={current}
            ref={inp}
            onBlur={handleBlur}
        />
        <button 
            className="btn btn-success" 
            onClick={plus} 
        >+</button>
    </div>
}

export default Counter;