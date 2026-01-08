import { configureStore } from '@reduxjs/toolkit';      
import userReducer from './userSlice';
import feedReducer from './feedSlice';
import connectionReducer from './connectionSlice'
import requestSliceReducer from './requestSlice'

const appStore = configureStore({
    reducer: {
        user: userReducer,
        feed: feedReducer,
        connections: connectionReducer,
        requests: requestSliceReducer,
    },

});

export default appStore;