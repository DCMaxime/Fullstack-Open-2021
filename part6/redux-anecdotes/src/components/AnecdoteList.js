import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { vote } from '../reducers/anecdoteReducer';
import {removeNotification, setNotification} from "../reducers/notificationReducer";

const Anecdote = ({ anecdote, handleClick }) => (
  <>
    <div key={anecdote.id}>
      <div>
        {anecdote.content}
      </div>
      <div>
        has
        {' '}
        {anecdote.votes}
        <button onClick={handleClick}>vote</button>
      </div>
    </div>
  </>
);

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state.anecdotes);
  const dispatch = useDispatch();

  return (
    <>
      <h2>Anecdotes</h2>
      {
          anecdotes.map((anecdote) => (
            <Anecdote
              key={anecdote.id}
              anecdote={anecdote}
              handleClick={() => {
                  dispatch(vote(anecdote.id))
                  dispatch(setNotification(`You voted ${anecdote.content}.`, 5))
              }}
            />
          ))
      }
    </>
  );
};

export default AnecdoteList;
