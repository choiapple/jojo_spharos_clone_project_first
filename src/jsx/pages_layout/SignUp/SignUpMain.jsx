import axios from 'axios';
import React from 'react';
import {useState} from 'react'
import Swal from 'sweetalert2';
import DaumPostcode from 'react-daum-postcode';
import { useNavigate } from 'react-router-dom';
import Server from '../../../server/server';
function SignUpMain({inputData}) {
         const navigate = useNavigate();
          /* 카카오 주소 api */
         const [openPostcode, setOpenPostcode] = React.useState(false);
         const [address , setAddress] = useState();
         const [zonecode , setZonecode] = useState();
         const handle = {
           // 버튼 클릭 이벤트
           clickButton: () => {
             setOpenPostcode(current => !current);
           },
         
           // 주소 선택 이벤트
           selectAddress: (data) => {
             console.log(`
                     주소: ${data.address},
                     우편번호: ${data.zonecode}
                 `)
             setAddress(`${data.address}`)   
             setZonecode(`${data.zonecode}`)   
             setOpenPostcode(false); 
           },
         }


         /* 아이디중복체크 */
         const [idCheck, setIdCheck] = useState("");
         const idCheckBtn = () => {
           if (userId === "") {
             alert("아이디를 입력해주세요.")
           } else {
             axios.post(`${Server.baseUrl}api/user/signupid`, {
                 "userId": userId
               })
               .then(Response => {
                 if (Response.data === '가입 가능') {
                   alert("사용 가능한 아이디입니다")
                 } else {
                   alert("이미 사용중인 아이디입니다.")
                 }
                 setIdCheck(Response.data)
               })
           }
         }
         

      
  
          const [userId, setUserId] = useState("");
          const [password, setPassword] = useState("");
          const [confirmPassword, setConfirmPassword] = useState("");
          const [userAdd, setUserAdd] = useState("");
          const [userAddDetail, setUserAddDetail] = useState("");

          const fullAdd = (address + userAddDetail)
          const [userName, setUserName] = useState(inputData.name);
          const [phoneNum, setPhoneNum] = useState(inputData.phone);
          const [email, setEmail] = useState();
         
          const [userIdError, setUserIdError] = useState(false);
          const [passwordError, setPasswordError] = useState(false);
          const [confirmPasswordError, setConfirmPasswordError] = useState(false);
          const [userAddError, setUserAddError] = useState(false);
          const [userAddDetailError, setUserAddDetailError] = useState(false);
          const [userNameError, setUserNameError] = useState(false);
          const [phoneNumError, setPhoneNumError] = useState(false);
          const [emailError, setEmailError] = useState(false);

          const onChangeUserId = (e) => {
            const userIdRegex = /^[A-Za-z0-9+]{3,}$/;
            if ((!e.target.value || (userIdRegex.test(e.target.value)))) {
              setUserIdError(false);
            } else setUserIdError(true);
            // 안에 값이 없거나 정규식이 맞으면 에러flase = 즉 에러안뜸
            // 그 외의 경우 에러 true = 즉 에러뜸
            setUserId(e.target.value);
            // 아이디값은 value값
          };
          const onChangePassword = (e) => {
            const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
            if ((!e.target.value || (passwordRegex.test(e.target.value)))) setPasswordError(false);
            else setPasswordError(true);
          
            if (!confirmPassword || e.target.value === confirmPassword) setConfirmPasswordError(false);
            else setConfirmPasswordError(true);
            setPassword(e.target.value);
          };
          const onChangeConfirmPassword = (e) => {
            if (password === e.target.value) setConfirmPasswordError(false);
            else setConfirmPasswordError(true);
            setConfirmPassword(e.target.value);
          };

          const onChangeAddress = (e) => {
            setUserAddError(false);
            setUserAdd(e.target.value)
          };
          const onChangeAddDetail = (e) => {
            setUserAddDetailError(false);
            setUserAddDetail(e.target.value)
          };

          const onChangeUserName = (e) => {
            setUserNameError(false);
            setUserName(e.target.value)
          };
          const onChangePhoneNum = (e) => {
            const phoneNumRegex = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
            if( (!e.target.value) || ((phoneNumRegex.test(e.target.value)))){
              setPhoneNumError(false);
            }else{
              setPhoneNumError(true);
            }
          
            setPhoneNum(e.target.value)
          };
          const onChangeEmail = (e) => {
            const emailRegex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
            if (!e.target.value || emailRegex.test(e.target.value)) setEmailError(false);
            else setEmailError(true);
            setEmail(e.target.value);
          };


      
      
          const validation = () => {
            if (!userId) setUserIdError(true);
            if (!password) setPasswordError(true);
            if (!confirmPassword) setConfirmPasswordError(true);
            if (!userName) setUserNameError(true);
            if (!userAddDetail) setUserAddDetailError(true);
            if (!phoneNum) setPhoneNumError(true);
            if (!email) setEmailError(true);
         
            if (userId && password && confirmPassword && userName && email && userAddDetail && phoneNum && zonecode &&idCheck){
              return true;
            }else{
              return false;
            }
          }

        
         

          const welcome = ()=>{
            Swal.fire({
              title: '환영합니다',  
                  text: `${userName}님 즐거운 쇼핑 되세요`,
                  icon: 'success'
            }).then((result)=>{
              if(result){
                navigate('/')
              }
            })
          }
        


    
          const onSubmit = (e) => {
            e.preventDefault();

            if (validation() && idCheck === "가입 가능") {
              axios.post(`${Server.baseUrl}api/user/signup`, {
                  "userId": userId,
                  "password": password,
                  "name": inputData.name,
                  "birth": inputData.birth,
                  "phone": inputData.phone,
                  "email": email,
                  "gender": inputData.gender,

                  "address": fullAdd,
                  "zipCode": zonecode

                })
                .then(res => {
                  console.log(res);
                  welcome();
                  
                })
            } else {
              alert('회원가입이 불가합니다.')
            }

          }

    return (
     

      <form id="joinForm" method="post" onSubmit={onSubmit}>
        <input type="hidden" name="" value="" />
        {/* 로그인폼 */}



        <div id="m_content" className="cmem_ct_join">
          <div className="cmem_card_tit">
            <h3>회원 정보</h3>
          </div>
          <div className="cmem_cont">

            {/* 카카오 api */}
            <div>
              {openPostcode &&
              <DaumPostcode className='fixed' onComplete={handle.selectAddress} // 값을 선택할 경우 실행되는 이벤트
                autoClose={false} // 값을 선택할 경우 사용되는 DOM을 제거하여 자동 닫힘 설정 defaultQuery='중앙대로 664' // 팝업을 열때 기본적으로 입력되는
                검색어 />}
              {openPostcode && <div onClick={handle.clickButton} className="modalBg"></div> }
            </div>


              <div className="cmem_row">
                <dl className="cmem_ip">
                  <dt>
                    <span className="cmem_require">
                      <span className="star" aria-hidden="true">
                        *
                      </span>
                      <label htmlFor="mbrLoginId">
                        <span className="blind">필수입력</span>아이디
                      </label>
                    </span>
                  </dt>
                  <div className="">
                  <dd className='dd'>
                    <input type="text" value={userId} onChange={onChangeUserId}/>
                    {userIdError && <div className="invalid-input">아이디는 3자이상의 영어혹은 숫자를 포함하여야 합니다.</div>}
                    <button onClick={idCheckBtn} form="idCheck" className='idCheck'>중복확인</button>
                  </dd>
                 
                  </div>
              
                  
                </dl>
              </div>
            


            <div className="cmem_row">
              <dl className="cmem_ip">
                <dt>
                  <span className="cmem_require">
                    <span className="star" aria-hidden="true">
                      *
                    </span>
                    <label htmlFor="pwd">
                      <span className="blind">필수입력</span>비밀번호
                    </label>
                  </span>
                </dt>
                <dd>
                  <div className="cmem_inp_txt">
                    <input type="password" id="pwd" title="비밀번호 입력" placeholder="영문, 숫자 조합 8~20자리" name="mbrDto.pwd"
                      maxLength="20" value={password} onChange={onChangePassword} />
                    {passwordError && <div className="invalid-input">암호는 8자 이상이어야 하며 문자와 숫자를 하나 이상 포함해야 합니다.</div>}
                  </div>
                  <div className="cmem_inp_txt">
                    <input type="password" id="pwd2" title="비밀번호 재확인" placeholder="비밀번호 재확인" maxLength="20"
                      value={confirmPassword} onChange={onChangeConfirmPassword} />
                    {confirmPasswordError && <div className="invalid-input">비밀번호와 일치하지 않습니다.</div>}
                  </div>
                </dd>
              </dl>
            </div>
            <div className="cmem_row">
              <dl className="cmem_ip">
                <dt>
                  <span className="cmem_require">
                    <span className="star" aria-hidden="true">
                      *
                    </span>
                    <label htmlFor="mem_name">
                      <span className="blind">필수입력</span>이름
                    </label>
                  </span>
                </dt>
                <dd>
                  <input type="text" value={userName} readonly  />
                  {!userName && <div className="invalid-input">이름을 입력해주세요.</div>}
                </dd>
              </dl>
            </div>
            <div className="cmem_row">
              <div className="cmem_user_addr">
                <dl className="cmem_ip">
                  <dt>
                    <span className="cmem_require">
                      <span className="star" aria-hidden="true">
                        *
                      </span>
                      <label htmlFor="zipcd">
                        <span className="blind">필수입력</span>주소
                      </label>

                    </span>

                  </dt>
                  <dd>
                    <div className="cmem_inpbtn_set">
                      <span className="cmem_inp_txt" onClick={handle.clickButton}>
                        <input value={address} type="text" id="zipcd" onChange={onChangeAddress} />
                        {userAddError && <div className="invalid-input">1111</div>}
                      </span>
                      <button onClick={handle.clickButton} type="button" className="cmem_btn cmem_btn_gray"
                        id="btnPostNum">
                        우편번호<span className="blind">찾기</span>
                      </button>

                    </div>
                 
                    <div className="cmem_inpbtn_set">
                      <span className="cmem_inp_txt">
                        <input type="text" id="zipcd" value={userAddDetail} onChange={onChangeAddDetail} />
                        {!userAddDetail && <div className="invalid-input">상세주소를 입력해주세요.</div>}
                      </span>
                      <span className="cmem_inp_txt w90">
                      <input type="text" id="zipcd" value={zonecode}/>
                      {!userAddDetail && <div className="invalid-input"></div>}
                      </span>
                      
                    </div>
                   
                 
                  

                  </dd>
                </dl>
              </div>
            </div>
            <input type="hidden" name="mbrCnts[0].cntsTypeCd" value="20" />
            <div className="cmem_row">
              <div className="cmem_user_phone">
                <dl className="cmem_ip">
                  <dt>
                    <span className="cmem_require">
                      <span className="star" aria-hidden="true">
                        *
                      </span>
                      <label htmlFor="mem_hpno">
                        <span className="blind">필수입력</span>휴대폰번호
                      </label>
                    </span>
                  </dt>
                  <dd>
                    <span className="inp_value">
                      <input type="text" value={phoneNum} readonly/>
                      {phoneNumError && <div className="invalid-input">휴대폰 번호를 입력해주세요.</div>}
                    </span>
                  </dd>
                </dl>
              </div>
            </div>
            <div className="cmem_row">
              <dl className="cmem_ip">
                <dt>
                  <span className="cmem_require">
                    <span className="star" aria-hidden="true">
                      *
                    </span>
                    <label htmlFor="email">
                      <span className="blind">필수입력</span>이메일주소
                    </label>
                  </span>
                </dt>
                <dd>
                  <span className="cmem_inp_txt">
                    <input type="email" id="email" name="mbrDto.email" placeholder="이메일주소" maxLength="50"
                      onChange={onChangeEmail} />
                    {emailError && <div className="invalid-input">올바르지 않은 이메일 양식입니다.</div>}
                  </span>
                </dd>
              </dl>
            </div>
            <div className="cmem_card_tit">
              <h3>광고 정보 수신 동의</h3>
            </div>
            <div className="cmem_cont">
              <div className="cmem_row">
                <div className="cmem_terms">
                  <div className="cmem_term_tit">
                    <h4>SSG.COM</h4>
                  </div>
                  <div className="cmem_term_box">
                    <span className="cmem_inp_chk">
                      <input type="checkbox" id="policySsg" />
                      <label htmlFor="policySsg">
                        <strong>(선택)</strong> 서비스·이벤트정보 제공을
                        위한 개인정보 수집 및 이용 동의
                      </label>
                    </span>
                    <a href=""
                      className="cmem_btn cmem_btn_gray3" title="새창 열림">
                      내용보기
                    </a>
                    <ul className="cmem_termlst" id="agree40019">
                      <li>
                        <span className="cmem_inp_chk">
                          <input type="checkbox" id="emailRcvYn" />
                          <label htmlFor="emailRcvYn">이메일</label>
                        </span>
                      </li>
                      <li>
                        <span className="cmem_inp_chk">
                          <input type="checkbox" id="smsRcvYn"/>
                          <label htmlFor="smsRcvYn">문자</label>
                        </span>
                      </li>
                    </ul>
                    <p className="cmem_noti">
                      <em>
                        광고 정보 수신동의를 하시면 SSG.COM 서비스 및 이벤트
                        정보를 받으실 수 있습니다.
                      </em>
                    </p>
                  </div>
                </div>
              </div>
              <div className="cmem_row">
                <p className="cmem_noti">
                  <strong>
                    선택 항목에 동의하지 않더라도 SSG,COM회원가입 및 기본
                    서비스를 이용하실 수 있습니다.
                  </strong>
                </p>
              </div>
              <div className="cmem_btn_area">
                <button type='submit' className="cmem_btn cmem_btn_orange2" >
                  가입하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
       
    );
}

export default SignUpMain;