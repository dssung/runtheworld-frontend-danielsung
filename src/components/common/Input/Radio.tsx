import React, { useState } from 'react';
import './style.css';

interface Props {
    label: string;
    name: string;
    values: Array<string>;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Radio: React.FC<Props> = ({
    label, name, values, handleChange
}) => {
    const [invalid, setInvalid] = useState(false);

    const handleInvalid = (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault();
        setInvalid(true);
    }

    const renderErrorMsg = () => {
        let className = invalid ? 'error-msg' : 'error-msg hidden';
        let message = 'Please choose one of the following:';
        
        return <p className={className}>{message}</p>
    }
    
    const renderRadios = () => {
        return values.map(value => 
            <>
                <input 
                    type='radio' 
                    name={name} 
                    onChange={handleChange} 
                    value={value}
                    required
                    onInvalid={e => handleInvalid(e)}
                />
                <label> {value} </label>
            </>
        )
    }
    
    return (
        <div className='radio'>
            <p className='input-label radio-label'>
                {label} <span className='required'>*</span>
            </p>
            
            {renderErrorMsg()}
            {renderRadios()}
        </div>
    );
}

export default Radio;