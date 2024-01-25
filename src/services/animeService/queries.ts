import { gql } from '@apollo/client';

export const GET_ANIME_PAGE = gql`
  query GetAnimePage($page: Int!, $perPage: Int!) {
    Page(page: $page, perPage: $perPage) {
      media {
        id
        title {
          english
          native
        }
        coverImage {
          large
        }
      }
    }
  }
`;

export const GET_DETAILED_ANIME = gql`
  query GetDetailedAnime($id: Int!) {
    Media(id: $id) {
      id
      description
      episodes
      averageScore
      status
      seasonYear
      isAdult
      chapters
      volumes
      genres
      type
      title {
        english
        native
      }
      coverImage {
        extraLarge
      }
    }
  }
`;
