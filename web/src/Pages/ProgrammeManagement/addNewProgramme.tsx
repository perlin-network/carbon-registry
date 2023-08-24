import './addNewProgramme.scss';
import { useState } from 'react';
import { Form, Row, Col, Input, InputNumber, DatePicker, Select, Button, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useConnection } from '../../Context/ConnectionContext/connectionContext';

const sectorOptions = [
  { label: 'Energy', value: 'Energy' },
  { label: 'Health', value: 'Health' },
  { label: 'Education', value: 'Education' },
  { label: 'Transport', value: 'Transport' },
  { label: 'Manufacturing', value: 'Manufacturing' },
  { label: 'Hospitality', value: 'Hospitality' },
  { label: 'Forestry', value: 'Forestry' },
  { label: 'Waste', value: 'Waste' },
  { label: 'Agriculture', value: 'Agriculture' },
  { label: 'Other', value: 'Other' },
];
const proponentTaxVatIdOptions = [{ label: 'TAXID003', value: 'TAXID003' }];
const proponentPercentageOptions = [{ label: '100%', value: 100 }];
const geographicalLocationOptions = [
  {
    label: 'Abuja,FCT',
    value: 'Abuja,FCT',
  },
];
const sourceOfFundingOptions = [
  {
    label: 'Board Source Funding',
    value: 'BoardSourceFunding',
  },
  {
    label: 'Government Grant or Loan',
    value: 'GovernmentGrantOrLoan',
  },
  {
    label: 'Other',
    value: 'Other',
  },
];
const greenHouseGassesOptions = [
  { label: 'CO2', value: 'CO2' },
  { label: 'CH4', value: 'CH4' },
  { label: 'N2O', value: 'N2O' },
  { label: 'HFCs', value: 'HFCs' },
  { label: 'PFCs', value: 'PFCs' },
  { label: 'SF6', value: 'SF6' },
];
const typeOfMitigationOptions = [
  { label: 'Agriculture', value: 'Agriculture' },
  { label: 'Biomass Energy', value: 'BiomassEnergy' },
  { label: 'CCS', value: 'CCS' },
  { label: 'Cement', value: 'Cement' },
  { label: 'Coal/Mine', value: 'Coal/Mine' },
  { label: 'EEHouseholds', value: 'EEHouseholds' },
  { label: 'EEIndustry', value: 'EEIndustry' },
  { label: 'EEOwnGeneration', value: 'EEOwnGeneration' },
  { label: 'EEService', value: 'EEService' },
  { label: 'EESupplySide', value: 'EESupplySide' },
  { label: 'Energy Distribution', value: 'EnergyDistribution' },
  { label: 'Forestry', value: 'Forestry' },
  { label: 'FossilFuel', value: 'FossilFuel' },
  { label: 'Fugitive', value: 'Fugitive' },
  { label: 'Geothermal', value: 'Geothermal' },
  { label: 'HFC_PFCs_SF6', value: 'HFC_PFCs_SF6' },
  { label: 'Hydro', value: 'Hydro' },
  { label: 'Landfills', value: 'Landfills' },
  { label: 'Marine', value: 'Marine' },
  { label: 'Methane Avoidance', value: 'MethaneAvoidance' },
  { label: 'N20', value: 'N20' },
  { label: 'Solar', value: 'Solar' },
  { label: 'Transport', value: 'Transport' },
  { label: 'Wind', value: 'Wind' },
];

const AddNewProgramme = () => {
  const navigate = useNavigate();
  const { t } = useTranslation(['addProgramme']);
  const { post } = useConnection();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: any) => {
    const {
      title,
      externalId,
      sectoralScope,
      sector,
      startTime,
      endTime,
      proponentTaxVatId,
      proponentPercentage,
      maxInternationalTransferAmount,
      creditingPeriodInYears,
      estimatedProgrammeCostUSD,
      sourceOfFunding,
      grantEquivalentAmount,
      carbonPriceUSDPerTon,
      buyerCountryEligibility,
      geographicalLocation,
      greenHouseGasses,
      typeOfMitigation,
      userEstimatedCredits,
      systemEstimatedCredits,
      actionId,
      constantVersion,
      creditEst,
      creditIssued,
    } = values;

    const requestData = {
      title,
      externalId,
      sectoralScope,
      sector,
      startTime: startTime.valueOf(),
      endTime: endTime.valueOf(),
      proponentTaxVatId,
      proponentPercentage,
      programmeProperties: {
        maxInternationalTransferAmount,
        creditingPeriodInYears,
        estimatedProgrammeCostUSD,
        sourceOfFunding,
        grantEquivalentAmount,
        carbonPriceUSDPerTon,
        buyerCountryEligibility,
        geographicalLocation,
        greenHouseGasses,
      },
      mitigationActions: [
        {
          typeOfMitigation,
          userEstimatedCredits,
          systemEstimatedCredits,
          actionId,
          constantVersion,
        },
      ],
      creditEst,
      creditIssued,
    };
    //console.log(requestData);
    //console.log(new Date(requestData.startTime * 1000).getFullYear());

    setLoading(true);
    try {
      const response = await post('national/programme/create', requestData);
      if (response.status === 200 || response.status === 201) {
        setLoading(false);
        navigate('/programmeManagement/viewAll');
      }
    } catch (error: any) {
      message.open({
        type: 'error',
        content: `${error.message}`,
        duration: 3,
        style: { textAlign: 'right', marginRight: 15, marginTop: 10 },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="content-container add-programme-container">
      <div className="title-bar">
        <div className="body-title">{t('addProgramme:title')}</div>
        <div className="body-sub-title">{t('addProgramme:desc')}</div>
      </div>
      <div className="content-card">
        <Form
          name="add-programme"
          className="add-programme-form"
          layout="vertical"
          requiredMark={true}
          form={form}
          onFinish={onFinish}
        >
          <Row className="row" gutter={[16, 16]}>
            <Col xl={12} md={24}>
              <Form.Item name="title" label="Title" rules={[{ required: true }]}>
                <Input size="large" />
              </Form.Item>
              <Form.Item name="externalId" label="External ID" rules={[{ required: true }]}>
                <Input size="large" />
              </Form.Item>
              <Form.Item name="sectoralScope" label="Sectoral Scope" rules={[{ required: true }]}>
                <Input size="large" />
              </Form.Item>
              <Form.Item name="sector" label="Sector" rules={[{ required: true }]}>
                <Select size="large" options={sectorOptions} style={{ width: '100%' }} />
              </Form.Item>
              <Row className="row" gutter={[16, 16]}>
                <Col xl={12} md={24}>
                  <Form.Item name="startTime" label="Start Time" rules={[{ required: true }]}>
                    <DatePicker format="DD MMM YYYY" style={{ width: '100%' }} />
                  </Form.Item>
                </Col>
                <Col xl={12} md={24}>
                  <Form.Item name="endTime" label="End Time" rules={[{ required: true }]}>
                    <DatePicker format="DD MMM YYYY" style={{ width: '100%' }} />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item
                name="proponentTaxVatId"
                label="Proponent Tax VAT ID"
                rules={[{ required: true }]}
              >
                <Select
                  mode="multiple"
                  size="large"
                  options={proponentTaxVatIdOptions}
                  style={{ width: '100%' }}
                />
              </Form.Item>
              <Form.Item
                name="proponentPercentage"
                label="Proponent Percentage"
                rules={[{ required: true }]}
              >
                <Select
                  mode="multiple"
                  size="large"
                  options={proponentPercentageOptions}
                  style={{ width: '100%' }}
                />
              </Form.Item>
              <Form.Item
                name="maxInternationalTransferAmount"
                label="Max International Transfer Amount"
                rules={[{ required: true }]}
              >
                <Input size="large" />
              </Form.Item>
              <Form.Item
                name="creditingPeriodInYears"
                label="Crediting Period, in years"
                rules={[{ required: true }]}
              >
                <InputNumber size="large" />
              </Form.Item>
              <Form.Item
                name="estimatedProgrammeCostUSD"
                label="Estimated Programme Cost, USD"
                rules={[{ required: true }]}
              >
                <InputNumber size="large" />
              </Form.Item>
              <Form.Item
                name="sourceOfFunding"
                label="Source of Funding"
                rules={[{ required: true }]}
              >
                <Select size="large" options={sourceOfFundingOptions} style={{ width: '100%' }} />
              </Form.Item>
              <Form.Item
                name="grantEquivalentAmount"
                label="Grant Equivalent Amount"
                rules={[{ required: true }]}
              >
                <InputNumber size="large" />
              </Form.Item>
              <Form.Item
                name="carbonPriceUSDPerTon"
                label="Carbon Price, USD per ton"
                rules={[{ required: true }]}
              >
                <InputNumber size="large" />
              </Form.Item>
              <Form.Item
                name="buyerCountryEligibility"
                label="Buyer Country Eligibility"
                rules={[{ required: true }]}
              >
                <Input size="large" />
              </Form.Item>
              <Form.Item
                name="geographicalLocation"
                label="Geographical Location"
                rules={[{ required: true }]}
              >
                <Select
                  mode="multiple"
                  size="large"
                  options={geographicalLocationOptions}
                  style={{ width: '100%' }}
                />
              </Form.Item>
              <Form.Item
                name="greenHouseGasses"
                label="Green House Gasses"
                rules={[{ required: true }]}
              >
                <Select
                  mode="multiple"
                  size="large"
                  options={greenHouseGassesOptions}
                  style={{ width: '100%' }}
                />
              </Form.Item>
              <Form.Item
                name="typeOfMitigation"
                label="Type of Mitigation"
                rules={[{ required: true }]}
              >
                <Select size="large" options={typeOfMitigationOptions} style={{ width: '100%' }} />
              </Form.Item>
              <Form.Item
                name="userEstimatedCredits"
                label="User Estimated Credits"
                rules={[{ required: true }]}
              >
                <InputNumber size="large" />
              </Form.Item>
              <Form.Item
                name="systemEstimatedCredits"
                label="System Estimated Credits"
                rules={[{ required: true }]}
              >
                <InputNumber size="large" />
              </Form.Item>
              <Form.Item name="actionId" label="Action ID" rules={[{ required: true }]}>
                <Input size="large" />
              </Form.Item>
              <Form.Item
                name="constantVersion"
                label="Constant Version"
                rules={[{ required: true }]}
              >
                <Input size="large" />
              </Form.Item>
              <Form.Item name="creditEst" label="Credit Est" rules={[{ required: true }]}>
                <InputNumber size="large" />
              </Form.Item>
              <Form.Item name="creditIssued" label="Credit Issued" rules={[{ required: false }]}>
                <InputNumber size="large" />
              </Form.Item>
            </Col>
          </Row>
          <Row justify="end">
            <Button type="primary" htmlType="submit" loading={loading}>
              SUBMIT
            </Button>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default AddNewProgramme;
