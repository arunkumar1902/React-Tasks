import { configureStore } from "@reduxjs/toolkit";
import countReducer from '../features/counter/counter.js'
import detailsReducer from '../features/userDetails/detailsSlics.js'

const store = configureStore({
    reducer:{
        counter : countReducer,
        details : detailsReducer
    }
});

export default store;