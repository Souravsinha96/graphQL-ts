import { useEffect } from 'react';
import { useAppDispatch } from '../../store/reduxtypehooks';
import { setAnimePage } from '../../store/slices/homePageSlice';
import AnimeCard from './AnimeCard';
import './Homepage.css';
import useAnimeDatahook from './useAnimeDatahook';
function HomePage() {
  const dispatch = useAppDispatch();

  const { animeList, loading, error } = useAnimeDatahook();

  useEffect(() => {
    if (animeList) {
      dispatch(setAnimePage(animeList));
    }
  }, [animeList, dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  return (
    <div>
      <h1>Anime Lists</h1>
      <section className="home_container">
        <AnimeCard />
      </section>
    </div>
  );
}

export default HomePage;
