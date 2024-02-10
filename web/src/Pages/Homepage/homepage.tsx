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
                      "Welcome to The Bahamas' National Emission Registry, the official platform for carbon credits international mitigation outcomes, and emission reduction transfers of The Commonwealth of the Bahamas."
                    )}
                  </p>
                  <Button
                    className="homepage-hero-button"
                    type="primary"
                    onClick={() => navigate('/login')}
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
                  The National Emission Registry of The Commonwealth of the Bahamas was established
                  under Section VII of the{' '}
                  <a href="#">Climate Change and Carbon Market Initiatives Act 2022</a> (Carbon
                  Trading Act) to meet the Bahamas obligations under the Paris Climate Agreement.
                </p>
                <p>The Act provides for the Establishment of National Emission Registry:</p>
                <ul>
                  <li>
                    A national registry shall be established for the purposes of this Act
                    (hereinafter referred to as “the National Emission Registry”).
                  </li>
                  <li>
                    The Prime Minister shall appoint a registrar who shall have the responsibility
                    for the day-to-day management of the Registry.
                  </li>
                  <li>
                    The National Emission Registry shall be appointed as the Designated Operating
                    Entity under Article 6 of the Paris Agreement.
                  </li>
                  <li>
                    The Registrar shall be assisted by such numbers of persons as the Minister may
                    appoint.
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
