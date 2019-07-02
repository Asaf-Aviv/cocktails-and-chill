import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Layout } from 'antd';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchBar from '../SearchBar';
import Home from '../Home';
import SideMenu from '../SideMenu';
import NavBar from '../NavBar';

import './App.sass';

const { Header, Footer, Content } = Layout;

const Cocktail: React.FC = () => <h1>cocktail</h1>;

const App: React.FC = () => (
  <Router>
    <div className="App">
      <Layout style={{ minHeight: '100vh' }}>
        <SideMenu />
        <Layout style={{ marginLeft: 200 }}>
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
              boxShadow: '0 2px 8px #f0f1f2',
            }}
          >
            <NavBar />
          </Header>
          <Content style={{ margin: '76px 12px 0' }}>
            <SearchBar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/categories" component={Home} />
              <Route path="/ingredients" component={Home} />
              <Route path="/cocktail/:cocktailId" component={Cocktail} />
            </Switch>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </div>
  </Router>
);

export default hot(App);
