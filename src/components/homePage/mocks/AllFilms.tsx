import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import { GET_ANIME_PAGE } from '../../../services/animeService/queries';
import { renderHook } from '@testing-library/react';
import useAnimeDatahook from '../useAnimeDatahook';

export const mocks = {
  Page: {
    media: [
      {
        id: 1,
        title: {
          english: 'Cowboy Bebop',
          native: 'カウボーイビバップ',
        },
        coverImage: {
          large:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx1-CXtrrkMpJ8Zq.png',
        },
      },
    ],
  },
};
export const successfulMockData = [
  {
    request: {
      query: GET_ANIME_PAGE,
      variables: {
        page: 0,
        perPage: 50,
      },
    },
    result: {
      data: mocks,
    },
  },
];
export const errorMockData = [
  {
    request: {
      query: GET_ANIME_PAGE,
      variables: {
        page: 0,
        perPage: 50,
      },
    },
    error: new Error('An error occurred'),
  },
];

export function getAllAnimesWrapper(mockData: MockedResponse[] = []) {
  const wrapper = ({ children }: React.PropsWithChildren) => (
    <MockedProvider addTypename={false} mocks={mockData}>
      {children}
    </MockedProvider>
  );
  const { result } = renderHook(() => useAnimeDatahook(), {
    wrapper,
  });

  return { result };
}
