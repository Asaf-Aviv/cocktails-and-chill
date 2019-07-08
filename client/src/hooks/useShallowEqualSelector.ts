import { shallowEqual, useSelector } from 'react-redux';
import { AppState } from '../store/index';

interface SelectorFunction extends Function {
  (state: AppState): any;
}

export default (selector: SelectorFunction) => useSelector(selector, shallowEqual);
