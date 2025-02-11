import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { RiVerifiedBadgeFill } from "react-icons/ri";

import "./Payment.css";


const Payment = () => {
  return (
    <div className="payment-header">
      {/* Header Section */}
      <div className="header-top">
        <h2 className="logo">
          <img src="https://play-lh.googleusercontent.com/6zxEyhbtwq9pfvyG55jL3Bd3GZ-1-yE_2Hseaa5wwxasI1vPQPkPtTjDHeVBFGzlLz7Z" alt="AceCoinPay Logo" className="logo-img" />
          <span className="logo-text">AceCoin<span className="bold">Pay</span></span>
        </h2>
        <div className="timer">
          <span>01</span>:<span>19</span>
        </div>
      </div>
      
      {/* Card Number Section */}
      <div className="card-section">
        <div className="card-header">
          <label className="card-label">Card Number</label>
          <div className="edit-option">
            <FaRegEdit className="edit-icon" /> <span>Edit</span>
          </div>
        </div>
        <p className="card-description">Enter the 16-digit card number on the card</p>
        <div className="card-display">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPMEm-efiVHsW0NsLe3lZ7lixMo3vJhGhO0w&s" alt="Card Logo" className="card-logo" />
          <span className="card-number">2412 - 7512 - 3412 - 3456</span>
          <div className="edit-icon-wrapper">
            <RiVerifiedBadgeFill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
