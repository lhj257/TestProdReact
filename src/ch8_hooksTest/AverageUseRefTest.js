// useRef 연습 해보기.
//설정 1, 설정2, 적용하기

//순서1
import { Button } from "antd";
import React, { useCallback, useMemo, useState, useRef } from "react";

//함수1, useRef
const doAverage = (numbers) => {
  console.log("평균 계산중 -==============-");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const AverageUseRefTest = () => {
  //숫자들을 담을 임시배열
  const [list, setList] = useState([]);
  //숫자 타입 문자열, 연산시 정수로 변환 필요.
  const [number, setNumber] = useState("");

  //순서3, useRef, 설정1
  const inputElement = useRef(null);

  //함수2 -> 변경 -useCallback
  //이벤트 핸들러 추가
  //변경전
  // const onChage = (e) => {
  //   setNumber(e.target.value);
  // };
  //변경후
  //정의
  //useCallback(콜백함수, 의존성배열)
  // 의존성배열 모양 -> [] 빈배열이라서, 마운트시 한번 만 함수를 생성함.
  const onChange = useCallback((e) => {
    console.log("useCallback확인중. onChange 호출");
    setNumber(e.target.value);
  }, []);

  //함수3
  //숫자 추가하기.
  //변경전
  // const onInsert = (e) => {
  //   // 문자열 -> 정수 변환 -> 리스트에 추가해서 => 새로운 배열 생성
  //   const nextList = list.concat(parseInt(number));
  //   setList(nextList);
  //   setNumber("");
  // };
  //변경후
  const onInsert = useCallback(() => {
    console.log("useCallback확인중.onInsert 호출");
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
    //순서4, useRef, 적용
    inputElement.current.focus();
  }, [number, list]);

  // 키보드에서 엔터키 입력시, 클릭 이벤트 호출 연결 확인.
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onInsert();
    }
  };

  //임의로 결과값을 만들어서, 이 값이 변경시에만, 연산 계산하기.
  // 정의, useEffect 와 비슷함.
  // const avgResult= useMemo(콜백함수, 의존성 배열)
  //list 배열에 숫자 추가가 되면서, 그 때, 연산이 수행됨
  // 전에는 값을 입력하는 순간에도 연산이 되었다.
  const avgResult = useMemo(() => doAverage(list), [list]);

  return (
    <div>
      {/* //순서2, useRef, 설정2 */}
      <input
        value={number}
        onChange={onChange}
        ref={inputElement}
        onKeyPress={onKeyPress}
      />
      <Button onClick={onInsert}>등록하기</Button>
      {/* 리액트 리스트 출력시, 키가  의무적으로 설정 주의학.*/}
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        {/* 연산의 결과 */}
        {/* 사용하기전 */}
        {/* 평균값 : {doAverage(list)} */}
        {/* useMemo 사용후 */}
        <div>평균값 : {avgResult}</div>
      </div>
    </div>
  );
};

export default AverageUseRefTest;
