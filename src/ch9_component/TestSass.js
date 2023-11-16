//방금 만든 css 문법을 테스트할 빈도화지

//CSS Modul 테스트 해보기.
//만든 modul.css 불러오기
import cssmodule from "./CSSModule.module.css";

import React from "react";
import "./SassComponent.scss";

const TestSass = () => {
  console.log("css module 확인 : " + cssmodule);
  //[파일이름]_[클래스이름]_[해시값]
  return (
    <>
      {/* CSS Modul 테스트 해보기.  적용하기*/}
      <div className={cssmodule.wrapper}>CSS Modul 테스트 해보기.</div>
      <div className="testGlobal">CSS Modul 테스트 해보기2.</div>
      {/*크롬 개발자 도구에서, 해당 태그명을 확인하면 됨
       CSSModule_wrapper__1UYCv CSSModule_wrapper2__NzEsu */}
      {/* es6 문법, 템플릿 리터럴 
       ``(백틱) :문자열 안에서 자바스크립트 레퍼런스를 쉽게 넣을 수 있다. 
       `${cssmodule.wrapper} ${cssmodule.wrapper2}`*/}
      <div className={`${cssmodule.wrapper} ${cssmodule.wrapper2}`}>
        CSS Modul 테스트 해보기. 2개클래스 적용해보기
      </div>
      <div className="SassTest">
        <div className="box red"></div>
        <div className="box orange"></div>
        <div className="box yellow"></div>
        <div className="box green"></div>
        <div className="box blue"></div>
        <div className="box navy"></div>
        <div className="box violet"></div>
      </div>
    </>
  );
};

export default TestSass;
