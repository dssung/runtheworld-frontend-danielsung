import React, { useState } from 'react';
import './style.css';

interface Props {
    name: string;
    label: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<Props> = ({
    name, label, handleChange
}) => {
    const [invalid, setInvalid] = useState(false);

    const handleInvalid = (event: React.FormEvent<HTMLInputElement>) => {
        // event.preventDefault();
        setInvalid(true);
    }

    const renderErrorMsg = () => {
        let className = invalid ? 'error-msg' : 'error-msg hidden';
        return <p className={className}>You must agree to the terms and conditions</p>
    }

    const handleCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInvalid(false);
        handleChange(event);
    }

    return (
        <div className='checkbox'>
            <input 
                type="checkbox" 
                name={name}
                onChange={handleCheckChange}
                required
                onInvalid={e => handleInvalid(e)}
            />
            <label className='checkbox-label'> 
                {label} 
            </label>

            {renderErrorMsg()}
        </div>
    );
}

export default Checkbox;