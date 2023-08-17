import { Button, Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import sliderLogo from '../../Assets/Images/logo-slider.png';
import undpLogo from '../../Assets/Images/undp.webp';
import undpLogofall from '../../Assets/Images/undp.png';
import forest from '../../Assets/Images/forest.webp';
import forestfall from '../../Assets/Images/forest.png';
import resources from '../../Assets/Images/resources.webp';
import resourcesfall from '../../Assets/Images/resources.png';
import LayoutFooter from '../../Components/Footer/layout.footer';
import ImgWithFallback from '../../Components/ImgwithFallback/ImgWithFallback';
import './homepage.scss';
import { ReactComponent as LogoSvg } from '../../Assets/Images/logo.svg';
import { ReactComponent as AnalyticsDashboardSvg } from '../../Assets/Images/analytics-dashboard.svg';
import { ReactComponent as CarbonCreditCalculatorSvg } from '../../Assets/Images/carbon-credit-calculator.svg';
import { ReactComponent as SerialNumberGeneratorSvg } from '../../Assets/Images/serial-number-generator.svg';
import GenomPng from '../../Assets/Images/genom.png';
import JunglePng from '../../Assets/Images/jungle.png';

const Homepage = () => {
  const { i18n, t } = useTranslation(['common', 'homepage']);
  const navigate = useNavigate();
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
          <div className="container">
            <div className="homepage-header-container">
              {/* <div className="logo">
                    <img src={sliderLogo} alt="slider-logo" />
                  </div> */}
              {/* <div>
                    <div style={{ display: 'flex' }}>
                      <div className="title">{'PERL.eco Carbon & Bio Assets'}</div>
                      <div className="title-sub">{'REGISTRY'}</div>
                    </div>
                    <div className="country-name">
                      {process.env.REACT_APP_COUNTRY_NAME || 'CountryX'}
                    </div>
                  </div> */}
              <LogoSvg className="logo" height={48} />
              <div className="sign-in">
                <Button onClick={() => navigate('/login')}>SIGN IN</Button>
              </div>
            </div>
          </div>
          <div className="homepage-img-container image-container">
            <div className="container">
              <h1 className="text-ctn">
                <span>
                  {t('PERL.eco Carbon &')}
                  <br />
                  {t('Bio Assets registry')}
                </span>
              </h1>
              <p className="subtitle">
                <span>
                  {t('Fostering Eco-Balance: ')}
                  <br />
                  {t('Tracking Carbon, Sharing Nature')}
                </span>
              </p>
              <Row>
                {Visible && (
                  <nav className={'arrows'}>
                    <svg onClick={handleClickScroll}>
                      <path className="a1" d="M0 0 L30 32 L60 0"></path>
                      <path className="a2" d="M0 20 L30 52 L60 20"></path>
                      <path className="a3" d="M0 40 L30 72 L60 40"></path>
                    </svg>
                  </nav>
                )}
              </Row>
            </div>
          </div>
        </Col>
      </Row>
      <Row gutter={[8, 8]}>
        <Col md={24} lg={24} flex="auto">
          <div className="homepage-about-container">
            <div className="container">
              <h2 id="scrollhome" className="title">
                {t('homepage:aboutustitle')}
              </h2>
              <div className="homepagebody">
                <p className="homepage-about-us">{t('homepage:aboutusline1')}</p>
                <h3 className="homepage-feature-title">{t('homepage:Keyfeatures')}</h3>

                <div className="homepage-features-container">
                  <Row
                    gutter={{ xs: 0, md: 16, lg: 40 }}
                    align="stretch"
                    className="aboutus_card-row"
                  >
                    <Col xxl={8} xl={8} md={8} className="aboutus_card-col">
                      <div className="aboutus-card-main-container">
                        <Col>
                          <Row className="aboutus_card-row">
                            <AnalyticsDashboardSvg height={92} />
                          </Row>
                          <Row className="aboutus_card-row">
                            <div className="aboutus-card-title">{t('homepage:analytic')}</div>
                          </Row>
                          <Row>
                            <div className="aboutus-card-text">{t('homepage:analyticbody')}</div>
                          </Row>
                        </Col>
                      </div>
                    </Col>
                    <Col xxl={8} xl={8} md={8} className="aboutus_card-col">
                      <div className="aboutus-card-main-container">
                        <Col>
                          <Row className="aboutus_card-row">
                            <CarbonCreditCalculatorSvg height={92} />
                          </Row>
                          <Row className="aboutus_card-row">
                            <div className="aboutus-card-title">{t('homepage:carboncal')}</div>
                          </Row>
                          <Row>
                            <div className="aboutus-card-text">{t('homepage:carboncalbody')}</div>
                          </Row>
                        </Col>
                      </div>
                    </Col>
                    <Col xxl={8} xl={8} md={8} className="aboutus_card-col">
                      <div className="aboutus-card-main-container">
                        <Col>
                          <Row className="aboutus_card-row">
                            <SerialNumberGeneratorSvg height={92} />
                          </Row>
                          <Row className="aboutus_card-row">
                            <div className="aboutus-card-title">{t('homepage:serialgen')}</div>
                          </Row>
                          <Row>
                            <div className="aboutus-card-text">{t('homepage:serialgenbody')}</div>
                          </Row>
                        </Col>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row gutter={[8, 8]}>
        <Col md={24} lg={24} flex="auto">
          <div className="homepage-list-section-container">
            <div className="container">
              <Row gutter={24}>
                <Col md={24} lg={12}>
                  <h3 className="title">{t('homepage:eligibility')}</h3>
                  {/* <div className="homepagebody"> */}
                  {/* {t('homepage:eligibilitybody')} */}
                  <ul>
                    <li>{t('homepage:eliglist1')}</li>
                    <li>{t('homepage:eliglist2')}</li>
                    <li>{t('homepage:eliglist3')}</li>
                    <li>{t('homepage:eliglist4')}</li>
                  </ul>
                  {/* </div> */}
                </Col>
                <Col md={24} lg={12}>
                  <img className="genom-image" src={GenomPng} alt="genom" />
                  {/* <ImgWithFallback
                   className="forest-image"
                   src={forest}
                   fallbackSrc={forestfall}
                   mediaType="image/webp"
                   alt="forestry"
                /> */}
                  {/* <img className="image" src={forest} alt="forest" /> */}
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
      <Row gutter={[8, 8]}>
        <Col md={24} lg={24} flex="auto">
          <div className="homepage-list-section-container">
            <div className="container">
              <Row gutter={24}>
                <Col md={{ span: 24, order: 2 }} lg={{ span: 12, order: 1 }}>
                  <img className="jungle-image" src={JunglePng} alt="jungle" />
                  {/* <ImgWithFallback
                  className="image"
                  src={resources}
                  fallbackSrc={resourcesfall}
                  mediaType="image/webp"
                  alt="resources"
                /> */}
                  {/* <img className="image" src={resources} alt="resources" /> */}
                </Col>
                <Col md={{ span: 24, order: 1 }} lg={{ span: 12, order: 2 }}>
                  <h3 className="title">{t('homepage:resource')}</h3>
                  {/* <div className="homepagebody"> */}
                  <ul>
                    <li>{t('homepage:reslist1')}</li>
                    <li>{t('homepage:reslist2')}</li>
                  </ul>
                  {/* </div> */}
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
      <LayoutFooter />
    </div>
  );
};

export default Homepage;
