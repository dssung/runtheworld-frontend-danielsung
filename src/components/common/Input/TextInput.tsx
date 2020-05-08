import React, { useState, useEffect } from 'react';
import './style.css';

interface Props {
    label: string;
    id: string;
    type: string;
    value: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<Props> = ({
    label, id, type, value, handleChange 
}) => {
    const [invalid, setInvalid] = useState(false);

    useEffect(() => {
        setInvalid(false);
    }, [value]);

    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInvalid(false);
        handleChange(event);
    }

    const renderErrorMsg = () => {
        let className = invalid ? 'error-msg' : 'error-msg hidden';
        let message = 'Invalid';

        if (id === 'name'){
            message = 'Name cannot be empty'    
        }

        if (id === 'email'){
            message = 'Email is invalid';
            
            if (!value)
                message = 'Email cannot be empty'
        }
        
        return <p className={className}>{message}</p>
    }

    return (
        <>
            <p className='input-label'>
                {label} <span className='required'>*</span>
            </p>
            
            <input 
                className={invalid ? 'invalid-text-input' : 'text-input'} 
                name={`${Math.random()}`}   //Workaround to disable google autofill
                autoComplete="none"         //Workaround to disable google autofill
                id={id}
                value={value}
                type={type}
                onChange={handleTextChange}
                onInvalid={() => setInvalid(true)}
                required
            />

            {renderErrorMsg()}
        </>
    );
}

export default TextInput;
