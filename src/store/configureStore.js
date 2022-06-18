import { createStore } from 'redux';



export default () => {
    const store = createStore();
    combineReducers({
        placeholderSB,
        getState: () => state 
    })

    return store;
}