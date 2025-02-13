import React from "react";
import { MdEdit, MdOutlineVerified } from "react-icons/md";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { BsFillGrid3X3GapFill, BsGrid3X3Gap } from "react-icons/bs";
import { FaWifi } from "react-icons/fa";
import { SiMastercard } from "react-icons/si";
import { FaApple } from "react-icons/fa";


import "./Payment.css";


const Payment = () => {
  return (
 
    <div className="payment-container">
      <div className="payment-left">
        {/* Header Section */}
        <div className="header-top">
          <h2 className="logo">
            <img src="https://play-lh.googleusercontent.com/6zxEyhbtwq9pfvyG55jL3Bd3GZ-1-yE_2Hseaa5wwxasI1vPQPkPtTjDHeVBFGzlLz7Z" alt="AceCoinPay Logo" className="logo-img" />
            <span className="logo-text">AceCoin<span className="bold">Pay</span></span>
          </h2>
          <div className="timer">
            <span className="timer-box">0</span>
            <span className="timer-box">1</span>
            <span className="timer-separator">:</span>
            <span className="timer-box">1</span>
            <span className="timer-box">9</span>
          </div>
        </div>
      
        {/* Card Section */}
        <div className="card-section">
          <div className="card-header">
            <label className="card-label">Card Number</label>
            <div className="edit-option">
              <MdEdit className="edit-icon" /> <span>Edit</span>
            </div>
          </div>
          <p className="card-description">Enter the 16-digit card number on the card</p>
          {/* Card Number Section */}
          <div className="card-display">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPMEm-efiVHsW0NsLe3lZ7lixMo3vJhGhO0w&s" alt="Card Logo" className="card-logo" />
            <div className="card-number">
              <span>2412</span>
              <span>-</span>
              <span>7512</span>
              <span>-</span>
              <span>3412</span>
              <span>-</span>
              <span>3456</span>
            </div>
            <div className="edit-icon-wrapper">
              <RiVerifiedBadgeFill />
            </div>
          </div>
        </div>
        <div className="payment-form">
          {/* CVV Number */}
          <div className="cvv-container">
            <div className="cvv-label">
              <label htmlFor="cvv">CVV Number</label>
              <p className="cvv-description">Enter the 3 or 4 digit number on the card</p>
            </div>
            <div className="cvv-input-box">
              <input type="password" id="cvv" placeholder="327" maxLength="4" />
              <BsFillGrid3X3GapFill  className="cvv-icon" />
            </div>
          </div>
          {/* Expiry Date */}
          <div className="expiry-container">
            <div className="expiry-label">
              <label htmlFor="expiry">Expiry Date</label>
              <p className="expiry-description">Enter the expiration date of the card</p>
            </div>
            <div className="expiry-input-box">
              <input type="text" id="month" placeholder="09" maxLength="2" />
              <span className="expiry-separator">/</span>
              <input type="text" id="year" placeholder="22" maxLength="2" />
            </div>
          </div>

          {/*Password section */}
          <div className="password-container">
            <div className="password-label">
              <label htmlFor="password">Password</label>
              <p className="password-discription">Enter your Dynamic Password</p>
            </div>
            <div className="password-input-box">
              <input type="password" id="password" placeholder="•••••••••" maxLength="4" />
              <BsFillGrid3X3GapFill  className="password-icon" />
            </div>
          </div>
          <button className="pay-now-btn">Pay Now</button>
        </div>
      </div>
      <div className="payment-right">
        <div className="payment-box">
          <div className="payment-card">
            <div className="card-header">
              <div className="chip"></div>
              <FaWifi className="wifi-icon" />
            </div>
            <div className="card-details">
              <p className="card-holder">Jonathon Michael</p>
              <p className="card-number">**** 3456</p>
              <p className="expiry-date">09/22</p>
            </div>
            <SiMastercard className="card-logo" />
          </div>
          {/* Payment Summary */}
          <div className="payment-summary">
            <div className="summary-item">
              <span>Company</span>
              <span className="company-name">
                <FaApple className="company-icon" /> Apple
              </span>
            </div>
            <div className="summary-item">
              <span>Order Number</span>
              <span>1266201</span>
            </div>
            <div className="summary-item">
              <span>Product</span>
              <span className="bold">MacBook Air</span>
            </div>
            <div className="summary-item">
              <span>VAT (20%)</span>
              <span className="bold">$100.00</span>
            </div>
            <p className="line">---------------------------------------------</p>
            <div className="total-amount">
              <p>You have to Pay</p>
              <h2>549.99 USD</h2>
            </div>

          </div>
      
        </div>
        
         
      </div>
    </div>
  );
};
export default Payment;
