import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../store/reduxtypehooks';
import { useState } from 'react';
import { GetAnimePageQuery } from '../../__generated__/graphql';

function AnimeCard() {
  const navigate = useNavigate();
  const animeData = useAppSelector((state) => state.homePageReducer.animePage);
  const [tooltip, setTooltip] = useState(false);
  function handleClick(id: number | undefined): void {
    navigate(`/${id}`);
  }

  return (
    <>
      {animeData?.Page?.media?.map((item) => (
        <div
          title={(tooltip && item?.title?.native) || ''}
          onMouseOver={() => setTooltip(true)}
          onMouseLeave={() => setTooltip(false)}
          onClick={() => handleClick(item?.id)}
          className="card_container"
          key={item?.id}
          data-testid="click-element"
        >
          <img src={item?.coverImage?.large || ''} alt="cover" />
          <h4>{item?.title?.english}</h4>
        </div>
      ))}
    </>
  );
}

export default AnimeCard;
