import { Button, Form, Input, /*message, Row, Col, Select,*/ Spin, Checkbox } from 'antd';
import React, { FC, Suspense, useContext, useEffect, useState } from 'react';
import { useConnection } from '../../Context/ConnectionContext/connectionContext';
import './login.scss';
// import countryLogo from '../../Assets/Images/logo-slider.png';
// import LogoSvg from '../../Assets/Images/logo.svg';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { useUserContext } from '../../Context/UserInformationContext/userInformationContext';
import { LoginProps } from '../../Definitions/InterfacesAndType/userLogin.definitions';
import { useLocation, useNavigate } from 'react-router-dom';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { AbilityContext } from '../../Casl/Can';
import { updateUserAbility } from '../../Casl/ability';
import ForgotPassword from './forgotPassword';
import ResetPassword from './resetPassword';
// import config from '../../config';

export interface LoginPageProps {
  forgotPassword?: boolean;
  resetPassword?: boolean;
}

const Login: FC<LoginPageProps> = (props: LoginPageProps) => {
  const { forgotPassword, resetPassword } = props;
  const { post, updateToken, removeToken } = useConnection();
  const { IsAuthenticated, setUserInfo, isTokenExpired, setIsTokenExpired } = useUserContext();
  const { t } = useTranslation(['common', 'login']);
  const [loading, setLoading] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>();
  const navigate = useNavigate();
  const ability = useContext(AbilityContext);
  const { state } = useLocation();

  // const handleLanguageChange = (lang: string) => {
  //   i18n.changeLanguage(lang);
  // };

  const onSubmit = async (values: LoginProps) => {
    const redirectLocation = state?.from?.pathname + state?.from?.search;
    setLoading(true);
    setShowError(false);
    setErrorMsg(undefined);
    try {
      const email = values.email.trim();
      const response = await post('national/auth/login', {
        username: email.trim(),
        password: values.password.trim(),
      });

      updateUserAbility(ability, {
        id: response.data.id,
        role: response.data.role,
        companyId: response.data.companyId,
        companyState: response.data.companyState,
        companyRole: response.data.companyRole,
      });

      if (response.status === 200 || response.status === 201) {
        if (showError) setShowError(false);
        updateToken(response.data.access_token);
        setUserInfo({
          id: response.data.id,
          userRole: response.data.role,
          companyId: response.data.companyId,
          companyRole: response.data.companyRole,
          companyLogo: response.data.companyLogo,
          companyName: response.data.companyName,
          companyState: response.data.companyState,
        });
        removeToken();
        setIsTokenExpired(false);
        return IsAuthenticated(response.data.access_token)
          ? navigate(redirectLocation ? redirectLocation : '/dashboard', { replace: true })
          : navigate('/login');
      }
    } catch (error: any) {
      console.log('Error in Login', error);
      setErrorMsg(error?.message);
      setShowError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (localStorage.getItem('i18nextLng')!.length > 2) {
      i18next.changeLanguage('en');
    }
  }, []);

  const onRememberMeChange = (e: any) => {
    console.log(`remember me: ${e.target.checked}`);
  };

  const onClickForgotPassword = () => {
    navigate('/forgotPassword', { replace: true });
  };

  return (
    <Suspense fallback={<Spin />}>
      <div className="login-container">
        <div className="login-form">
          {/* <div className="login-country-name">
            <div className="title">
              {'CARBON'}
              <span className="title-sub">{'REGISTRY'}</span>
            </div>

            <span className="country-name">{config.countryName}</span>
          </div> */}
          {forgotPassword ? (
            <ForgotPassword />
          ) : resetPassword ? (
            <ResetPassword />
          ) : (
            <>
              <div className="login-text-contents">
                <h1 className="login-title">{t('common:login')}</h1>
                <div className="login-subtitle">{t('login:welcome-back')}</div>
              </div>
              <div className="login-input-fields-container login-input-fields">
                <Form
                  layout="vertical"
                  onFinish={onSubmit}
                  name="login-details"
                  requiredMark={false}
                >
                  <Form.Item
                    name="email"
                    label={`${t('common:email')}`}
                    validateTrigger={'onSubmit'}
                    rules={[
                      ({ getFieldValue }) => ({
                        validator() {
                          if (
                            getFieldValue('email') &&
                            !getFieldValue('email')
                              ?.trim()
                              .match(
                                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                              )
                          ) {
                            return Promise.reject('Please enter a valid email');
                          }
                          return Promise.resolve();
                        },
                      }),
                      {
                        required: true,
                        message: 'Email cannot be empty',
                      },
                    ]}
                  >
                    <div className="login-input-email">
                      <Input type="username" placeholder={'Enter your email addresss'} />
                    </div>
                  </Form.Item>
                  <Form.Item
                    name="password"
                    validateTrigger={'onSubmit'}
                    label={`${t('common:pwd')}`}
                    rules={[
                      {
                        required: true,
                        message: 'Password cannot be empty',
                      },
                    ]}
                  >
                    <div className="login-input-password">
                      <Input.Password type="password" />
                    </div>
                  </Form.Item>
                  {showError && (
                    <div className="login-error-message-container">
                      <ExclamationCircleOutlined
                        style={{
                          color: 'rgba(255, 77, 79, 0.8)',
                          marginRight: '0.5rem',
                          fontSize: '1.1rem',
                        }}
                      />
                      <span className="ant-form-item-explain-error">
                        {errorMsg ? errorMsg : t('common:loginFailed')}
                      </span>
                    </div>
                  )}
                  <div className="login-forget-pwd-container">
                    <Checkbox onChange={onRememberMeChange}>Remember me</Checkbox>
                    <span onClick={() => onClickForgotPassword()} className="login-forget-pwd-txt">
                      {t('login:forgot-pwd')}?
                    </span>
                  </div>
                  <Form.Item>
                    <div className="login-submit-btn-container">
                      <Button type="primary" size="large" htmlType="submit" block loading={loading}>
                        {t('common:login')}
                      </Button>
                    </div>
                  </Form.Item>
                  <div className="login-bottom-container">
                    Don't have an account? <a href="/signUp">Sign up</a>
                  </div>
                  {isTokenExpired && !forgotPassword && !resetPassword && !showError && (
                    <div className="logged-out-section">
                      <div className="info-icon">
                        <ExclamationCircleOutlined
                          style={{
                            color: 'rgba(255, 77, 79, 0.8)',
                            marginRight: '0.5rem',
                            fontSize: '1.1rem',
                          }}
                        />
                      </div>
                      <div className="msg">{t('common:sessionExpiredErrorMsg')}</div>
                    </div>
                  )}
                </Form>
                {/* <div className="login-register-new-container">
                  <span className="login-register-new-txt">
                    {t('login:register-acc')}?&nbsp;&nbsp;
                    <span className="login-register-new-txt-span">{t('common:signUp')}</span>
                  </span>
                </div> */}
              </div>
              {/* <div className="login-language-selection-container">
                  <span className="login-language-selection-txt">
                    {t('common:language')}
                    <span className="sep">{':'}</span>
                    <Select
                      placeholder="Search to Select"
                      defaultValue={
                        localStorage.getItem('i18nextLng') !== null
                          ? localStorage.getItem('i18nextLng')
                          : 'en'
                      }
                      placement="topRight"
                      onChange={(lan: string) => handleLanguageChange(lan)}
                      optionFilterProp="children"
                      filterOption={(input, option) => (option?.label ?? '').includes(input)}
                      filterSort={(optionA, optionB) =>
                        (optionA?.label ?? '')
                          .toLowerCase()
                          .localeCompare((optionB?.label ?? '').toLowerCase())
                      }
                      options={[
                        {
                          value: 'en',
                          label: 'English',
                        },
                        {
                          value: 'es',
                          label: 'Español',
                        },
                        {
                          value: 'fr',
                          label: 'Français',
                        },
                      ]}
                    />
                  </span>
                </div> */}
            </>
          )}
        </div>
      </div>
    </Suspense>
  );
};

export default Login;
