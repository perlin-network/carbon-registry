import React from 'react';
import './UnderMaintenance.scss';

const UnderMaintenance: React.FC = () => {
  return (
    <div className="under-maintenance">
      <div className="content">
        <div className="icon">🛠️</div>
        <h1>We're Under Maintenance</h1>
        <p>
          We apologize for the inconvenience. Our site is currently undergoing maintenance to
          improve your experience.
        </p>
        <p>Please check back later.</p>
      </div>
    </div>
  );
};

export default UnderMaintenance;
