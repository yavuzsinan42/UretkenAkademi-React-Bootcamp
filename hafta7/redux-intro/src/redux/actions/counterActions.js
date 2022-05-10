import * as actionTypes from './actionTypes';

export const increaseCounter=()=>{
    return {
        type: actionTypes.INCREASE_COUNTER,
        payload: 1
    }
}
export const decreaseCounter=()=>{
    return {
        type: actionTypes.DECREASE_COUNTER,
        payload: 1
    }
}
export const increaseByTwoCounter=()=>{
    return {
        type: actionTypes.INCREASE_BY_TWO_COUNTER,
        payload: 2
    }
}
