import React from 'react';
import useShallowEqualSelector from '../../hooks/useShallowEqualSelector';
import { GeneralState } from '../../store/general/types';
import LinksRow from '../LinksRow/LinksRow';

const Glasses: React.FC = () => {
  const { glasses }: GeneralState = useShallowEqualSelector(state => state.general);

  return <LinksRow items={glasses} baseURL="/glass" />;
};

export default Glasses;
