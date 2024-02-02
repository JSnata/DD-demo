import React from 'react';
import s from './Dashboard.module.css';
import CustomBarChart from '../../components/Charts/CustomBarChart';
import CustomAreaChart from '../../components/Charts/CustomAreaChart';
import StatsCard from '../../components/StatsCard/StatsCard';
import GeneralCardsList from '../../components/GeneralCards/GeneralCardsList';
import useCollection from '../../custom-hooks/useCollection';
import RecommendCarCardList from '../../components/RecommendCard/RecommendCarCardList';

function Dashboard() {
  const { documents: mileStatics } = useCollection('mileStatics');
  const { documents: carStatics } = useCollection('carStatics');

  return (
    <div className="content__wrapper">
      <GeneralCardsList colName="generalStats" />
      <div className={s.statics}>
        <StatsCard>
          <CustomBarChart data={mileStatics} />
        </StatsCard>
        <StatsCard title="Cars Statistics">
          <CustomAreaChart data={carStatics} />
        </StatsCard>
      </div>
      <RecommendCarCardList />
    </div>
  );
}

export default Dashboard;
