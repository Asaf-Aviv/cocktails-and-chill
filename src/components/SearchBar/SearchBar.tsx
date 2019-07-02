import React, { useState, useEffect } from 'react';
import { Input, Icon, Radio } from 'antd';
import { useDispatch } from 'react-redux';
import { CustomIconComponentProps } from 'antd/lib/icon';
import {
  fetchCocktailsByName,
  fetchCocktailsByIngredient,
} from '../../store/cocktails/actions';
import { ReactComponent as CocktailSvg } from '../../assets/icons/cocktail.svg';
import { fetchAllCategories, fetchAllGlasses } from '../../store/general/actions';

import './SearchBar.sass';

const RenderIcon: React.FunctionComponent<CustomIconComponentProps> = () => (
  <CocktailSvg className="searchbar__icon" />
);

const SearchBar: React.FC = () => {
  const [searchBy, setSearchBy] = useState('name');
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCategories());
    dispatch(fetchAllGlasses());
  }, [dispatch]);

  const onKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      searchBy === 'name'
        ? dispatch(fetchCocktailsByName(inputValue))
        : dispatch(fetchCocktailsByIngredient(inputValue));
    }
  };

  return (
    <div className="search-bar">
      <Input
        placeholder="What would you like to drink today ? 🍸🍹🥃"
        prefix={<Icon component={RenderIcon} />}
        size="large"
        onChange={e => setInputValue(e.target.value)}
        onKeyPress={onKeyPress}
      />
      <div className="search-by">
        <Radio.Group value={searchBy} onChange={e => setSearchBy(e.target.value)}>
          <Radio.Button value="name">Name</Radio.Button>
          <Radio.Button value="ingredient">Ingredient</Radio.Button>
        </Radio.Group>
      </div>
    </div>
  );
};

export default SearchBar;
