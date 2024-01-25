import { useParams } from 'react-router-dom';
import './DetailedPage.css';
import { GET_DETAILED_ANIME } from '../../services/animeService/queries';
import {
  GetDetailedAnimeQuery,
  GetDetailedAnimeQueryVariables,
} from '../../__generated__/graphql';
import { useQuery } from '@apollo/client';
export default function DetailedPage() {
  const params = useParams();

  const {
    data: detailedInfo,
    loading,
    error,
  } = useQuery<GetDetailedAnimeQuery, GetDetailedAnimeQueryVariables>(
    GET_DETAILED_ANIME,
    {
      variables: {
        id: Number(params?.id),
      },
    }
  );

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  let info = detailedInfo?.Media;

  return (
    <div className="bg_container">
      <h1>Detailed View</h1>
      <div className="detailed_container">
        <img src={info?.coverImage?.extraLarge || ''} alt="cover" />

        <div className="detailed_info">
          <h2>{info?.title?.native}</h2>
          <i>({info?.title?.english})</i>
          <p>Type:{info?.type}</p>
          <p>{info?.description}</p>
          <p>Genre: {info?.genres?.join(', ')}</p>
          <hr />
          <p>Episodes: {info?.episodes}</p>
          <p>STATUS: {info?.status}</p>
          <p>Volumes: {info?.volumes || '-'}</p>
          <p>Chapters: {info?.chapters || '-'}</p>
          <p>
            Avg Score: <span className="avgScore">{info?.averageScore}</span>
          </p>

          <p>Year: {info?.seasonYear}</p>
        </div>
      </div>
    </div>
  );
}
