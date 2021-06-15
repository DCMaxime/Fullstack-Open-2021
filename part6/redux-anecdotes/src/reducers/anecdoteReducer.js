import anecdoteService from '../services/anecdotes'
import {removeNotification, setNotification} from "./notificationReducer";

const anecdoteReducer = (state = [], action) => {
    console.log('state now: ', state);
    console.log('action', action);
    switch (action.type) {
        case 'NEW_ANECDOTE':
            return [...state, action.data]
        case 'VOTE':
            const id = action.data.id
            const anecdoteToChange = state.find(n => n.id === id)
            const changedAnecdote = {
                ...anecdoteToChange,
                votes: anecdoteToChange.votes + 1
            }
            return state.map(anecdote => anecdote.id !== id ? anecdote : changedAnecdote)
        case 'INIT_ANECDOTES':
            return action.data
        default:
            return state;
    }
};

export const vote = (id) => {
    console.log('vote', id);
    return async dispatch => {
        await anecdoteService.vote(id)
        dispatch({
            type: 'VOTE',
            data: {id}
        })
    }
};

export const createAnecdote = (content) => {
    return async dispatch => {
        const newAnecdote = await anecdoteService.createNew(content)
        dispatch({
            type: 'NEW_ANECDOTE',
            data: newAnecdote
        })
        dispatch(setNotification(`You created '${newAnecdote.content}'`, 10))
    }
};

export const initializeAnecdotes = () => {
    return async dispatch => {
        const anecdotes = await anecdoteService.getAll()
        dispatch({
            type: 'INIT_ANECDOTES',
            data: anecdotes,
        })
    }
}

export default anecdoteReducer;
