import {createReducer} from 'redux-act';
import * as actions from './actions';

const initialState = {
  linters: [],
  fetchPending: false,
};

export const rootReducer = createReducer({
  [actions.fetchLintersStart]: (state) => ({
    ...state,
    fetchPending: true,
  }),
  [actions.fetchLintersSuccess]: (state, linters) => {
    return {
      ...state,
      linters,
      fetchPending: false,
    };
  },
  [actions.fetchLintersFailure]: (state) => ({
    ...state,
    fetchPending: false,
  }),
}, initialState);

