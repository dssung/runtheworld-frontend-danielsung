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

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInvalid(false);
        handleChange(event);
    }

    const renderErrorMsg = () => {
        let className = invalid ? 'error-msg' : 'error-msg hidden';
        return <p className={className}>Please choose one of the above</p>
    }
    
    const renderRadios = () => {
        return values.map(value => 
            <>
                <input 
                    type='radio' 
                    className='radio-btn'
                    name={name} 
                    value={value}
                    onChange={handleRadioChange} 
                    onInvalid={() => setInvalid(true)}
                    required
                />
                <label className='radio-btn-label'>{value}</label>
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