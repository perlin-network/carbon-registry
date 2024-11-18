import React, { useEffect, useState } from 'react';
import { Button, Col, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import AboutUsJpg from '../../Assets/Images/home-about-us.jpg';
import './signupSwitchView.scss';

const SignupSwitchView = () => {
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
    <div className="page-button-container">
      <div className="button-container">
        <Button type="primary" onClick={() => navigate('/frameView')}>
          Sign Up Bio
        </Button>
        <Button type="primary" onClick={() => navigate('/signUp')}>
          Sign Up Ner
        </Button>
      </div>
    </div>
  );
};

export default SignupSwitchView;
