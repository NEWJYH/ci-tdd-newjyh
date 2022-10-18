import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoApp_NEWJYH from './TodoApp_NEWJYH';

describe('<TodoApp_NEWJYH />', () => {
    // TodoApp 구성 TodoForm TodoList 이다.
    // 화면에 있는지(render가 되는지) check해봐야함
    it('renders TodoForm TodoList', () => {
        // 등록 버튼이 있으면 랜더 된다고 볼수 있다.
        // TodoList는 아무것도 없음 깡통임 논리적 구분영역일 뿐 문구가 없음 (애매)
        // 그래서 TodoList에 TestID 속성을 추가하여 있는지 확인 할것
        const { getByText, getByTestId } = render (<TodoApp_NEWJYH />);
        // 등록 버튼이 있으면 TodoForm이 화면에 있다는 것.
        getByText('등록');
        // TodoList 화면에 있는지 확인 
        getByTestId('TodoList');
    });
});
