import { takeEvery, call, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { items } from '../../actions';
import { fetchItems, appendItem, updateItem, getItem } from '../../api/items';

export function* fetchItemsAsync(action) {
  try {
    const response = yield call(fetchItems);
    yield put({ type: items.SET_LIST, list: response.data });
  } catch (e) {
    console.log('error fetching', e);
  }
}

var currentId = 1;
function nextId() {
  return currentId++;
}

export function* appendItemAsync(action) {
  try {
    const id = nextId();
    const item = { title: `Todo title ${id}`, decription: `todo description ${id}`, completed: false };
    const response = yield call(appendItem, item);
    yield put({ type: items.APPEND_SUCCESS, item: { ...item, ...response.data } });
  } catch (e) {
    console.log('error fetching', e);
  }
}

export function* toggleItemAsync({ payload }) {
  const item = {
    id: payload.id,
    item: {
      completed: !payload.completed,
    },
  };
  console.log(item);
  yield call(updateItem, item);
  yield [put({ type: items.TOGGLE_SUCCEDED, item }), call(delay, 5000)];
}

// export function* watchFetchUser() {
//   console.log('redux-saga is running user/fetch action listener...');
//   yield takeEvery('app/user/FETCH', fetchUserAsync);
// }

export default function itemsSaga() {
  return [
    takeEvery(items.LIST, fetchItemsAsync),
    takeEvery(items.APPEND, appendItemAsync),
    takeEvery(items.TOGGLE, toggleItemAsync),
  ];
}
