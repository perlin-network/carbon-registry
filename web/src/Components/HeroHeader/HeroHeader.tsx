import React from 'react';
import './HeroHeader.scss';
import Breadcrumbs from '../../Components/Breadcrumbs/Breadcrumbs';

interface HeroHeaderProps {
  title?: string;
  backgroundImage?: string;
  breadcrumbs?: string[];
}

const HeroHeader: React.FC<HeroHeaderProps> = ({ title, backgroundImage, breadcrumbs }) => (
  <div
    className="hero-container"
    style={{
      backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%),
  url(${backgroundImage})`,
    }}
  >
    <div className="container">
      <div className="hero-inner">
        <h1 className="hero-title">{title}</h1>
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
      </div>
    </div>
  </div>
);

export default HeroHeader;
