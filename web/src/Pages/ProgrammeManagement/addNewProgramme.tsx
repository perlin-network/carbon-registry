import './addNewProgramme.scss';
import { useEffect, useState } from 'react';
import { Form, Row, Col, Input, InputNumber, DatePicker, Select, Button, message } from 'antd';
// import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useConnection } from '../../Context/ConnectionContext/connectionContext';

const proponentTaxVatIdOptions = [
  {
    label: 'Option #1',
    value: '1',
  },
  {
    label: 'Option #2',
    value: '2',
  },
  {
    label: 'Option #3',
    value: '3',
  },
];

const proponentPercentageOptions = [
  {
    label: '10%',
    value: 10,
  },
  {
    label: '50%',
    value: 50,
  },
  {
    label: '100%',
    value: 100,
  },
];

const geographicalLocationOptions = [
  {
    label: 'Option #1',
    value: '1',
  },
  {
    label: 'Option #2',
    value: '2',
  },
  {
    label: 'Option #3',
    value: '3',
  },
];

const greenHouseGassesOptions = [
  {
    label: '10%',
    value: 10,
  },
  {
    label: '50%',
    value: 50,
  },
  {
    label: '100%',
    value: 100,
  },
];

const AddNewProgramme = () => {
  // const navigate = useNavigate();
  const { t } = useTranslation(['addProgramme']);
  const { post } = useConnection();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: any) => {
    console.log(values);

    const requestData = {
      ...values,
      startDate: values.startDate.format('YYYY-MM-DDT00:00:00'),
      endDate: values.endDate.format('YYYY-MM-DDT00:00:00'),
    };
    console.log(requestData);

    setLoading(true);
    try {
      // const response = await post('national/programme/create', requestData);
      // if (response.status === 200 || response.status === 201) {
      //   setLoading(false);
      // }
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
                <Input size="large" />
              </Form.Item>
              <Row className="row" gutter={[16, 16]}>
                <Col xl={12} md={24}>
                  <Form.Item name="startDate" label="Start Date" rules={[{ required: true }]}>
                    <DatePicker format="DD MMM YYYY" style={{ width: '100%' }} />
                  </Form.Item>
                </Col>
                <Col xl={12} md={24}>
                  <Form.Item name="endDate" label="End Date" rules={[{ required: true }]}>
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
                <InputNumber size="large" />
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
                <Input size="large" />
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
                <Input size="large" />
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
