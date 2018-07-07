import {loadJson} from '../utils/services';
import {createAction} from 'redux-actions';

const FETCH_START = 'FETCH_START';
const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_ERROR = 'FETCH_ERROR';

export const fetchLintersStart = createAction(FETCH_START);
export const fetchLintersSuccess = createAction(FETCH_SUCCESS);
export const fetchLintersFailure = createAction(FETCH_ERROR);

export const fetchLinters = () =>
  // eslint-disable-next-line
  async (dispatch) => {
    dispatch(fetchLintersStart());
    const URL = 'https://catalog.linterhub.com/bundle.json';
    try {
      const [, lintersList] = await loadJson(URL);
      const lintersNames =
        Object.keys(lintersList).filter(k => k !== '$schema');
      const linters =
        lintersNames.map((item) => lintersList[item].meta);
      dispatch(fetchLintersSuccess(linters));
    }
    catch (error) {
      dispatch(fetchLintersFailure(error));
    }
  };
