import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import jsonDataReducer from './json_data/json_data.reducers';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['json_data']
};

const rootReducer = combineReducers({
    json_data:jsonDataReducer
});

export default persistReducer(persistConfig, rootReducer);