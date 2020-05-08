import React from 'react';
import './style.css';

interface Props {
    onClick: () => void;
}

const AddButton: React.FC<Props> = ({
    onClick
}) => {

    return (
        <button 
            id='add'
            type='button'
            className='button'
            onClick={() => onClick()}
        >
            +
        </button>
    );
}

export default AddButton;
