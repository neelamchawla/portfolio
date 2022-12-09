import React from 'react';
import "./social.css";

function Social() {
  return (
    <>
    <div className="social">
        <a href="#">
            <div className="social-btn color-telegram">
            <div className="icons8-telegram-app" />
            <p className="order-1 google-font margin-telgram">Telegram</p>
            </div>
        </a>
        <a href="#">
            <div className="social-btn color-instagram">
            <div className="icons8-instagram" />
            <p className="order-1 google-font margin-instagram">Instagram</p>
            </div>
        </a>
        <a href="#">
            <div className="social-btn color-whatsapp">
            <div className="icons8-whatsapp" />
            <p className="order-1 google-font margin-instagram">Whats App</p>
            </div>
        </a>
    </div>
    </>
  )
}

export default Social