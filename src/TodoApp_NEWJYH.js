import React, { useCallback, useState, useRef } from 'react';
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
    // id 변수값을 만들기 위함
    // 실제 서버에서 받아올때는 axios get 사용
    // 충돌방지를 위해 3부터 사용
    const nextId = useRef(3);

    // TodoForm에서 사용할 함수 onInsert
    const onInsert = useCallback( text => {
        setTodos(
            todos.concat({
                id: nextId.current,
                text,
                done: false
            })
        );
        nextId.current += 1;
    },[todos]);
    // 로직 처리 
    // todos가 변경될때마다 같이 움직임 
    const onToggle = useCallback(id => {
        setTodos(
            todos.map(todo => todo.id === id ? {...todo, done: !todo.done} : todo)
        );
    }, [todos]);
    return (
        <div>
            <TodoForm onInsert={onInsert}/>
            <TodoList todos={todos} onToggle={onToggle}/>
        </div>
        );
};

export default TodoApp_NEWJYH;