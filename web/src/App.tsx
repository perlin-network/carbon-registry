import { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ConnectionContextProvider } from './Context/ConnectionContext/connectionContext';
import 'antd/dist/antd.css';
import './Styles/app.scss';
import 'mapbox-gl/dist/mapbox-gl.css';
import { UserInformationContextProvider } from './Context/UserInformationContext/userInformationContext';
import PrivateRoute from './Components/PrivateRoute/privateRoute';
import { AbilityContext } from './Casl/Can';
import { defineAbility, updateUserAbility } from './Casl/ability';
import { SettingsContextProvider } from './Context/SettingsContext/settingsContext';
import config from './config';
// import i18next from 'i18next';
import CommonLayout from './Components/CommonLayout/CommonLayout';

import Login from './Pages/Login/login';
import SignUp from './Pages/Signup/signup';
import SignupSwitchView from './Pages/SignupSwitchView/signupSwitchView';
import SigninSwitchView from './Pages/SigninSwitchView/signinSwitchView';
import SignupFrameView from './Pages/SignupFrameView/signupFrameView';
import SigninFrameView from './Pages/SigninFrameView/signinFrameView';
import CustomLayout from './Components/Layout/layout';
import AddUser from './Pages/AddUser/addUser';
import UserManagement from './Pages/UserManagement/userManagement';
import Dashboard from './Pages/Dashboard/dashboard';
import AddNewCompany from './Pages/Company/addNewCompany';
import CompanyManagement from './Pages/CompanyManagement/companyManagement';
import ProgrammeManagement from './Pages/ProgrammeManagement/programmeManagement';
import AddNewProgramme from './Pages/ProgrammeManagement/addNewProgramme';
import AddNewProgrammeUndp from './Pages/ProgrammeManagement/addNewProgrammeUndp';
import ProgrammeView from './Pages/ProgrammeView/programmeView';
import CreditTransfers from './Pages/Transfers/creditTransfers';
import Homepage from './Pages/Homepage/homepage';
import PrivacyPolicy from './Pages/PrivacyPolicy/privacyPolicy';
import CodeOfConduct from './Pages/CodeofConduct/codeofConduct';
import CookiePolicy from './Pages/CookiePolicy/cookiePolicy';
import TermsOfUse from './Pages/TermsofUse/termsofUse';
import CarbonHelp from './Pages/Help/help';
import UserProfile from './Pages/UserProfile/UserProfile';
import CompanyProfile from './Pages/CompanyProfile/companyProfile';
import NationallyDeterminedContributions from './Pages/NationallyDeterminedContributions/nationallyDeterminedContributions';
import About from './Pages/About/about';
import AccessibilityStatement from './Pages/AccessibilityStatement/accessibilityStatement';
import RegistrarFunctions from './Pages/RegistrarFunctions/registrarFunctions';
import Contact from './Pages/Contact/contact';
import Incentives from './Pages/Incentives/incentives';

// message.config({
//   duration: 60,
// });

const App = () => {
  const ability = defineAbility();
  useEffect(() => {
    console.log(config.apiUrl);
    if (
      localStorage.getItem('companyId') &&
      localStorage.getItem('userRole') &&
      localStorage.getItem('userId') &&
      localStorage.getItem('companyState') &&
      localStorage.getItem('companyRole')
    )
      updateUserAbility(ability, {
        id: parseInt(localStorage.getItem('userId') as string),
        role: localStorage.getItem('userRole') as string,
        companyId: parseInt(localStorage.getItem('companyId') as string),
        companyState: parseInt(localStorage.getItem('companyState') as string),
        companyRole: localStorage.getItem('companyRole') as string,
      });
  }, []);
  return (
    <AbilityContext.Provider value={ability}>
      <ConnectionContextProvider serverURL={config.apiUrl}>
        <UserInformationContextProvider>
          <SettingsContextProvider>
            <BrowserRouter>
              <Routes>
                <Route path="help" element={<CarbonHelp />} />
                <Route path="signinFrameView" element={<SigninFrameView />} />
                <Route path="codeconduct" element={<CodeOfConduct />} />
                <Route path="cookie" element={<CookiePolicy />} />
                <Route path="terms" element={<TermsOfUse />} />
                <Route path="/" element={<CommonLayout />}>
                  <Route path="signupFrameView" element={<SignupFrameView />} />
                  <Route index element={<Homepage />} />
                  <Route path="about" element={<About />} />
                  <Route
                    path="nationallyDeterminedContributions"
                    element={<NationallyDeterminedContributions />}
                  />
                  <Route path="incentives" element={<Incentives />} />
                  <Route path="accessibilityStatement" element={<AccessibilityStatement />} />
                  <Route path="registrarFunctions" element={<RegistrarFunctions />} />
                  <Route path="privacy" element={<PrivacyPolicy />} />
                  <Route path="contact" element={<Contact />} />
                  <Route path="login" element={<Login />} />
                  <Route path="forgotPassword" element={<Login forgotPassword={true} />} />
                  <Route path="resetPassword/:requestid" element={<Login resetPassword={true} />} />
                  <Route path="signUp" element={<SignUp />} />
                  <Route path="signupSwitchView" element={<SignupSwitchView />} />
                  <Route path="signinSwitchView" element={<SigninSwitchView />} />
                </Route>
                <Route path="/" element={<PrivateRoute />}>
                  <Route path="/dashboard" element={<CustomLayout selectedKey="dashboard" />}>
                    <Route index element={<Dashboard />} />
                  </Route>
                  <Route
                    path="/programmeManagement"
                    element={<CustomLayout selectedKey="programmeManagement/viewAll" />}
                  >
                    <Route path="viewAll" element={<ProgrammeManagement />} />
                    <Route path="view" element={<ProgrammeView />} />
                    <Route path="addProgramme" element={<AddNewProgramme />} />
                    <Route path="addProgrammeUndp" element={<AddNewProgrammeUndp />} />
                  </Route>
                  <Route
                    path="/companyManagement"
                    element={<CustomLayout selectedKey="companyManagement/viewAll" />}
                  >
                    <Route path="viewAll" element={<CompanyManagement />} />
                    <Route path="addCompany" element={<AddNewCompany />} />
                    <Route path="updateCompany" element={<AddNewCompany />} />
                  </Route>
                  <Route
                    path="/userManagement"
                    element={<CustomLayout selectedKey="userManagement/viewAll" />}
                  >
                    <Route path="viewAll" element={<UserManagement />} />
                    <Route path="addUser" element={<AddUser />} />
                    <Route path="updateUser" element={<AddUser />} />
                  </Route>
                  <Route
                    path="/creditTransfers"
                    element={<CustomLayout selectedKey="creditTransfers/viewAll" />}
                  >
                    <Route path="viewAll" element={<CreditTransfers />} />
                    {/* <Route path="view" element={<ProgrammeView />} /> */}
                  </Route>
                  <Route
                    path="/userProfile"
                    element={<CustomLayout selectedKey="userManagement/viewAll" />}
                  >
                    <Route path="view" element={<UserProfile />} />
                  </Route>
                  <Route
                    path="/companyProfile"
                    element={<CustomLayout selectedKey="companyManagement/viewAll" />}
                  >
                    <Route path="view" element={<CompanyProfile />} />
                  </Route>
                  {/* <Route
                      path="/userManagement"
                      element={<CustomLayout selectedKey="userManagement" />}
                    >
                      <Route index element={<UserManagement />} />
                      <Route path="addUser" element={<AddUser />} />
                      <Route path="updateUser" element={<UpdateUser />} />
                    </Route> */}
                </Route>
                <Route path="/*" element={<Navigate to="/" replace />} />
              </Routes>
            </BrowserRouter>
          </SettingsContextProvider>
        </UserInformationContextProvider>
      </ConnectionContextProvider>
    </AbilityContext.Provider>
  );
};

export default App;
