import React from 'react';
import useShallowEqualSelector from '../../hooks/useShallowEqualSelector';
import { GeneralState } from '../../store/general/types';
import LinksRow from '../LinksRow';

const Categories: React.FC = () => {
  const { categories }: GeneralState = useShallowEqualSelector(state => state.general);

  return <LinksRow items={categories} baseURL="/category" />;
};

export default Categories;
