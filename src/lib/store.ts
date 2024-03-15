import { configureStore } from '@reduxjs/toolkit'
import nameSlice from '@/lib/slice/name-slice'

//Bundled reducers
const reducer = {
    names: nameSlice
}

export const store = configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    enhancers: (getDefaultEnhancers) => getDefaultEnhancers({ autoBatch: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;