import React from 'react';
import LikeButton from '../../UI/Buttons/LikeButton';
import s from './CarCard.module.css';

function CarCard({
  category,
  type,
  rentPrice,
  imgUrl,
  carName,
  groupSize,
  classNames = '',
}) {
  return (
    <div className={`${s.card} ${classNames}`}>
      <div className={s.header}>
        <div className={s.title}>
          <h3 className="secondary__title">{carName}</h3>
          <LikeButton />
        </div>
        <p className={s.category}>{category}</p>
      </div>
      <div className={s.img__wrapper}>
        <img src={imgUrl} alt="" />
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
          ${rentPrice}
          <span>/d</span>
        </p>
      </div>
    </div>
  );
}

export default CarCard;
