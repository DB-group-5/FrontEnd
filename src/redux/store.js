import { configureStore } from '@reduxjs/toolkit';
// import { connectRouter, routerMiddleware } from 'connected-react-router';
import supplySlice from './reducers/supply';

export function makeStore(preloadedState) {
  return configureStore({
    reducer: {
      supply: supplySlice,
      
      // router: connectRouter(history),
    },
    devTools: true,
    preloadedState,
    middleware: (getDefaultMiddleware) => [
      ...getDefaultMiddleware(),
    ],
  });
}

const store = makeStore();

export default store;
