import React from "react";
import { GrCheckboxSelected, GrCheckbox } from "react-icons/gr";
import { MdRemoveCircleOutline } from "react-icons/md";

//css 파일을 분리해서 작업하지만,
//해당 컴포넌트 내부에서 한번에 css 작업을 같이 하는 경우가 많음.
import styled from "styled-components";
import cn from "classnames";

//조건부 렌더링 쉽게 이요하기 위한 도구 가져오기.

//작업 순서
//1) TodoListItemCSS 2)CheckboxCss 3)TextCss 4)RemoveCss

//컴포넌트 내부에, 각 요소에 css 작업 해보기.

const TodoListItemCSS = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  /* 짝수 번째 자식 요소의 배경색 지정  &: 현재 본인 요소, div */
  &:nth-child(even) {
    background: #f8f9fa;
  }
  //checkbox 클래스 속성이 빠짐
  .checkbox {
    cursor: pointer;
    flex: 1;
    display: flex;
    align-items: center;
    svg {
      font-size: 1.5rem;
    }
    .text {
      margin-left: 0.5rem;
      flex: 1;
    }
    &.checked {
      svg {
        color: #22b8cf;
      }
      .text {
        color: #adb5bd;
        text-decoration: line-through;
      }
    }
  }
`;

const CheckboxCss = styled.div`
  cursor: pointer;
  /* 차지 할 수 있는 영역 모두 차지,  */
  flex: 1;
  display: flex;
  align-items: center;
  svg {
    font-size: 1.5rem;
  }
`;

const TextCss = styled.div`
  margin-left: 1.5rem;
  flex: 1;
`;

const RemoveCss = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #ff6b6b;
  cursor: pointer;
  &:hover {
    color: #ff8787;
  }
`;

//가상 페이징 처리하는 쿨래스 style-components 추가하기.
const ListvirtualizedCss = styled.div`
  /* 각 목록요소가 출력이 될때, 구분선 넣기 */
  & + & {
    border-top: 1px solid #dee2e6;
  }
  &:nth-child(even) {
    background: #f8f9fa;
  }
`;

// 부모 컴포넌트 TddoList로 부터 전달 받은 속성
{
  /* <TodoListItem todo={todo} key={todo.id} /> */
}
// todo ={id :1, text="내용", checked : true}

//지우는 기능을 하는 함수를 전달 받아서, 사용하기.
//<TodoListItem todo={todo} key={todo.id} onRemove={onRemove} />
//페이징 처리, 추가부분 style
const TodoListItem = ({ todo, onRemove, onToggle, style }) => {
  // const text = todo.text
  // const checked = todo.checked
  // const id = todo.id

  //삭제를 하려면, 그 요소를 선택하기.
  // 어느 요소를 삭제할지를 시스템에 알려줘야 함.
  // 예) todo id= 1, id=2
  const { id, text, checked } = todo;
  return (
    // 부모로 부터 받은 더미 데이터를 사용하면 됨.
    // 전달
    // 1) TodoMain -> TodoList -> TodoListItem : 더미데이터가 전달중, props로

    //조건부 랜더링 하기.
    // 도구를 사용하기. classnames 모듈 이용해서, 쉽게 조건부 렌더링 하기.

    //페이징 추가, 기존의 아이템 요소 css 부분을 감싸주기.
    <ListvirtualizedCss className="TodoListItem-virtualized" style={style}>
      <TodoListItemCSS>
        {/* cn 이용하면, checkbox라는 속성이 checked의 속성에 의해서 
      true 이면, className에 등록이 되고,
      false 이면, className에 등록이 안됨 */}

        {/* 체크하는 함수 적용하기 */}

        <CheckboxCss
          className={cn("checkbox", { checked })}
          onClick={() => onToggle(id)}
        >
          {/* 체크박스의 상태를 표시하는 checked 변수를 기준으로, 조건이 true: GrCheckboxSelected 사용
        조건이 false :GrCheckbox 사용 */}

          {/* 조건부 렌더링 cn 이용해서 하기. */}
          {checked ? <GrCheckboxSelected /> : <GrCheckbox />}

          {/* <GrCheckbox /> */}
          {/* 더미데이터 내용중 text 가져오기 */}
          {/* <TextCss>샘플 할일</TextCss> */}
          <TextCss className="text">{text}</TextCss>
        </CheckboxCss>
        <RemoveCss onClick={() => onRemove(id)}>
          <MdRemoveCircleOutline />
        </RemoveCss>
      </TodoListItemCSS>
    </ListvirtualizedCss>
  );
};

//맨 마지막에서, 디폴트 부분 React.memo 적용해서, 1차 성능 개선 확인
export default React.memo(TodoListItem);
