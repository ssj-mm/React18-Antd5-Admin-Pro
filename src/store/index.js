import { legacy_createStore, combineReducers, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk'; // 支持异步  ======> 中间件

import userReducer from './user/reducer.js';
import menuReducer from './menu/reducer.js';
import appReducer from './app/reducer.js';

// 合并 reducer 各个模块
const reducers = combineReducers({
    userRD: userReducer,
    menuRD: menuReducer,
    appRD: appReducer,
})
const store = legacy_createStore(reducers, applyMiddleware(reduxThunk));

export default store