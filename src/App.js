import logo from "./logo.svg";
import "./App.css";
import Join from "./component/Join";
import { Button, Space, DatePicker, version } from "antd";
//페이지 이동을 위한 설정 1
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./component/Main";
import MyCount from "./component/MyCount";
import { Component } from "react";
import RefPracticeScrollTest from "./ch5_component/RefPracticeScrollTest";
import DataListKeyAddDalTest from "./ch6_component/DataListKeyAddDalTest";
import LifeCycleTest from "./ch7_classLifeCycle/LifeCycleTest";
import InfoTestUseState from "./ch8_hooksTest/InfoTestUseState";
import InfoTestUseEffect from "./ch8_hooksTest/InforTestUseEffect";
import CountUseReducerTest from "./ch8_hooksTest/CountUseReducerTest";
import InfoTestUseReducer from "./ch8_hooksTest/InfoTestUseReducer";
import AverageUseMemoTest from "./ch8_hooksTest/AverageUseMemoTest";
import AverageUseCallback from "./ch8_hooksTest/AverageUseCallback";
import AverageUseRefTest from "./ch8_hooksTest/AverageUseRefTest";
import AverageUseParamsTest from "./ch8_hooksTest/AverageUseParamsTest";
import InfoTestCustomHooks from "./ch8_hooksTest/InfoTestCustomHooks";
import TestSass from "./ch9_component/TestSass";
import StyledComponentsTest from "./ch9_component/StyledComponentsTest";
import TodoMain from "./ch10_TodoTest/TodoMain";
import ImmerTest from "./ch12_immerTest/ImmerTest";
import TestZone from "./ch12_immerTest/testZone";
import ApiTest from "./ch13_API_PublicDataTest/ApiTest";
import ApiTestKoreaNews from "./ch13_API_PublicDataTest/ApiTestKoreaNews";
import MainNews from "./ch13_API_PublicDataTest/component/MainNews";
import NewsPage from "./ch13_API_PublicDataTest/page/NewsPage";
import TestColorBox from "./ch14_ContextAPITest/TestColorBox";
import TestColorMain from "./ch14_ContextAPITest/TestColorMain";

function App() {
  return (
    //페이지 이동을 위한 설정 2 . 전체 요소를
    //BrowserRouter 로 감싸기.
    //구성요소는 Routes -> Route 로 구성할 예정.
    <BrowserRouter>
      <Routes>
        {/* 메인으로 사용할(index->주소에서 : / ) 페이지를 App 또는 Main.js 로 해도 됨 */}
        <Route index element={<Main />} />
        {/* 주소: http://localhost:3000/join -> 해당 페이지 안내 : element={<이동할 컴포넌트>} */}
        <Route path="join" element={<Join />} />
        {/* 추가, 3장에서 연습했던, MyComp라는 컴포넌트 페이지 이동에 추가해보기 */}
        <Route path="mycount" element={<MyCount />} />
        <Route path="scrollRefTest" element={<RefPracticeScrollTest />} />
        <Route path="listKeyDataAddDel" element={<DataListKeyAddDalTest />} />
        <Route path="ClassLifeCycleTest" element={<LifeCycleTest />} />
        <Route path="useStateTest" element={<InfoTestUseState />} />
        <Route path="useEffectTest" element={<InfoTestUseEffect />} />
        <Route path="useReducerTest" element={<CountUseReducerTest />} />
        <Route path="useReducerTest2" element={<InfoTestUseReducer />} />
        <Route path="useMemoTest" element={<AverageUseMemoTest />} />
        <Route path="useCallbackTest" element={<AverageUseCallback />} />
        <Route path="useRefTest" element={<AverageUseRefTest />} />
        {/* useParams test 설정  : path="useParamsTest/:id"*/}
        <Route path="useParamsTest/:id" element={<AverageUseParamsTest />} />
        <Route path="customHooksTest" element={<InfoTestCustomHooks />} />
        <Route path="sassTest" element={<TestSass />} />
        <Route path="styledComponentTest" element={<StyledComponentsTest />} />
        <Route path="todomain" element={<TodoMain />} />
        <Route path="immerTest" element={<ImmerTest />} />
        <Route path="immerTestZone" element={<TestZone />} />
        <Route path="APITest" element={<ApiTest />} />
        <Route path="apiTest2" element={<ApiTestKoreaNews />} />
        {/* <Route path="apiTest3" element={<MainNews />} /> */}
        <Route path="newsPageTest/:category" element={<NewsPage />} />
        <Route path="contextAPITest" element={<TestColorMain />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
