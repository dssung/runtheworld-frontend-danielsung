import React, { useState } from 'react';
import './style.css';

interface Props {
    label: string;
    name: string;
    id: string;
    value: string;
    choices: Array<string>;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Radio: React.FC<Props> = ({
    label, name, id, value, choices, handleChange
}) => {
    const [invalid, setInvalid] = useState(false);

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInvalid(false);
        handleChange(event);
    }

    const renderErrorMsg = () => {
        let className = invalid ? 'error-msg' : 'error-msg hidden';
        return <p className={className}>Please choose one of the above</p>
    }
    
    const renderRadios = () => {
        return choices.map(choice =>
            <>
                <input 
                    type='radio' 
                    className='radio-btn'
                    id={id}
                    name={name} 
                    value={choice}
                    checked={choice === value}
                    onChange={handleRadioChange} 
                    onInvalid={() => setInvalid(true)}
                    required
                />
                <label className='radio-btn-label'>{choice}</label>
            </>
        )
    }
    
    return (
        <div className='radio'>
            <p className='input-label radio-label'>
                {label} <span className='required'>*</span>
            </p>
            
            {renderRadios()}
            {renderErrorMsg()}
        </div>
    );
}

export default Radio;