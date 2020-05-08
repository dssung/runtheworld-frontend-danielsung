import React from 'react';
import './style.css';

interface Props {
    label: string;
    values: Array<string>;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkboxes: React.FC<Props> = ({
    label, values, handleChange
}) => {
    const renderCheckboxes = () => {
        return values.map(value => {
            return (
                <div className='checkbox'>
                    <input 
                        type="checkbox" 
                        name={value} 
                        onChange={handleChange}
                    />
                    <label> 
                        {value} 
                    </label>
                </div>
            )
        })

    }
    return (
        <>
            <p className='input-label'> {label}  <span className='required'>*</span> </p>
            {renderCheckboxes()}
        </>
        
    );
}

export default Checkboxes;