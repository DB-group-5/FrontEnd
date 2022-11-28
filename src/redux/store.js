import { configureStore } from '@reduxjs/toolkit';
// import { connectRouter, routerMiddleware } from 'connected-react-router';


export function makeStore(preloadedState) {
  return configureStore({
    reducer: {

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
