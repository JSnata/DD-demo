import React from 'react';
import GeneralCard from './GeneralCard';
import useCollection from '../../custom-hooks/useCollection';
import s from './GeneralCard.module.css';

function GeneralCardsList({ colName }) {
  const { documents } = useCollection(colName);
  return (
    <div className={s.general_cards}>
      {documents &&
        documents.map((item) => (
          <GeneralCard
            key={item.title}
            title={item.title}
            totalNumber={item.totalNumber}
            icon={item.icon}
          />
        ))}
    </div>
  );
}

export default GeneralCardsList;
