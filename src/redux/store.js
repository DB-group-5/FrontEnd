import { configureStore } from '@reduxjs/toolkit';
// import { connectRouter, routerMiddleware } from 'connected-react-router';
import supplySlice from './reducers/supply';
import userSlice from './reducers/user';
import reportSlice from './reducers/report';

export function makeStore(preloadedState) {
  return configureStore({
    reducer: {
      supply: supplySlice,
      user: userSlice,
      report: reportSlice

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
