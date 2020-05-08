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
        const name = event.target.name;
        const type = event.target.type;
        const value = type === 'checkbox' ? event.target.checked : event.target.value;

        user[name] = value;        
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
                    name='name'
                    value={user.name}
                    handleChange={(e) => handleChange(e)}
                />
                <TextInput
                    type='email'
                    label='Email'
                    name='email'
                    value={user.email}
                    handleChange={(e) => handleChange(e)}
                />
                <Radio 
                    label='Gender'
                    name='gender'
                    value={user.gender} 
                    choices={['male', 'female', 'other']} 
                    handleChange={(e) => handleChange(e)}
                />
                <Checkbox
                    name='agreement'
                    value={user.agreement}
                    label='I agree to the terms and conditions'
                    handleChange={handleChange}
                />
            </div>
        </div>
    );
}

export default Card;
