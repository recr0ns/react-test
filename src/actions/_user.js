import { createAction } from 'redux-actions';

export const FETCH = 'app/user/FETCH';

export const fetchUser = createAction(FETCH);
