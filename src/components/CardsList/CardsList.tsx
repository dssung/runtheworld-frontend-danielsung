import React, { useState, useRef, useEffect, useReducer } from 'react';
import User from '../../interfaces/user';
import AddButton from './Buttons/AddButton';
import SubmitButton from './Buttons/SubmitButton';
import Card from '../Card/Card';
import EmptyCard from '../Card/EmptyCard';
import './style.css';

const NEW_USER = {
    name: '',
    email: '',
    gender: '',
    agreement: false
}

type State = User[];

type Actions = 
    | { type: 'add', }
    | { type: 'delete', idx: Number }
    | { type: 'change', idx: Number, user: User}

const CardReducer = (state: State, action: Actions) => {
    switch (action.type) {
        case 'add':
            return [...state, { ...NEW_USER }];
        
        case 'delete':
            return state.filter((_, idx) => action.idx !== idx);

        case 'change': 
            return state.map((user, idx) => idx === action.idx ? action.user : user)
        
        default:
            return state;
    }
}

const CardsList: React.FC = () => {
    const [users, dispatch] = useReducer(CardReducer, [{ ...NEW_USER }]);
    const [cardAdded, setCardAdded] = useState<Boolean>(false);
    
    const lastCardRef = useRef<HTMLDivElement>(null);

    //If card was added then scroll
    useEffect(() => {
        if (cardAdded === true){
            if (!lastCardRef.current) return;
            lastCardRef.current.scrollIntoView();
            setCardAdded(false);
        }
    }, [cardAdded, users])

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(users);
        alert('Submitted!');
    }

    const renderCards = () => {
        if (users.length){
            return users.map((user, idx) => {
                return (
                    <div className='card-container' ref={idx === users.length - 1 ? lastCardRef : null}>
                        <Card 
                            idx={idx} 
                            user={user}
                            handleUserChange={(user) => { dispatch({ type: 'change', idx: idx, user: user })}}
                            handleDelete={() => { dispatch({ type: 'delete', idx: idx })}}
                        />
                    </div>
                )
            })
        } else {
            return <EmptyCard/>
        }
    }

    return (
        <>
            <form className='form-list' onSubmit={handleSubmit}>
                {renderCards()}
                
                <div className='button-container'>
                    <AddButton onClick={() => { setCardAdded(true); dispatch({ type: 'add'})}}/>
                    <SubmitButton disabled={users.length === 0}/>
                </div>
            </form>
        </>
    );
}

export default CardsList;
