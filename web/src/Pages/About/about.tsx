import React from 'react';
import { useNavigate } from 'react-router-dom';
import './about.scss';
import HeroHeader from '../../Components/HeroHeader/HeroHeader';
import BackgroundJpg from '../../Assets/Images/news-bg.jpg';

const publications = [
  {
    title:
      'First Biennial Update Report (BUR1)of the Commonwealth of The Bahamas to the United Nations Framework Convention on Climate Change (UNFCCC)',
    date: 'December 2022',
    image: 'http://placehold.it/128x160',
    url: 'https://unfccc.int/documents/624761',
  },
];

const news = [
  {
    title:
      'Prime Minister Philip Davis Speaks on Climate Impact and Education at St. John’s University (December 12, 2023)',
    url: 'https://opm.gov.bs/prime-minister-davis-climate-impact-education-sju/',
  },
];

interface NewsItemProps {
  title: string;
  url: string;
}

const NewsItem: React.FC<NewsItemProps> = ({ title, url }) => (
  <li className="news-item">
    <span className="news-title">
      {title}
      {' - '}
      <a href={url}>{url}</a>
    </span>
  </li>
);

interface PublicationItemProps {
  title: string;
  date: string;
  image: string;
  url: string;
}

const PublicationItem: React.FC<PublicationItemProps> = ({ title, date, image, url }) => (
  <li className="publication-item">
    <img src={image} alt="" className="publication-image" />
    <div className="publication-body">
      <a href={url} target="_blank" className="publication-title">
        {title}
      </a>
      <div className="publication-date">{date}</div>
    </div>
  </li>
);

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="about-container">
      <HeroHeader title="Reports" breadcrumbs={['Reports']} backgroundImage={BackgroundJpg} />
      <div className="page-content">
        <div className="container">
          <div className="about-publications">
            <h2 className="about-section-title">Publications:</h2>
            <ul>
              {publications.map((item) => (
                <PublicationItem key={item.title} {...item} />
              ))}
            </ul>
          </div>
          <div className="about-news">
            <h2 className="about-section-title">News and Annoucements:</h2>
            <ol>
              {news.map((item) => (
                <NewsItem key={item.title} {...item} />
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
