import { createAction } from 'redux-actions'

const PREFIX = 'web/items/';

export const LIST = `${PREFIX}LIST`;
export const APPEND = `${PREFIX}APPEND`;
export const APPEND_SUCCESS = `${PREFIX}APPEND_SUCCESS`;
export const CREATE = `${PREFIX}CREATE`;
export const UPDATE = `${PREFIX}UPDATE`;
export const TOGGLE = `${PREFIX}TOGGLE`;
export const TOGGLE_SUCCEDED = `${PREFIX}TOGGLE_SUCCEDED`;
export const GET = `${PREFIX}GET`;
export const SET_LIST = `${PREFIX}SET_LIST`;

export const listItems = createAction(LIST);
export const appendItem = createAction(APPEND);
export const appendSuccessItem = createAction(APPEND_SUCCESS);
export const createItem = createAction(CREATE);
export const updateItem = createAction(UPDATE);
export const toggleItem = createAction(TOGGLE);
export const getItem = createAction(GET);
export const setList = createAction(SET_LIST);
