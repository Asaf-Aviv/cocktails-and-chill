import React from 'react';
import { Helmet } from 'react-helmet';
import useShallowEqualSelector from '../../hooks/useShallowEqualSelector';
import { GeneralState } from '../../store/general/types';
import LinksRow from '../LinksRow';

const Categories: React.FC = () => {
  const { ingredients }: GeneralState = useShallowEqualSelector(state => state.general);

  return (
    <>
      <Helmet>
        <title>Ingredients - Cocktails And Chill</title>
        <meta name="description" content="List of cockktail ingredients" />
      </Helmet>
      <LinksRow items={ingredients} baseURL="/ingredient" />
    </>
  );
};

export default Categories;
