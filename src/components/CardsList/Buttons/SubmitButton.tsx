import React from 'react';
import './style.css';

interface Props {
    onClick: () => void;
}

const SubmitButton: React.FC<Props> = ({
    onClick
}) => {
    return (
        <button 
            type='submit'
            id='submit'
            className='button'
            onClick={onClick}
        >
            Submit
        </button>
    );
}

export default SubmitButton;
