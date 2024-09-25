#!use/bin/node
import { Map } from 'immutable';
export default function getImmutableObject (params = {}) {
  return Map(params);
}

