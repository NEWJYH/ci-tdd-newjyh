import React, { useCallback, useState } from 'react';
import TodoList from './TodoList';
import TodoForm from "./TodoForm";

const TodoApp_NEWJYH = () => {
// TodoApp에서 필요한 TodoForm과 TodoList 를 가져옴.
    // Todos에 들어갈 변수 설정
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: 'TDD 배우기',
            done: false,
        },
        {
            id: 2,
            text: 'react-testing-library',
            done: true,
        },
    ]);
    return (
        <div>
            <TodoForm />
            <TodoList todos={todos}/>
        </div>
        );
};

export default TodoApp_NEWJYH;