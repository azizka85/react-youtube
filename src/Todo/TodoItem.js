import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../context';

function TodoItem({ todo, index, onChanged }) {
  const classes = [];
  const { removeTodo } = useContext(Context);

  if(todo.completed) {
    classes.push('done');
  }

  return (
    <li 
      style={{
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '0.5rem 1rem', 
        border: '1px solid #ccc', 
        borderRadius: '0.25rem', 
        marginBottom: '0.5rem'
      }}
    >
      <span className={classes.join(' ')}>
        <input 
          type="checkbox" 
          style={{marginRight: '1rem'}}
          checked={todo.completed}
          onChange={() => onChanged(todo.id)}
        />
        <strong>{index + 1}</strong> 
        &nbsp;
        {todo.title}
      </span>      
      <button className="rm" onClick={() => removeTodo(todo.id)}>&times;</button>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChanged: PropTypes.func.isRequired
};

export default TodoItem;
