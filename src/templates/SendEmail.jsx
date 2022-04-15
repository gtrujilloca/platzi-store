import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@logos/logo_yard_sale.svg';
import email from '@icons/email.svg';
import '@styles/SendEmail.scss';

const SendEmail = () => {
  return (
    <div className="SendEmail">
      <div className="form-container">
        <Image height="100%" width="100%" layout="responsive" src={logo} alt="logo" className="logo" />
        <h1 className="title">Email has been sent!</h1>
        <p className="subtitle">Please check your inbox for instructions on how to reset the password</p>
        <div className="email-image">
          <Image height="100%" width="100%" layout="responsive" src={email} alt="email" />
        </div>
        <button className="primary-button login-button">Login</button>
        <p className="resend">
          <span>Didn't receive the email?</span>
          <Link href="/">Resend</Link>
        </p>
      </div>
    </div>
  );
};

export default SendEmail;
