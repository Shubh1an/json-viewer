import { configureStore } from "@reduxjs/toolkit";
import MainReducer from  './features/mainSlice'
const store= configureStore({
    reducer:MainReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck:false
    }),
})
export default store