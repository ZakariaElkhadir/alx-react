import { Map } from 'immutable';
function areMapsEqual (map1, map2) {
  if (Map(map1) === Map(map2)) {
    return true;
  }
}
export default areMapsEqual;
