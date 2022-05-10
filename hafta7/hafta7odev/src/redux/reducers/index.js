import {combineReducers} from 'redux';
import {productReducer, selectedProductReducer} from './ProductReducer';

const reducers = combineReducers({
    allProducts: productReducer,
    product:selectedProductReducer,
});

export default reducers;