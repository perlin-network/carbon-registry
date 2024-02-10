import './CommonLayout.scss';

import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import Header from './Header';
import Footer from '../Footer/layout.footer';

const CommonLayout = () => (
  <>
    <Header />
    <Layout.Content>
      <Outlet />
    </Layout.Content>
    <Footer />
  </>
);

export default CommonLayout;
