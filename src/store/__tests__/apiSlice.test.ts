import {UnknownAction} from '@reduxjs/toolkit';
import {apiSlice} from '../apiSlice';
import {setupApiStore} from '../../utils/testUtils';

jest.mock('@reduxjs/toolkit', () => ({
  ...jest.requireActual('@reduxjs/toolkit'),
  createApi: jest.fn(),
}));

describe('API Slice', () => {
  const storeRef = setupApiStore(apiSlice);

  it('fetches popular movies', async () => {
    await storeRef.store.dispatch(
      apiSlice.endpoints.getPopularMovies.initiate() as unknown as UnknownAction,
    );

    const {data, isLoading, isError} =
      apiSlice.endpoints.getPopularMovies.select()(storeRef.store.getState());

    expect(isLoading).toBe(false);
    expect(isError).toBe(false);
    expect(data).toBeDefined();
    expect(Array.isArray(data)).toBe(true);
    expect(data?.length).toBeGreaterThan(0);
  });

  it('searches movies', async () => {
    const query = 'Test Movie 1';
    await storeRef.store.dispatch(
      apiSlice.endpoints.searchMovies.initiate(
        query,
      ) as unknown as UnknownAction,
    );

    const {data, isLoading, isError} = apiSlice.endpoints.searchMovies.select(
      query,
    )(storeRef.store.getState());

    expect(isLoading).toBe(false);
    expect(isError).toBe(false);
    expect(data).toBeDefined();
    expect(Array.isArray(data)).toBe(true);
    expect(data?.some(movie => movie.title.includes(query))).toBe(true);
  });
});
