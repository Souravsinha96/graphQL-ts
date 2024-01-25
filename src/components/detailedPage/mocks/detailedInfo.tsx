import { GET_DETAILED_ANIME } from '../../../services/animeService/queries';

export const mocks = {
  Media: {
    id: 1,
    description:
      'Enter a world in the distant future, where Bounty Hunters roam the solar system. Spike and Jet, bounty hunting partners, set out on journeys in an ever struggling effort to win bounty rewards to survive.<br><br>\nWhile traveling, they meet up with other very interesting people. Could Faye, the beautiful and ridiculously poor gambler, Edward, the computer genius, and Ein, the engineered dog be a good addition to the group?',
    episodes: 26,
    averageScore: 86,
    status: 'FINISHED',
    seasonYear: 1998,
    isAdult: false,
    chapters: null,
    volumes: null,
    genres: ['Action', 'Adventure', 'Drama', 'Sci-Fi'],
    type: 'ANIME',
    title: {
      english: 'Cowboy Bebop',
      native: '\u30ab\u30a6\u30dc\u30fc\u30a4\u30d3\u30d0\u30c3\u30d7',
    },
    coverImage: {
      extraLarge:
        'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx1-CXtrrkMpJ8Zq.png',
    },
  },
};
export const successfulMockData = [
  {
    request: {
      query: GET_DETAILED_ANIME,
      variables: {
        id: Number(window.location.pathname[1]),
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
      query: GET_DETAILED_ANIME,
      variables: {
        id: Number(window.location.pathname[1]),
      },
    },
    error: new Error('An error occurred'),
  },
];
