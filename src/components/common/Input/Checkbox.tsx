import React, { useState, useEffect } from 'react';
import './style.css';

interface Props {
    id: string;
    label: string;
    value: boolean;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<Props> = ({
    id, label, value, handleChange
}) => {
    const [invalid, setInvalid] = useState(false);

    useEffect(() => {
        setInvalid(false);
    }, [value]);

    const handleCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInvalid(false);
        handleChange(event);
    }

    const renderErrorMsg = () => {
        let className = invalid ? 'error-msg' : 'error-msg hidden';
        return <p className={className}>You must agree to the terms and conditions</p>
    }

    return (
        <div className='checkbox'>
            <input 
                type="checkbox" 
                id={id}
                checked={value}
                onChange={handleCheckChange}
                onInvalid={() => setInvalid(true)}
                required
            />

            <label className='checkbox-label'> 
                {label} <span className='required'>*</span>
            </label>

            {renderErrorMsg()}
        </div>
    );
}

export default Checkbox;