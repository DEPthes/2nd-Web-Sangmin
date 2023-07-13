import React, { useEffect, useState } from 'react'

// 임의로 정한 데이터 
const User = {
  email: 'matthew10164@gmail.com',
  pw: 'a12345678!!'
}


export default function Login() {
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');
    const [confirmPw, setConfirmPw] = useState('');

    const [emailValid, setEmailValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);
    const [notAllow, setNotAllow] = useState(true);

    /*Input 값을 입력할 때마다 계속 값을 불러와서 올바른 Email 형식인지 검증 함수 */
    const handleEmail = (e) => {
      setEmail(e.target.value);
      /* 자바스크립트 정규표현식 */
      const regex =
        /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
      if (regex.test(e.target.value)) {
        setEmailValid(true);
      } else {
        setEmailValid(false);
      }
    };

     /*Input 값을 입력할 때마다 계속 값을 불러와서 올바른 Pw인지 검증 함수 */
    const handlePw = (e) => {
      setPw(e.target.value);
      const regex =
        /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
      if (regex.test(e.target.value)) {
        setPwValid(true);
      } else {
        setPwValid(false);
      }
    };

    /* emailValid와 pwValid가 변경이 될때 버튼 활성화 여부가 결정되는 코드 */
    useEffect(() => {
      if(emailValid && pwValid) {
        setNotAllow(false);
        return;
      }
      setNotAllow(true);
    }, [emailValid, pwValid]);

    const handleConfirmPw = (e) => {
      setConfirmPw(e.target.value);
    };
    

    /* click 이벤트가 발생할 때 함수 실행 */
    const onClickConfirmButton = () => {
      if(email === User.email && pw === User.pw) {
        alert('로그인에 성공했습니다.')
      } else {
        alert("등록되지 않은 회원입니다.");
      }
    }

    
    return (
      <div className="page">
        <div className="titleWrap">
          로그인하기
        </div>

        <div className="contentWrap">
          <div className="inputTitle">이메일 주소</div>
          <div
            className="inputWrap"
          >
            <input
              className="input"
              type="text"
              placeholder="test@gmail.com"
              value={email}
              onChange={handleEmail}
            />
          </div>
          <div className="errorMessageWrap">
            {!emailValid && email.length > 0 && (
              <div>올바른 이메일을 입력해주세요.</div>
            )}
          </div>
          {/* 이메일 주소와 비밀번호 inputwrap사이의 margin 값 조정 위해 인라인스타일로 지정  */}
          <div style={{ marginTop: "26px" }} className="inputTitle"> 
            비밀번호
          </div>
          <div className="inputWrap">
            <input
              className="input"
              type="password"
              placeholder="영문, 숫자, 특수문자 포함 8자 이상"
              value={pw}
              onChange={handlePw}
            />
          </div>
          <div className="errorMessageWrap">
            {!pwValid && pw.length > 0 && (
              <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
            )}
          </div>
          <div style={{ marginTop: "26px" }} className="inputTitle">
        비밀번호 재입력
        </div>
        <div className="inputWrap">
        <input
          className="input"
          type="password"
          placeholder="비밀번호 확인"
          value={confirmPw}
          onChange={handleConfirmPw}
        />
        </div>
        <div className="errorMessageWrap">
        {pw !== confirmPw && confirmPw.length > 0 && (
          <div>비밀번호가 일치하지 않습니다.</div>
        )}
        </div>
        </div>
        

        {/* 버튼이 언제 활성화될지 확인 */}
        <div>
          <button onClick={onClickConfirmButton} disabled={notAllow} className="bottomButton">
            확인
          </button>
        </div>
      </div>
    );
}
