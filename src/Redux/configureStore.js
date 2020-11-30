import {createStore, combineReducers,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {Data} from './Reducer'
export const ConfigureStore = () => {
    const store = createStore(
        Data,
        applyMiddleware(logger)
    );

    return store;
}