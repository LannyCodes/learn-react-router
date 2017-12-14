/**
 * Created by Lanny on 2017/12/14.
 */
import {INCREMENT, DECREMENT} from './actionTypes';
export default (state = {}, action) => {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        default:
            return state;
    }
}