import { List, Map } from 'immutable';
import ItemsMap from './items';

const initialState = new Map({
  items: new List(),
  selected_item: null,
  filter_by: new Map({ 'show_completed': true }),
  display_block: 'none',
});

const actionsMap = {
  ...ItemsMap,
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
