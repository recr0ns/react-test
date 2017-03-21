import { items } from '../../actions';
import setList from './setList';
import createItem from './createItem';
import toggleItem from './toggleItem';

export default {
  [items.SET_LIST]: (state, action) => setList(state, action.list),
  [items.APPEND_SUCCESS]: (state, action) => createItem(state, action.item),
  [items.TOGGLE_SUCCEDED]: (state, action) => toggleItem(state, action.item),
};
