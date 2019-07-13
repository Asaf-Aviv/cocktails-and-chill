import React from 'react';
import { Helmet } from 'react-helmet';
import useShallowEqualSelector from '../../hooks/useShallowEqualSelector';
import { GeneralState } from '../../store/general/types';
import LinksRow from '../LinksRow/LinksRow';

const Glasses: React.FC = () => {
  const { glasses }: GeneralState = useShallowEqualSelector(state => state.general);

  return (
    <>
      <Helmet>
        <title>Glasses - Cocktails And Chill</title>
        <meta name="description" content="List of cocktails glasses" />
      </Helmet>
      <LinksRow items={glasses} baseURL="/glass" />
    </>
  );
};

export default Glasses;
