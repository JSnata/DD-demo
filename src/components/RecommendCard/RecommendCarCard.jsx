import React from 'react';
import s from './RecommendCarCard.module.css';
import useStorage from '../../custom-hooks/useStorage';

function RecommendCarCard({
  imgId,
  key,
  carName,
  retweet,
  rentPrice,
  percentage,
}) {
  const { url } = useStorage('recommendCars', imgId);
  return (
    <div className={`${s.recommend__card} card__wrapper`}>
      <div key={key} className={s.top}>
        <h5>
          <span>
            <i className="ri-refresh-line"></i>
          </span>
          {percentage}
          % Recommended
        </h5>
      </div>
      <div className={s.img__wrapper}>
        <img src={url} alt="" />
      </div>
      <div className={s.bottom}>
        <h4>{carName}</h4>
        <div className={s.other}>
          <div className={s.icons}>
            <p>
              <i className="ri-repeat-line"></i>
              {retweet}
              k
            </p>
            <p>
              <i className="ri-settings-2-line"></i>
            </p>
            <p>
              <i className="ri-timer-flash-line"></i>
            </p>
          </div>
          <span>
            $
            {rentPrice}
            /h
          </span>
        </div>
      </div>
    </div>
  );
}

export default RecommendCarCard;
