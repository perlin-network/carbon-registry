import React, { useEffect, useState } from 'react';
import { Button, Col, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
// import ImgWithFallback from '../../Components/ImgwithFallback/ImgWithFallback';
import './homepage.scss';
// import config from '../../config';
import AboutUsJpg from '../../Assets/Images/home-about-us.jpg';

const Homepage = () => {
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
    <div className="homepage-container">
      <Row>
        <Col md={24} lg={24} flex="auto">
          <div className="homepage-img-container image-container">
            <div className="container">
              <div className="homepage-hero-content">
                <div className="homepage-hero-inner">
                  <h1 className="homepage-hero-title">
                    {t('The Bahamas National Emission Registry')}
                  </h1>
                  <p className="homepage-hero-subtitle">
                    {t(
                      'Welcome to the official website of the National Emission Registry of The Bahamas. The Registry tracks and records the issuance and transfer of carbon credits and International Transfer of Mitigation Outcomes (ITMOs) recognised by and/or issued by the Commonwealth of The Bahamas.'
                    )}
                  </p>
                  <p className="homepage-hero-subtitle">
                    {t(
                      'The Registry also records individuals, programmes, and activities involved in greenhouse gas management in The Bahamas.'
                    )}
                  </p>
                  <Button
                    className="homepage-hero-button"
                    type="primary"
                    onClick={() => navigate('/signinSwitchView')}
                  >
                    Sign In
                  </Button>
                </div>
              </div>
              {Visible && (
                <nav className={'arrows'}>
                  <svg onClick={handleClickScroll}>
                    <path className="a1" d="M0 0 L30 32 L60 0"></path>
                    <path className="a2" d="M0 20 L30 52 L60 20"></path>
                    <path className="a3" d="M0 40 L30 72 L60 40"></path>
                  </svg>
                </nav>
              )}
            </div>
          </div>
        </Col>
      </Row>
      <div className="homepage-about-container">
        <div className="container">
          <div className="section-row">
            <div className="section-column">
              <h2 id="scrollhome" className="title">
                {t('homepage:aboutustitle')}
              </h2>
              <div className="homepagebody">
                <p>
                  The National Emissions Registry of the Commonwealth of The Bahamas was established
                  under Section VII of the{' '}
                  <a target="_blank" href="https://faolex.fao.org/docs/pdf/bha211771.pdf">
                    Climate Change and Carbon Market Initiatives Act 2022.
                  </a>{' '}
                </p>
                <p>The National Emissions Registry is mandated by law to:</p>
                <ul className="check-list">
                  <li>Manage, report, and track Greenhouse gas emissions within the country</li>
                  <li>Issue Greenhouse gas emission allocations</li>
                  <li>
                    Develop Greenhouse gas emission reduction initiatives and incentives for The
                    Bahamas.
                  </li>
                </ul>
              </div>
            </div>
            <div className="section-column">
              <img src={AboutUsJpg} alt="About us" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
