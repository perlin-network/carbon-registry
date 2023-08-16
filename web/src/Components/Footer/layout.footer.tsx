import { Col, Divider, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import sliderLogo from '../../Assets/Images/logo-slider.png';
import './layout.footer.scss';
import { CcCircle } from 'react-bootstrap-icons';
import { ReactComponent as LogoSvg } from '../../Assets/Images/logo-inverted.svg';

const LayoutFooter = () => {
  const { i18n, t } = useTranslation(['common', 'homepage']);

  return (
    <div className="homepage-footer-container">
      <div className="container">
        <Row>
          <Col md={24} lg={24}>
            <div className="logocontainer">
              <LogoSvg height={48} />
              {/* <div>
              <div style={{ display: 'flex' }}>
                <div className="title">{'PERL.eco Carbon & Bio Assets'}</div>
                <div className="title-sub">{'REGISTRY'}</div>
              </div>
              <div className="footer-country-name">
                {process.env.REACT_APP_COUNTRY_NAME || 'CountryX'}
              </div>
            </div> */}
            </div>
          </Col>
        </Row>
        <Divider className="divider" />
        <div className="footertext">{t('homepage:footertext1')}</div>
        <div className="footer-bottom">
          <div className="footertext-bottom">
            {process.env.REACT_APP_COUNTRY_NAME || 'CountryX'}
            <CcCircle className="cc" color="#FFFF" size="10px" />
          </div>
          <div className="footertext-link-container">
            <a href="/help" target={'blank'} className="footertext-links">
              {t('homepage:Help')}
            </a>
            <a href="https://status.perlin.net/" target={'blank'} className="footertext-links">
              {t('homepage:Status')}
            </a>
            <a href="/cookie" className="footertext-links">
              {t('homepage:Cookie')}
            </a>
            <a href="codeconduct" className="footertext-links">
              {t('homepage:codeconduct')}
            </a>
            <a href="/terms#termuse" className="footertext-links">
              {t('homepage:terms')}
            </a>
            <a href="/privacy" className="footertext-links">
              {t('homepage:privacy')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutFooter;
