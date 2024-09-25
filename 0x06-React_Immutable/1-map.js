#!use/bin/node
import { Map } from 'immutable';
function getImmutableObject (params = {}) {
    const immutableMap = Map(params);
    return immutableMap;
  }
  export default getImmutableObject;