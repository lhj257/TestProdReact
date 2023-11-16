import React, { useCallback } from "react";
import styled from "styled-components";
import TodoListItem from "./TodoListItem";

//페이징 처리 해주는 가상의 리스트 불러오기
import { List } from "react-virtualized";

//전체 리스트 부분만 css 작업. TodoListCss
const TodoListCss = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
`;

//부모에서 전달한 props 속성을, 자식 컴포넌트에서 가져오기
//제거하는 함수를 전달 받아서, 사용하기.
{
  /* <TodoList todos={todos} onRemove={onRemove} /> */
}
//체크하는 함수를 전달 받아서, 사용하기.
{
  /* <TodoList todos={todos} onToggle={onToggle} /> */
}
const TodoList = ({ todos, onRemove, onToggle }) => {
  // react-virtualized 이용해서, 페이징하기, 현재, 리스트 목록부분만의 사이즈 : 512X513(9개 기준)
  //  하나의 높이를 대략 : 57px 정함(57*9=513)
  // rowRender, 가상의 행을 나타내는 함수 정의하기.
  const rowRender = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <TodoListItem
          todo={todo}
          key={key}
          onRemove={onRemove}
          onToggle={onToggle}
          styel={style}
        />
      );
    },
    [onRemove, onToggle, todos]
  );

  return (
    // 기존의 리스트 -> 가상의 리스트로 교체후
    // css 속성 추가하기
    // <TodoListCss>
    // 부모 리스트에서 props로 담아서, TodoListItem 전달하기.
    <List
      width={512}
      height={513}
      rowCount={todos.length}
      rowHeight={57}
      rowRenderer={rowRender}
      list={todos}
      style={{ outline: "none" }}
    >
      {/* 부모에서 전달받은 데이터를 사용해보기 */}
      {todos.map((todo) => (
        //  TodoList 부모 컴포넌트에, 다시 , 자식 컴포넌트인 TodoListItem에게 props로 전달중
        // todo 속성과, key 속성 전달함
        // 목록요소가 출력시 반드시, key 명시해야함, 그래야 오류가 없고, 속도빠름.

        //TodoMain -> TodoList -> TodoListItem 에게, 지우는 기능의 함수를 전달.
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
      {/* <TodoListItem />
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
      <TodoListItem /> 
      자식에서, 더미 데이털 직접 만들어서 사용했다면*/}
    </List>
    // </TodoListCss>
  );
};

//추가하기.
export default React.memo(TodoList);
