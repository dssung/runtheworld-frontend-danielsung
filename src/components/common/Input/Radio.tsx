import React from 'react';
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
    
    const renderRadios = () => {
        return values.map(value => 
            <>
                <input 
                    type='radio' 
                    name={name} 
                    onChange={handleChange} 
                    value={value}
                />
                <label> {value} </label>
            </>
        )
    }
    
    return (
        <div className='radio'>
            <p className='input-label'>
                {label}
            </p>
            {renderRadios()}
        </div>
    );
}

export default Radio;