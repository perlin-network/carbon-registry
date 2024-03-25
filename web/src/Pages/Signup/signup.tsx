import './signUp.scss';
import { Button, Form, Input, Row, Col, Checkbox, Radio, Space, Select } from 'antd';
import { useNavigate } from 'react-router-dom';
import UploadArea from './uploadArea';

const gutter = 24;

const SignUp = () => {
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div className="sign-up">
      <div className="container">
        <h2 className="title">Please Provide Valid Information</h2>
        <div className="form-container">
          <Form name="sign-up" layout="vertical" onFinish={onFinish}>
            <Row gutter={gutter}>
              <Col xs={24} md={12}>
                <Form.Item label="Name of Company" name="companyName">
                  <Input placeholder="Enter your company name" />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item label="Type of Company" name="companyType">
                  <Select placeholder="Enter company type">
                    <Select.Option value="Management Company">Management Company</Select.Option>
                    <Select.Option value="National Reporting Entity">
                      National Reporting Entity
                    </Select.Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={gutter}>
              <Col xs={24} md={12}>
                <Form.Item label="Company Website" name="companyWebsite">
                  <Input placeholder="Enter company website" />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item label="Company Address" name="companyAddress">
                  <Input placeholder="Enter company address" />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              label="Is this the Main Correspondence Address?"
              name="isMainAddress"
              initialValue={'true'}
            >
              <Row>
                <Radio.Group defaultValue={'true'}>
                  <Radio value={'true'}>Yes</Radio>
                  <Radio value={'false'}>No</Radio>
                </Radio.Group>
              </Row>
            </Form.Item>
            <Form.Item label="If/no Main Correspondence Address" name="correspondenceAddress">
              <Input placeholder="Enter correspondence address" />
            </Form.Item>

            <h3 className="group-title">Company Representatives:</h3>

            <Row gutter={gutter}>
              <Col xs={24} md={12}>
                <Form.Item label="Primary Representative Name" name="primaryRepresentativeName">
                  <Input placeholder="Enter primary representative name" />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item label="Primary Representative Email" name="primaryRepresentativeEmail">
                  <Input placeholder="Enter primary representative email" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={gutter}>
              <Col xs={24} md={12}>
                <Form.Item label="Secondary Representative Name" name="secondaryRepresentativeName">
                  <Input placeholder="Enter secondary representative name" />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item
                  label="Secondary Representative Email"
                  name="secondaryRepresentativeEmail"
                >
                  <Input placeholder="Enter secondary representative email" />
                </Form.Item>
              </Col>
            </Row>

            <Space direction="vertical" size="middle">
              <Form.Item name="managementCompany" valuePropName="checked" noStyle>
                <Checkbox>Application to be Management Company</Checkbox>
              </Form.Item>
              <Form.Item name="carbonCreditPurchaser" valuePropName="checked">
                <Checkbox>Application to be Carbon Credit Purchaser</Checkbox>
              </Form.Item>
            </Space>

            <Form.Item label="Write Summary" name="summary">
              <Input.TextArea
                placeholder="Please Provide a 1,000 word summary of your company..."
                rows={6}
                maxLength={1000}
                showCount
              />
            </Form.Item>

            <h3 className="group-title">Upload Following Documents:</h3>

            <Row gutter={gutter}>
              <Col xs={24} md={12}>
                <Form.Item label="Evidence of Registration with Securities Commission" name="file1">
                  <UploadArea name="file1" />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item label="Copy of Business License" name="file2">
                  <UploadArea name="file2" />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item label="Proof of Financial Integrity" name="file3">
                  <UploadArea name="file3" />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item label="Dossier of Management Company" name="file4">
                  <UploadArea name="file4" />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item label="Proof of Scientific Experience" name="file5">
                  <UploadArea name="file5" />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item label="Proof of Financial Expertise" name="file6">
                  <UploadArea name="file6" />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item label="Proof of Environmental Expertise" name="file7">
                  <UploadArea name="file7" />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item className="action-buttons">
              <Space direction="horizontal" size="middle">
                <Button onClick={() => navigate('/')}>Cancel</Button>
                <Button type="primary" htmlType="submit">
                  Sign Up
                </Button>
              </Space>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
