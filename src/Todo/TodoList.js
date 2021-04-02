import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

function TodoList(props) {
  return (
    <ul style={{listStyle: 'none', margin: 0, padding: 0}}>
      { props.todos.map((todo, index) => <TodoItem index={index} todo={todo} key={todo.id} onChanged={props.onToggle} />) }
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired
};

export default TodoList;
