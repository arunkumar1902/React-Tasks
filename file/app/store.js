import { configureStore } from "@reduxjs/toolkit";
import countReducer from '../features/counter/counter.js'

const store = configureStore({
    reducer:{
        counter : countReducer
    }
});

export default store;