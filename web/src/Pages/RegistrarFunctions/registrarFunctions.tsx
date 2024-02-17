import React from 'react';
import './registrarFunctions.scss';
import HeroHeader from '../../Components/HeroHeader/HeroHeader';
import BackgroundJpg from '../../Assets/Images/registrar-bg.jpg';
import Illustration1 from '../../Assets/Images/registrar-01.jpg';
import Illustration2 from '../../Assets/Images/registrar-02.jpg';

const RegistrarFunctions = () => {
  return (
    <div className="registrar-container">
      <HeroHeader
        title="Functions of the Registrar"
        breadcrumbs={['Functions of the Registrar']}
        backgroundImage={BackgroundJpg}
      />
      <div className="page-content">
        <div className="container">
          <div className="section-row">
            <div className="section-column">
              <h2>Functions of the registrar</h2>
              <p>The Registrar shall cause to be maintained a register of:</p>
              <ul className="check-list">
                <li>The initiatives implemented to reduce GHG emissions in The Bahamas;</li>
                <li>The permits granted to participate in an initiative under this Act;</li>
                <li>The emission allowance and the GHG reduction units;</li>
                <li>The number of carbon credits issued or recognized by The Bahamas;</li>
                <li>
                  The number of carbon credits issued to promoters of emission reduction projects
                  and programs;
                </li>
                <li>
                  The issuance of emission allocations carbon credits and any carbon credits issued
                  or recognized by The Bahamas from a national GHG registry account;
                </li>
                <li>
                  The transfer of emission allocations, carbon credits and any carbon credits issued
                  or recognized by The Bahamas from a national GHG registry account;
                </li>
                <li>
                  The cancellation of emission allocations, carbon credits and any other carbon
                  credits issued or recognized by the The Bahamas from a national GHG registry
                  account
                </li>
                <li>
                  The addition of emission allocations, carbon credits and any other carbon credits
                  issued or recognized by The Bahamas from a national GHG registry account.
                </li>
              </ul>
            </div>
            <div className="section-column">
              <img src={Illustration1} alt="" />
            </div>
          </div>
          <div className="section-row">
            <div className="section-column">
              <img src={Illustration2} alt="" />
            </div>
            <div className="section-column">
              <p>
                The addition of emission allocations, carbon credits and any other carbon credits
                issued or recognized by The Bahamas from a national GHG registry account.
              </p>
              <h3>The Registrar shall</h3>
              <ul className="check-list">
                <li>The initiatives implemented to reduce GHG emissions in The Bahamas;</li>
                <li>
                  Comply with any obligations as is required of the Registrar in accordance with the
                  Paris Agreement.
                </li>
                <li>
                  Implement measures to ensure the confidentiality of the information it collects
                </li>
                <li>
                  Submit to the Minister of the Environment periodically or as may be requested by
                  the Minister, a report of the information maintained in accordance with subsection
                  (1).
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrarFunctions;
