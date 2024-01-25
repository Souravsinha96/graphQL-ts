import { cleanup, waitFor } from '@testing-library/react';
import {
  errorMockData,
  getAllAnimesWrapper,
  mocks,
  successfulMockData,
} from './mocks/AllFilms';

describe('useQuery hook when successful', () => {
  afterEach(() => {
    cleanup();
  });
  const { result } = getAllAnimesWrapper(successfulMockData);

  it('should be defined and then return the correct data', async () => {
    expect(result.current).toEqual({
      animeList: undefined,
      loading: true,
      error: undefined,
    });

    await waitFor(() => {
      expect(result.current).toEqual({
        animeList: mocks,
        loading: false,
        error: undefined,
      });
    });
  });
});
describe('useQuery hook when it errors', () => {
  afterEach(() => {
    cleanup();
  });
  const { result } = getAllAnimesWrapper(errorMockData);

  it('should be defined and then return the error', async () => {
    await waitFor(() => {
      expect(result.current).toEqual({
        animeList: undefined,
        loading: false,
        error: new Error('An error occurred'),
      });
    });
  });
});
