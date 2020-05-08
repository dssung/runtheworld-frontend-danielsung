import React from 'react';
import './style.css';

interface Props {
    name: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<Props> = ({
    name, handleChange
}) => {
    return (
        <div className='checkbox'>
            <input 
                type="checkbox" 
                name={name} 
                onChange={handleChange}
            />
            <label> 
                {name} 
            </label>
        </div>
    );
}

export default Checkbox;