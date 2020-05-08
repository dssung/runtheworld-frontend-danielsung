import React from 'react';
import './style.css';

interface Props {
    label: string;
    name: string;
    type: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<Props> = ({
    label, name, type, handleChange 
}) => {
    return (
        <>
            <p className='input-label'>
                {label} <span className='required'>*</span>
            </p>
            
            <input 
                className='text-input' 
                name={name} 
                type={type} 
                onChange={handleChange}
            />
        </>
    );
}

export default TextInput;
