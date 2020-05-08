import React, { useState } from 'react';
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

    const [className, setClassName] = useState('text-input');

    const handleInvalid = () => {
        setClassName('invalid-text-input');
    }

    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setClassName('text-input');
        handleChange(event);
    }

    return (
        <>
            <p className='input-label'>
                {label} <span className='required'>*</span>
            </p>
            
            <input 
                className={className} 
                name={name} 
                type={type}
                onChange={handleTextChange}
                onInvalid={handleInvalid}
                required
            />
        </>
    );
}

export default TextInput;
