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
        const { getByText, getByTestId } = render(<TodoApp_NEWJYH />);
        // 등록 버튼이 있으면 TodoForm이 화면에 있다는 것.
        getByText('등록');
        // TodoList 화면에 있는지 확인 
        getByTestId('TodoList');
    });

    // sample data를 넣어서 생성하면 생성이되고 잘 출력 되는지 확인
    it('renders two defaults todos', ()=> {
        const {getByText} = render(<TodoApp_NEWJYH />);
        getByText('TDD 배우기');
        getByText('react-testing-library');
    });
    // #### TodoForm onInsert가 호출이 되는지만 확인했음
    // #### 이제 그것에 대한 test case를 만들어 볼것. 
    it('creates new todo', () => {
        const { getByPlaceholderText, getByText } = render(<TodoApp_NEWJYH />);
        fireEvent.change(getByPlaceholderText('할 일을 입력하세요'),
            { target: { value: "새 항목 추가하기" } }
        );
        fireEvent.click(getByText('등록'));
        getByText('새 항목 추가하기');
    });
    // it('creates new todo', ()=>{
    //     const { getByPlaceholderText, getByText } = render(<TodoApp_NEWJYH />);
    //     fireEvent.change(getByPlaceholderText('할 일을 입력하세요'), { 
    //         target : 
    //             {  // 여기서 바꾸는 것임
    //                 value: '새 항목 추가하기'
    //             },
    //     });
    //     // 바꾼것이 잘 들어갔는지 확인 하는 로직 
    //     fireEvent.click(getByText('등록'));     
    //     getByText('새 항목 추가하기');
    // });
    // 토글 확인
    it('toggles todo', () => {
        const { getByText } = render(<TodoApp_NEWJYH />);
        const todoText = getByText('TDD 배우기');
        expect(todoText).not.toHaveStyle('text-decoration: line-through');
        fireEvent.click(todoText);
        expect(todoText).toHaveStyle('text-decoration: line-through');
    });
    // remove Todo
    it('remove todo', ()=> {
        const {getByText} = render(<TodoApp_NEWJYH />);
        const todoText = getByText('TDD 배우기');
        const removeButton = todoText.nextSibling;
        fireEvent.click(removeButton);
        // 삭제버튼을 눌렀을 때 onRemove가 불러짐
        expect(todoText).not.toBeInTheDocument();
    });
});
