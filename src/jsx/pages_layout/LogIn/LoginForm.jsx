import React from "react";
import LoginCaptCha from "./LoginCaptCha";
import LoginChk from "./LoginChk";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import loginContext from "../../../context/login.context";
import LoginProvider from "../../../context/loginProvider";

import Server from "../../../server/server";

import Swal from "sweetalert2";


function LoginForm() {
  const auth = useContext(loginContext);
  const navigate = useNavigate();

  const [inputData, setinputData] = useState({
    id: "",
    password: "",
    logInIp: "111.111.111.121",
  });


  
  const welcome = ()=>{
    Swal.fire({
      title: '환영합니다',  
          text: `로그인이 완료되었습니다`,
          icon: 'success'
    }).then((result)=>{
      if(result){
        navigate(-1)
      }
    })
  }

  const handleDelete = (e) => {
  
    setinputData({
      ...inputData,
      [e.target.id]: "",
    });
  };

  const handleInput = (e) => {
 

    setinputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputData.id === "") {
      alert("아이디 또는 이메일 주소를 입력해주세요.");
    } else if (inputData.password === "") {
      alert("비밀번호를 입력해주세요.");
    } else {
      axios
        .post(`${Server.baseUrl}api/user/login`, {
          userId: inputData.id,
          password: inputData.password,
          logInIp: inputData.logInIp,
        })
        .then((Response) => {
          welcome();
        
          if (Response.data) {
            auth.onLogIn(Response.data);
          }
        }).catch(errr=>{
          alert(
            "아이디 또는 비밀번호가 일치하지 않습니다. 다시 확인하신 후 입력해 주세요."
          );
          setinputData({ ...inputData, password: "" });
        });
    }
  };


  return (
    <div className="cmem_login_form">
      <form id="login_form" method="post" onSubmit={handleSubmit}>
        <fieldset>
          <legend className="isNone">로그인</legend>
          <div className="cmem_inp_area">
            <span
              className={
                inputData.id === "" ? "cmem_inp_txt2" : "cmem_inp_txt2 writing"
              }
            >
              <label>
                <span className="blind">아이디</span>
              </label>
              <input
                type="text"
                id="inp_id"
                name="id"
                placeholder="아이디"
                maxLength={50}
                onChange={handleInput}
                value={inputData.id}
              />
              <button
                type="button"
                className="inp_clear"
                onClick={handleDelete}
              >
                <span className="sp_cmem_login cmem_ico_clear" id="id">
                  <span className="blind">입력내용 삭제</span>
                </span>
              </button>
            </span>
            <span
              className={
                inputData.password === ""
                  ? "cmem_inp_txt2"
                  : "cmem_inp_txt2 writing"
              }
            >
              <label>
                <span className="blind">비밀번호</span>
              </label>
              <input
                type="password"
                id="inp_pw"
                name="password"
                placeholder="비밀번호"
                onChange={handleInput}
                value={inputData.password}
              />
              <button
                type="button"
                className="inp_clear"
                onClick={handleDelete}
              >
                <span className="sp_cmem_login cmem_ico_clear" id="password">
                  <span className="blind">입력내용 삭제</span>
                </span>
              </button>
            </span>
          </div>
          <LoginChk />
          <LoginCaptCha />
          <div className="cmem_btn_area">
            <button
              type="submit"
              className="cmem_btn cmem_btn_orange3"
              id="loginBtn"
            >
              로그인
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default LoginForm;
