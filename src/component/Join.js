import React from "react";
import { useState, useRef } from "react";

import { Avatar, Button } from "antd";

const Join = () => {
  const [Image, setImage] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  );

  const [File, setFile] = useState("");
  console.log(File);

  const fileInput = useRef(null);

  const onChangeImage = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    } else {
      setImage(
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
      );
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const { email, password } = form;

  const onChangeForm = (e) => {
    const nextForm = {
      ...form,

      [e.target.name]: e.target.value,
    };

    setForm(nextForm);
  };

  const onClick = () => {
    alert("email: " + email + ", password : " + password);
    setForm({
      email: "",
      password: "",
    });
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <div>
      <h1>이벤트 확인 중. </h1>

      <Avatar
        src={Image}
        size={200}
        onClick={() => fileInput.current.click()}
      />
      <input
        type="file"
        style={{ display: "none" }}
        accept="image/jpg, image/png, image/jpeg"
        name="profileImg"
        onChange={onChangeImage}
        ref={fileInput}
      />

      <h2>이메일 : {email}</h2>
      <h2>패스워드 : {password}</h2>
      <input
        type="text"
        name="email"
        placeholder="이메일 입력해주세요."
        value={email}
        onChange={onChangeForm}
        onKeyPress={onKeyPress}
      />
      <br />
      <input
        type="text"
        name="password"
        placeholder="패스워드를 입력해주세요."
        value={password}
        onChange={onChangeForm}
        onKeyPress={onKeyPress}
      />
      <br />
      <Button onClick={onClick} type="primary">
        회원가입
      </Button>
    </div>
  );
};

export default Join;
