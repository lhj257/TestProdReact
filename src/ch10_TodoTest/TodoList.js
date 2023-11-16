import React, { useCallback } from "react";
import TodoListItem from "./TodoListItem";

//페이징 처리 해주는 가상의 리스트 불러오기
import { List } from "react-virtualized";
const TodoList = ({ todos, onRemove, onToggle }) => {
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
    </List>
    // </TodoListCss>
  );
};

//추가하기.
export default React.memo(TodoList);
