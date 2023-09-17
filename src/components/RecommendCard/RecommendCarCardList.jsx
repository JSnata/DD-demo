import React from 'react';
import s from './RecommendCarCard.module.css';
import RecommendCarCard from './RecommendCarCard';
import useCollection from '../../custom-hooks/useCollection';

function RecommendCarCardList() {
  const { documents: recommendCars } = useCollection('recommendCars');

  return (
    <div className={s.list}>
      {
        recommendCars
        && recommendCars.map((item) => (
          <RecommendCarCard
            key={item.id}
            carName={item.carName}
            retweet={item.retweet}
            imgUrl={item.imgUrl}
            rentPrice={item.rentPrice}
            percentage={item.percentage}
          />
        ))
      }
    </div>
  );
}

export default RecommendCarCardList;
