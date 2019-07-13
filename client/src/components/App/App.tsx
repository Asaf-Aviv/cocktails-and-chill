import React, { useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import { Layout, BackTop, Icon } from 'antd';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import SearchBar from '../SearchBar';
import SideMenu from '../SideMenu';
import NavBar from '../NavBar';
import Routes from '../Routes';
import useWindowWidth from '../../hooks/useWindowWidth';
import {
  fetchAllCategories,
  fetchAllGlasses,
  fetchAllIngredients,
} from '../../store/general/actions';

import './App.sass';

const { Header, Footer, Content } = Layout;

const App: React.FC = () => {
  const dispatch = useDispatch();
  const width = useWindowWidth();

  useEffect(() => {
    dispatch(fetchAllCategories());
    dispatch(fetchAllGlasses());
    dispatch(fetchAllIngredients());
  }, [dispatch]);

  return (
    <>
      <Route component={() => { window.scrollTo(0, 0); return null; }} />
      <div className="App">
        <Layout style={{ minHeight: 'calc(100vh + 69px)' }}>
          {width >= 786 && <SideMenu />}
          <Layout className="layout"style={{ marginLeft: width >= 786 ? 220 : 0 }}>
            <Header className="header">
              <NavBar />
            </Header>
            <Content style={{ margin: '88px 12px 0', paddingBottom: 24 }}>
              <SearchBar />
              <Routes />
            </Content>
            <BackTop style={{ right: 20, bottom: 20 }} />
            <Footer className="footer">
              Copyrights
              <Icon type="copyright" />
              Cocktails N Chill
            </Footer>
          </Layout>
        </Layout>
      </div>
    </>
  );
};

export default hot(App);
