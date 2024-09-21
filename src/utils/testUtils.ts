import {configureStore} from '@reduxjs/toolkit';
import type {
  EnhancedStore,
  Middleware,
  ConfigureStoreOptions,
} from '@reduxjs/toolkit';

export function setupApiStore<
  A extends {
    reducer: any;
    reducerPath: string;
    middleware: Middleware;
    util: {resetApiState(): any};
  },
>(
  api: A,
  extraReducers?: ConfigureStoreOptions['reducer'],
): {store: EnhancedStore; api: any} {
  const getStore = () =>
    configureStore({
      reducer: {[api.reducerPath]: api.reducer, ...extraReducers},
      middleware: gdm => gdm().concat(api.middleware),
    });

  const store = getStore();

  const originalDispatch = store.dispatch;
  store.dispatch = jest.fn(
    originalDispatch,
  ) as unknown as typeof originalDispatch;

  return {
    store,
    api,
  };
}
