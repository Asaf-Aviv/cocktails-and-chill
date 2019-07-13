import React from 'react';
import { Helmet } from 'react-helmet';
import useShallowEqualSelector from '../../hooks/useShallowEqualSelector';
import { GeneralState } from '../../store/general/types';
import LinksRow from '../LinksRow';

const Categories: React.FC = () => {
  const { categories }: GeneralState = useShallowEqualSelector(state => state.general);

  return (
    <>
      <Helmet>
        <title>Categories - Cocktails And Chill</title>
        <meta name="description" content="List of cockktail categories" />
      </Helmet>
      <LinksRow items={categories} baseURL="/category" />
    </>
  );
};

export default Categories;
