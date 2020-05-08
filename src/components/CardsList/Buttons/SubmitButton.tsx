import React from 'react';
import './style.css';

interface Props {
    disabled: boolean
}

const SubmitButton: React.FC<Props>  = ({ disabled }) => {
    return (
        <button 
            type='submit'
            id='submit'
            className='button'
            disabled={disabled}
        >
            Submit
        </button>
    );
}

export default SubmitButton;
