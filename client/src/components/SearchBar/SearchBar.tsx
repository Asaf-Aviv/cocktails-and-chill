import React, { useState } from 'react';
import { Input, Icon, Radio, Row, Col, Button } from 'antd';
import { withRouter, RouteComponentProps } from 'react-router';
import { CustomIconComponentProps } from 'antd/lib/icon';
import { ReactComponent as CocktailSvg } from '../../assets/icons/cocktail.svg';

import './SearchBar.sass';

const RenderIcon: React.FunctionComponent<CustomIconComponentProps> = () => (
  <CocktailSvg className="search-bar__icon" />
);

const SearchBar: React.FC<RouteComponentProps> = ({ history }) => {
  const [searchBy, setSearchBy] = useState('name');
  const [inputValue, setInputValue] = useState('');

  const search = () => searchBy === 'name'
    ? history.push(`/name/${inputValue}`)
    : history.push(`/ingredient/${inputValue}`);

  const onKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      search();
    }
  };

  const placeholder = searchBy === 'name'
    ? 'What would you like to drink today ? 🍸🍹🥃'
    : 'What ingredients do you have ? 🍸🍹🥃';

  return (
    <Row style={{ marginBottom: 24 }}>
      <Col
        sm={24}
        md={16}
        style={{ display: 'flex', height: 50, marginBottom: 12 }}
      >
        <Input
          className="search-bar__input"
          placeholder={placeholder}
          prefix={<Icon component={RenderIcon} />}
          onChange={e => setInputValue(e.target.value)}
          onKeyPress={onKeyPress}
        />
      </Col>
      <Col sm={24} md={8}>
        <div className="search__btns">
          <Button
            type="primary"
            className="search__btn"
            onClick={search}
            icon="search"
          />
          <Radio.Group
            style={{ display: 'flex' }}
            value={searchBy}
            onChange={e => setSearchBy(e.target.value)}
          >
            <Radio.Button
              style={{ height: 50, lineHeight: '50px' }}
              value="name"
            >
              Name
            </Radio.Button>
            <Radio.Button
              style={{ height: 50, lineHeight: '50px' }}
              value="ingredient"
            >
              Ingredient
            </Radio.Button>
          </Radio.Group>
        </div>
      </Col>
    </Row>
  );
};

export default withRouter(SearchBar);
