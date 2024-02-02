import React, { useCallback, useEffect, useState } from 'react';
import ProductFilter from './ProductFilter';
import s from './Booking.module.css';
import CarCard from '../../components/CarCard/CarCard';
import SearchBar from './SearchBar';
import useCollection from '../../custom-hooks/useCollection';
import BoxElement from '../../UI/Box/Box';

function getProducts(data, current) {
  return data
    ? data.filter((document) => {
        switch (current) {
          case 'All':
            return true;
          case 'Toyota':
          case 'Volvo':
          case 'Audi':
            return document.category === current;
          default:
            return true;
        }
      })
    : null;
}

function Bookings() {
  const [searchInput, setSearchInput] = useState('');
  const [searchFilteredResults, setSearchFilteredResults] = useState([]);

  const { documents, error, title } = useCollection('bookingCars');
  const [currentCategoryFilter, setCurrentCategoryFilter] = useState('All');
  const [filterData, setFilterData] = useState(
    searchInput.length ? searchFilteredResults : documents
  );
  const [products, setProducts] = useState(
    getProducts(filterData, currentCategoryFilter)
  );

  useEffect(() => {
    setFilterData(searchInput.length ? searchFilteredResults : documents);
  }, [documents, searchFilteredResults, searchInput]);

  useEffect(() => {
    const data = getProducts(filterData, currentCategoryFilter);

    setProducts(data);
  }, [currentCategoryFilter, filterData]);

  const changeSearchInput = (searchValue) => {
    setSearchInput(searchValue);
    const data = products.filter((item) => {
      const filterCount = `${item.carName}`;
      return filterCount.toLowerCase().includes(searchValue.toLowerCase());
    });
    setFilterData(data);
    setSearchFilteredResults(data);
  };

  const changeFilter = useCallback(
    (newFilter) => {
      setCurrentCategoryFilter(newFilter);
    },
    [setCurrentCategoryFilter]
  );

  return (
    <div className="content__wrapper">
      <div className={s.bookings}>
        <h2 className="main_title">Booking</h2>
        <h3>{title}</h3>
        <BoxElement
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
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
          </div>
        </BoxElement>

        <div className={s.list}>
          {!error && products ? (
            products.map((item) => (
              <CarCard
                imgId={item.id}
                key={item.id}
                category={item.category}
                type={item.type}
                rentPrice={item.rentPrice}
                photoUrl={item.photoUrl}
                carName={item.carName}
                groupSize={item.groupSize}
                classNames={s.list__item}
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
