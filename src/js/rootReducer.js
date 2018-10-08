import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import TokenReducer  from './components/Token/TokenReducer';

const rootReducer = combineReducers({
  form: formReducer,
  token: TokenReducer
});

export default rootReducer;