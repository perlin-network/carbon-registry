import React from 'react';
import { useNavigate } from 'react-router-dom';
import './nationallyDeterminedContributions.scss';
import ImageJpg from '../../Assets/Images/bahamas-ndc.jpg';
import HeroHeader from '../../Components/HeroHeader/HeroHeader';
import BackgroundJpg from '../../Assets/Images/ndc-bg.jpg';

const NationallyDeterminedContributions = () => {
  const navigate = useNavigate();

  return (
    <div className="ndc-container">
      <HeroHeader
        title="Nationally Determined Contributions"
        breadcrumbs={['Nationally Determined Contributions']}
        backgroundImage={BackgroundJpg}
      />
      <div className="page-content">
        <div className="container">
          <div className="section-row">
            <div className="section-column">
              <h2 className="title">About Nationally Determined Contributions</h2>
              <div className="content-body">
                <p>
                  Nationally determined contributions (NDCs) are at the heart of the Paris Agreement
                  and the achievement of its long-term goals. NDCs embody efforts by each country to
                  reduce national emissions and adapt to the impacts of climate change. The{' '}
                  <a href="#">Paris Agreement</a> (Article 4, paragraph 2) requires each Party to
                  prepare, communicate and maintain successive nationally determined contributions
                  (NDCs) that it intends to achieve. Parties shall pursue domestic mitigation
                  measures, with the aim of achieving the objectives of such contributions.
                </p>
                <p>
                  Full Details of the Bahamas NDCs can be found <a href="#">here</a>.
                </p>
              </div>
            </div>
            <div className="section-column">
              <img src={ImageJpg} alt="Bahamas NDC" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NationallyDeterminedContributions;
