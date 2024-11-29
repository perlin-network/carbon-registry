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
        <div className="div-container">
          <Button type="primary" onClick={() => navigate('/signUp')}>
            Management Company
          </Button>
          Sign-up as a Management Company to develop and trade carbon credits or ITMOs recognised in
          the Commonwealth of The Bahamas
        </div>
        <div className="div-container">
          <Button type="primary" onClick={() => navigate('/signupFrameView')}>
            Domestic Reporting Entity
          </Button>
          Sign-up as a Domestic Reporting Entity to report activity data relating to greenhouse gas
          emissions in the Commonwealth of The Bahamas
        </div>
      </div>
    </div>
  );
};

export default SignupSwitchView;
