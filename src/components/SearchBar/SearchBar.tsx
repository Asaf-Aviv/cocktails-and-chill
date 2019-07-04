import React, { useState } from 'react';
import { Input, Icon, Radio, Row, Col } from 'antd';
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

  const onKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      searchBy === 'name'
        ? history.push(`/name/${inputValue}`)
        : history.push(`/ingredient/${inputValue}`);
    }
  };

  const placeholder = searchBy === 'name'
    ? 'What would you like to drink today ? 🍸 🍹 🥃'
    : 'What ingredients do you have ? 🍸 🍹 🥃';

  return (
    <Row style={{ marginBottom: 24 }}>
      <Col style={{ display: 'flex', width: '100%', flexWrap: 'nowrap', height: 60 }}>
        <Input
          className="search-bar__input"
          placeholder={placeholder}
          prefix={<Icon component={RenderIcon} />}
          onChange={e => setInputValue(e.target.value)}
          onKeyPress={onKeyPress}
        />
        <Radio.Group
          style={{ display: 'flex', paddingLeft: 12 }}
          value={searchBy}
          onChange={e => setSearchBy(e.target.value)}
        >
          <Radio.Button
            style={{ height: 60, lineHeight: '60px' }}
            value="name"
          >
            Name
          </Radio.Button>
          <Radio.Button
            style={{ height: 60, lineHeight: '60px' }}
            value="ingredient"
          >
            Ingredient
          </Radio.Button>
        </Radio.Group>
      </Col>
    </Row>
  );
};

export default withRouter(SearchBar);
