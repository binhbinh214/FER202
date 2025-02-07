import React from 'react';
import '../App.css'; // Đảm bảo bạn đã có file CSS tương ứng
import logo from '../images/FPT_logo.png'; // Đường dẫn đến logo

function Card() {
  return (
    <div className="card">
      <div className="card-header">
        <img 
          src={logo} 
          alt="FPT Logo" 
          className="card-logo"
        />
        <div className="card-content">
          <h1 className="card-title">Hoai Nguyen - FPT DaNang</h1>
          <p className="card-phone">Mobile: 0982827763</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
