import React from 'react';
import LikeButton from '../../UI/Buttons/LikeButton';
import s from './CarCard.module.css';
import useStorage from '../../custom-hooks/useStorage';

function CarCard({
  imgId,
  category,
  type,
  rentPrice,
  carName,
  groupSize,
}) {
  const { url } = useStorage('bookingCars', imgId);
  return (
    <div className={s.card}>
      <div className={s.header}>
        <div className={s.title}>
          <h3 className="secondary__title">{carName}</h3>
          <LikeButton />
        </div>
        <p className={s.category}>{category}</p>
      </div>
      <div className={s.img__wrapper}>
        <img src={url} alt="" />
      </div>
      <div className={s.description}>
        <div className={s.info}>
          <p>
            <i className="ri-user-line"></i>
            {groupSize}
          </p>
          <p>
            <i className="ri-repeat-line"></i>
            {type}
          </p>
        </div>
        <p className={s.price}>
          $
          {rentPrice}
          <span>/d</span>
        </p>
      </div>
    </div>
  );
}

export default CarCard;
