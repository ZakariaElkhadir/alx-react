import { fromJS } from 'immutable';

function getImmutableObject (params = {}) {
  const immutableMap = fromJS(params);
  return immutableMap;
}
export default getImmutableObject;
