import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import ArrowButton from '../../UI/Buttons/ArrowButton';
import s from './OfferCard.module.css';
import SpendCard from './SpendCard';

function OfferCard({ offerData }) {
  return (
    <div className={`${s.offer_card} card__wrapper `}>
      <div className={s.box}>
        <h3 className="secondary__title">{offerData.name}</h3>
        <p className={s.avg_price}>
          {offerData.avgPrice}
          <span> average price</span>
        </p>
        <p className={s.market__price}>
          Market average is
          {offerData.marketPrice}
        </p>
        <ArrowButton />
      </div>
      <div className={s.box}>
        <div className={s.circle__wrapper}>
          <CircularProgressbar
            strokeWidth="15"
            value={offerData.percentage}
            text={`${offerData.percentage}%`}
            styles={buildStyles({
              pathColor: `rgba(112, 207, 151, ${offerData.percentage / 100})`,
              textColor: 'rgba(36, 39, 49, 1)',
              trailColor: 'rgba(243, 243, 243, 1)',
              backgroundColor: '#3e98c7',
              textSize: '16px',
            })}
          />
          <h4>Impression Share</h4>
        </div>
      </div>
      {offerData.spendData.map((item) => (
        <div key={item.id} className={s.box}>
          <SpendCard
            icon={item.icon}
            spendAmount={item.amount}
            title={item.title}
          />
        </div>
      ))}
    </div>
  );
}

export default OfferCard;
