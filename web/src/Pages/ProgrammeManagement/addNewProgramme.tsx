import './addNewProgramme.scss';
import { useEffect, useState } from 'react';
import { Row, Col, Input } from 'antd';
// import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const AddNewProgramme = () => {
  // const navigate = useNavigate();
  const { t } = useTranslation(['addProgramme']);

  return (
    <div className="content-container programme-management">
      <div className="title-bar">
        <div className="body-title">{t('addProgramme:title')}</div>
        <div className="body-sub-title">{t('addProgramme:desc')}</div>
      </div>
      <div className="content-card"></div>
    </div>
  );
};

export default AddNewProgramme;
