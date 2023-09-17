import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
// import { useLocation } from 'react-router-dom';
import ProductFilter from './ProductFilter';
import s from './Booking.module.css';
import CarCard from '../../components/CarCard/CarCard';

// import carData from '../../assets/dummy-data/booking-cars';
// import Filter from '../../UI/Filter/Filter';
import SearchBar from './SearchBar';
import useCollection from '../../custom-hooks/useCollection';
import BoxElement from '../../UI/Box/Box';

// const filterOptionsCars = ['Toyota', 'Volvo', 'Audi'];
// const filterOptionsMarket = ['New', 'Popular', 'Upcoming'];

function Bookings() {
  const [searchInput, setSearchInput] = useState('');
  const [searchFilteredResults, setSearchFilteredResults] = useState([]);
  // const [categoryName, setCategoryName] = useState('');
  // const [collection, setCollection] = useState('');
  const [currentCategoryFilter, setCurrentCategoryFilter] = useState('All');
  const { documents, error, title } = useCollection('bookingCars');

  // const queryString = useLocation().pathname.split('/');
  // const currentCategory = currentCategoryFilter;
  // console.log(currentCategory);
  // useEffect(() => {
  //   if (currentCategory) {
  //     setCategoryName(currentCategory);
  //   }
  // }, [currentCategory]);

  const filterData = searchInput.length ? searchFilteredResults : documents;
  const products = filterData
    ? filterData.filter((document) => {
        console.log(filterData);
        switch (currentCategoryFilter) {
          case 'All':
            return true;
          case 'Toyota':
          case 'Volvo':
          case 'Audi':
            return document.category === currentCategoryFilter;
          default:
            return true;
        }
      })
    : null;

  const changeSearchInput = (searchValue) => {
    setSearchInput(searchValue);
    const filteredData = products.filter((item) => {
      const filterCount = `${item.carName}`;
      return filterCount.toLowerCase().includes(searchValue.toLowerCase());
    });
    setSearchFilteredResults(filteredData);
  };

  const changeFilter = (newFilter) => {
    setCurrentCategoryFilter(newFilter);
  };

  return (
    <div className="content__wrapper">
      <div className={s.bookings}>
        <h2 className="main_title">Booking</h2>
        <h3>{title}</h3>
        <BoxElement
          sx={{
            display: 'flex',
            marginBottom: '30px',
          }}
        >
          <SearchBar
            changeSearchInput={changeSearchInput}
            searchInput={searchInput}
          />
          <div className={s.filter__wrapper}>
            {documents && (
              <ProductFilter
                currentFilter={currentCategoryFilter}
                changeFilter={changeFilter}
              />
            )}
            {/* <Filter options={filterOptionsCars} />
          <Filter options={filterOptionsMarket} /> */}
          </div>
        </BoxElement>

        <div className={s.list}>
          {!error && products ? (
            products.map((item) => (
              <CarCard
                key={item.id}
                category={item.category}
                type={item.type}
                rentPrice={item.rentPrice}
                imgUrl={item.imgUrl}
                carName={item.carName}
                groupSize={item.groupSize}
              />
            ))
          ) : (
            <div className={error}>{error}</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Bookings;
