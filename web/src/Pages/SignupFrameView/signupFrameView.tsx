import { useEffect, useRef, useState } from 'react';
import './signupFrameView.scss';
import config from '../../config';
const signupIframeUrl = config.iframurl + '/signup';
const SignupFrameView = () => {
  return (
    <div
      className="sign-up"
      style={{
        height: '100%',
        margin: 0,
        overflow: 'hidden',
      }}
    >
      <div
        className="container"
        style={{
          minHeight: '100%',
          overflow: 'hidden',
        }}
      >
        <iframe
          src={signupIframeUrl}
          style={{
            width: '100%',
            height: '1300px',
            border: 'none',
            overflow: 'hidden',
          }}
          scrolling="no" // Moved outside of style object
        ></iframe>
      </div>
    </div>
  );
};
export default SignupFrameView;
