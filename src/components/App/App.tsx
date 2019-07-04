import React, { useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import { Layout, BackTop } from 'antd';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import SearchBar from '../SearchBar';
import SideMenu from '../SideMenu';
import NavBar from '../NavBar';
import Routes from '../Routes';
import {
  fetchAllCategories,
  fetchAllGlasses,
  fetchAllIngredients,
} from '../../store/general/actions';

import './App.sass';

const { Header, Footer, Content } = Layout;

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCategories());
    dispatch(fetchAllGlasses());
    dispatch(fetchAllIngredients());
  }, [dispatch]);

  return (
    <Router>
      <div className="App">
        <Layout style={{ minHeight: 'calc(100vh + 69px)' }}>
          <SideMenu />
          <Layout style={{ marginLeft: 220 }}>
            <Header
              style={{
                background: '#fff',
                padding: 0,
                position: 'fixed',
                top: 0,
                right: 0,
                left: 0,
                zIndex: 10,
                maxWidth: '100%',
                boxShadow: '0 2px 8px #e6e6e6',
              }}
            >
              <NavBar />
            </Header>
            <Content style={{ margin: '88px 12px 0' }}>
              <SearchBar />
              <Routes />
            </Content>
            <BackTop />
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </div>
    </Router>
  );
};

export default hot(App);
