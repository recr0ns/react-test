import { Map } from 'immutable';

export default function (state, item) {
  return state.update('items', items => items.push(new Map(item)));
}
