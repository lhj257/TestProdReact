import { Button } from "antd";
import React, { useState } from "react";

const InfoTestUseEffect = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  const [visible, setVisible] = useState(false);

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeNickName = (e) => {
    setNickname(e.target.value);
  };

  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          setVisible(!visible);
          console.log(visible);
        }}
      >
        {" "}
        {visible ? "show" : "hide"}
      </Button>
      <div>{visible ? "visible: true" : "visible : false"}</div>
      <div>
        <div style={{ display: !visible ? "flex" : "none" }}>
          <input value={name} onChange={onChangeName} />
          <input value={nickname} onChange={onChangeNickName} />
        </div>

        <div>
          <h1>
            이름: <b>{name}</b>
          </h1>
        </div>
        <div>
          <h1>
            닉네임: <b>{nickname}</b>
          </h1>
        </div>
      </div>
    </>
  );
};

export default InfoTestUseEffect;
