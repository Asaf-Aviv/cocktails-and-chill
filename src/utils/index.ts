import mapValues from 'lodash.mapvalues';
import pickBy from 'lodash.pickby';
import identity from 'lodash.identity';

export const removeFalsyProps = (arr: object[]): object[] => (
  arr.map(obj => pickBy(mapValues(obj,
    (v: string | null) => typeof v === 'string' ? v.trim() : v), identity))
);
