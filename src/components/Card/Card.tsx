import React from 'react';
import User from '../../interfaces/user';
import TextInput from '../common/Input/TextInput';
import Checkbox from '../common/Input/Checkbox';
import Radio from '../common/Input/Radio';
import './style.css';

interface Props {
    idx: number;
    user: User;
    handleDelete: (id: number) => void;
    handleUserChange: (user: User, idx: number) => void;
}

const Card: React.FC<Props> = ({
    idx, user, handleDelete, handleUserChange
}) => {
    //Set new values on change then call handleUserChange
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const id = event.target.id;
        const type = event.target.type;
        const value = type === 'checkbox' ? event.target.checked : event.target.value;

        user[id] = value;
        handleUserChange(user, idx);
    }

    return (
        <div className='card'>
            <button
                type='button'
                className='close-button' 
                onClick={() => handleDelete(idx)}
            >
                x
            </button>
            
            <div className='card-body'>
                <TextInput 
                    type='text'
                    label='Name'
                    id='name'
                    value={user.name}
                    handleChange={handleChange}
                />
                <TextInput
                    type='email'
                    label='Email'
                    id='email'
                    value={user.email}
                    handleChange={handleChange}
                />
                <Radio 
                    label='Gender'
                    id='gender'
                    name={`gender_${idx}`}
                    value={user.gender}
                    choices={['male', 'female', 'other']} 
                    handleChange={handleChange}
                />
                <Checkbox
                    label='I agree to the terms and conditions'
                    id='agreement'
                    value={user.agreement}
                    handleChange={handleChange}
                />
            </div>
        </div>
    );
}

export default Card;
