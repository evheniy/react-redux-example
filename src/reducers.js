import { combineReducers } from 'redux';

import rl from './form/rl';

export default combineReducers({ [rl.nameSpace]: rl.reducer });