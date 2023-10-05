import React from 'react';
import useCollection from '../../custom-hooks/useCollection';
import OfferCard from './OfferCard';
import s from './OfferCard.module.css';

function OfferList() {
  const { documents: offerData } = useCollection('offers');

  return (
    <div className={s.offer_list}>
      {offerData && offerData.map((item) => <OfferCard offerData={item} />)}
    </div>
  );
}

export default OfferList;
