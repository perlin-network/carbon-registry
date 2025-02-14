import React from 'react';
import { useNavigate } from 'react-router-dom';
import './incentives.scss';
import HeroHeader from '../../Components/HeroHeader/HeroHeader';
import BackgroundJpg from '../../Assets/Images/news-bg.jpg';

const incentives: any[] = [];

interface IncentiveItemProps {
  title: string;
  date: string;
  image: string;
}

const IncentiveItem: React.FC<IncentiveItemProps> = ({ title, date, image }) => (
  <li className="item">
    <img src={image} alt="" className="item-image" />
    <div className="item-body">
      <a href="#" className="item-title">
        {title}
      </a>
      <div className="item-date">{date}</div>
    </div>
  </li>
);

const Incentives = () => {
  const navigate = useNavigate();

  return (
    <div className="incentive-container">
      <HeroHeader
        title="Incentives/Initiatives"
        breadcrumbs={['Incentives/Initiatives']}
        backgroundImage={BackgroundJpg}
      />
      <div className="page-content">
        <div className="container">
          <p>
            The Prime Minister may create and implement incentives and initiatives to promote
            decarbonization and lower greenhouse gas emissions.
          </p>
          <div className="incentives-section">
            <h2 className="incentive-section-title">2025 Incentives</h2>
            <ul>
              {incentives.map((item) => (
                <IncentiveItem key={item.title} {...item} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Incentives;
