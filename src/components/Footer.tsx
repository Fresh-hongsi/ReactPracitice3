// src/components/Footer.tsx
import React from "react";
import "../styles/Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      {/* 회사 정보 */}
      <div className="footer__info">
        <p>© MUSINSA ALL RIGHTS RESERVED</p>
      </div>

      {/* 고객 센터 */}
      <div className="footer__customer-service">
        <h4>고객 지원</h4>
        <p>전화: 02-1234-5678</p>
        <p>운영 시간: 평일 09:00 ~ 18:00</p>
      </div>

      {/* 소셜 미디어 링크 */}
      <div className="footer__social-media">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          페이스북
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          인스타그램
        </a>
        <a
          href="https://www.twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          트위터
        </a>
      </div>
    </footer>
  );
};

export default Footer;
