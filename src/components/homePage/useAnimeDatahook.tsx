import { useQuery } from '@apollo/client';
import {
  GetAnimePageQuery,
  GetAnimePageQueryVariables,
} from '../../__generated__/graphql';
import { GET_ANIME_PAGE } from '../../services/animeService/queries';

export default function useAnimeDatahook() {
  const {
    data: animeList,
    loading,
    error,
  } = useQuery<GetAnimePageQuery, GetAnimePageQueryVariables>(GET_ANIME_PAGE, {
    variables: {
      page: 0,
      perPage: 50,
    },
  });

  return { animeList, loading, error };
}
