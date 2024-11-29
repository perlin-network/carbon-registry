import React, { useEffect, useState } from 'react';
import { Button, Col, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import AboutUsJpg from '../../Assets/Images/home-about-us.jpg';

const SignupFrameView = () => {
  const navigate = useNavigate();
  const { i18n, t } = useTranslation(['common', 'homepage']);
  const [Visible, setVisible] = useState(true);

  const controlDownArrow = () => {
    if (window.scrollY > 150) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  };

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const handleClickScroll = () => {
    const element = document.getElementById('scrollhome');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (localStorage.getItem('i18nextLng')!.length > 2) {
      i18next.changeLanguage('en');
    }
    window.addEventListener('scroll', controlDownArrow);
    return () => {
      window.removeEventListener('scroll', controlDownArrow);
    };
  }, []);

  return (
    <iframe
      src="https://carbon-app.mtckarn7q2.com/signup"
      style={{ width: '100%', height: '100%', flex: 1, border: 'none' }}
    ></iframe>
  );
};

export default SignupFrameView;
