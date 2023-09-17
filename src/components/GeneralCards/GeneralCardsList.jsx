import React from 'react';
import GeneralCard from './GeneralCard';
import useCollection from '../../custom-hooks/useCollection';
import s from './GeneralCard.module.css';

function GeneralCardsList({ colName }) {
  const { documents, error, title } = useCollection(colName);
  return (
    <div className={s.general_cards}>
      {documents
        && documents.map((item) => (
          <GeneralCard
            title={item.title}
            totalNumber={item.totalNumber}
            icon={item.icon}
          />
        ))}
    </div>
  );
}

export default GeneralCardsList;
