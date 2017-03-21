import { List, Map } from 'immutable';

export default function (state, list) {
  return state.set('items', List.of(...list.map(item => new Map(item))));
}
