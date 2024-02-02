import React from 'react';
import sellCar from '../../assets/images/sell-car.png';
import s from './SellCar.module.css';
import Filter from '../../UI/Filter/Filter';
import TrackingHistoryCard from '../../components/TrackingHistoryCard/TrackingHistoryCard';
import OfferList from '../../components/OfferCard/OfferList';

const filterOptionsCars = ['Toyota', 'Volvo', 'Audi'];
const filterOptionsMarket = ['New', 'Popular', 'Upcoming'];

function SellCar() {
  return (
    <div className="content__wrapper">
      <div className={s.sell_car}>
        <h2 className="main_title">Sell Car</h2>
        <div className={s.sell_car__top}>
          <div className={s.img__wrapper}>
            <h2 className="secondary_title">2023 Mercedes</h2>
            <img src={sellCar} alt="" />
          </div>
          <TrackingHistoryCard />
        </div>
        <div className={s.offer__wrapper}>
          <div className={s.offer__top}>
            <h2 className={s.offer__top__title}>Offers</h2>
            <div className={s.filter__wrapper}>
              <Filter options={filterOptionsCars} />
              <Filter options={filterOptionsMarket} />
            </div>
          </div>
          <OfferList />
        </div>
      </div>
    </div>
  );
}

export default SellCar;
