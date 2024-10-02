import React, { useState } from "react";
import "../styles/Login.css"; // CSS 파일 임포트

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 여기에 API 호출 추가
    console.log("로그인 정보:", { email, password });
  };

  return (
    <div className="login-container">
      {" "}
      {/* 클래스 추가 */}
      <h2>로그인</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">로그인</button>
      </form>
      <div className="login-links">
        <a href="/find-id">아이디 찾기</a>
        <span> | </span> {/* 구분 기호 */}
        <a href="/find-password">비밀번호 찾기</a>
      </div>
      <div className="signup-prompt">
        <p>
          무신사 혜택을 받아보세요! <a href="/register">회원가입</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
