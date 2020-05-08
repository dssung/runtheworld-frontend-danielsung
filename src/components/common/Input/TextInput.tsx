import React, { useState } from 'react';
import './style.css';

interface Props {
    label: string;
    name: string;
    type: string;
    value: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<Props> = ({
    label, name, type, value, handleChange 
}) => {
    const [invalid, setInvalid] = useState(false);

    const handleInvalid = (event: React.FormEvent<HTMLInputElement>) => {
        // event.preventDefault();
        setInvalid(true);
    }

    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInvalid(false);
        handleChange(event);
    }

    const renderErrorMsg = () => {
        let className = invalid ? 'error-msg' : 'error-msg hidden';
        let message = 'Invalid';

        if (name === 'name'){
            message = 'Name cannot be empty'    
        }

        if (name === 'email'){
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
                name={name} 
                type={type}
                onChange={handleTextChange}
                onInvalid={e => handleInvalid(e)}
                formNoValidate={true}
                required
            />

            {renderErrorMsg()}
        </>
    );
}

export default TextInput;
