import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onToggle, onRemove }) => {
    return (
<<<<<<< HEAD
        <ul data-testid="TodoList">
=======
        <ul data-testid='TodoList'>
>>>>>>> c6b368501c8e4799d730efc8ddbed9377a96ebf9
            {todos.map(todo => (
                <TodoItem todo={todo} key={todo.id}
                    onToggle={onToggle} onRemove={onRemove} />
            ))}
        </ul>
    );
};
export default TodoList;