import { configureStore } from '@reduxjs/toolkit';

import { default as appReducers } from 'app/store';

const rootReducer = {
    app: appReducers
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;