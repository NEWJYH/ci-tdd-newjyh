import React from 'react';
import TodoList from './TodoList';
import TodoForm from "./TodoForm";

const TodoApp_NEWJYH = () => {
// TodoApp에서 필요한 TodoForm과 TodoList 를 가져옴.
    return (
        <div>
            <TodoForm />
            <TodoList todos={[]}/>
        </div>
        );
};

export default TodoApp_NEWJYH;