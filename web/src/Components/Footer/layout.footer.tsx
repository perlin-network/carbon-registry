import { useTranslation } from 'react-i18next';
// import sliderLogo from '../../Assets/Images/logo-slider.png';
// import config from '../../config';
import './layout.footer.scss';
// import { CcCircle } from 'react-bootstrap-icons';
// import { ReactComponent as LogoSvg } from '../../Assets/Images/logo-inverted.svg';
import LogoPng from '../../Assets/Images/logo.png';
import { NavLink } from 'react-router-dom';

const LayoutFooter = () => {
  const { t } = useTranslation(['common', 'homepage']);

  return (
    <footer className="homepage-footer-container">
      <div className="container">
        <div className="credits-block">
          <div className="credits">
            <img src={LogoPng} alt="National Emission Registry" />
            {/* <LogoSvg height={48} /> */}
            {/* <div>
              <div style={{ display: 'flex' }}>
                <div className="title">{'PERL.eco Carbon & Bio Assets'}</div>
                <div className="title-sub">{'REGISTRY'}</div>
              </div>
              <div className="footer-country-name">
                {config.countryName}
              </div>
            </div> */}
          </div>
          <div className="credits">
            <div>
              The Government of the Commonwealth
              <br />
              of The Bahamas
            </div>
          </div>
        </div>
        <div className="bottom-menu">
          <NavLink to="/contact">{t('homepage:contactus')}</NavLink>
          <NavLink to="/privacy">{t('homepage:privacy')}</NavLink>
          <NavLink to="/accessibilityStatement">{t('homepage:accessibilitystatement')}</NavLink>
        </div>

        {/* <Divider className="divider" /> */}
        {/* <div className="footertext">{t('homepage:footertext1')}</div> */}
        {/* <div className="footer-bottom">
          <div className="footertext-bottom">
            {config.countryName}
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
        </div> */}
      </div>
      <div className="container container-copyright">
        <div className="copyright">
          <span>© 2025 Bahamas Emissions Registry. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default LayoutFooter;
