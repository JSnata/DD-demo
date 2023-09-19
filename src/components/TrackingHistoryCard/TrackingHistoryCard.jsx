import React from 'react';
import s from './TrackingHistoryCard.module.css';
import TrackingChart from '../Charts/TrackingChart';
import useCollection from '../../custom-hooks/useCollection';

function TrackingHistoryCard() {
  const { documents: trackingHistoryData } = useCollection('trackingHistory');
  return (
    <div className={s.card}>
      <h2 className="secondary_title">Tracking History</h2>
      <div className={s.chart}>
        <TrackingChart data={trackingHistoryData} />
      </div>
    </div>
  );
}

export default TrackingHistoryCard;
