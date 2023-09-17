import { useCollection } from '../../hooks/useCollection'
import { useState, useEffect } from 'react'
import {useLocation, useNavigate} from 'react-router-dom'

import ProductsList from '../../components/ProductsList'
import ProductFilter from './ProductFilter'
import SearchBar from '../../components/SearchBar'

import { Box, Typography } from '@mui/material/';

export default function Category() {
    const [searchInput, setSearchInput] = useState('');

    const {documents, error, title} = useCollection('products', categoryName);
    const [currentCategoryFilter, setCurrentCategoryFilter] = useState('All');

    const queryString = useLocation().pathname.split('/');
    const currentCategory = queryString[queryString.length - 1];
    //choose mainCategory URL
    useEffect(() => {
        if(currentCategory) {
            setCategoryName(currentCategory) 
        }

    }, [currentCategory])

    // Search bar
    const changeSearchInput = (searchValue) => {
        setSearchInput(searchValue);
        const filteredData = products.filter((item) => {
          let filterCount = `${item.title}`
          return filterCount.toLowerCase().includes(searchValue.toLowerCase())
        })
        setSearchFilteredResults(filteredData)
    }

    //Filter bar
    const filterData = searchInput.length ? searchFilteredResults : documents;
    const products = filterData ? filterData.filter((document) => {
        switch(currentCategoryFilter){
            case 'All':
                return true
            case 'New':
            case 'Bestsellers':
            case 'Offers & Sale':
                return document.category === currentCategoryFilter
            default: 
                return true
        }
    }) : null

    const changeFilter = (newFilter) => {
        setCurrentCategoryFilter(newFilter)
    }

    return (
            <Box sx={{
                display: 'flex'
            }}>
                <Box sx={{
                    maxWidth:'360px',
                    marginRight: '30px'
                }}>
                    {documents && <ProductFilter currentFilter={currentCategoryFilter} changeFilter={changeFilter} />}
                </Box>
                <Box>
                    {!error ? <Typography variant="h3" component="h1">{title}</Typography> : (<div className={error}>{error}</div>)}
                    <Box sx={{
                            maxWidth: "235px",
                            marginTop: "40px",
                            marginBottom: '30px'
                        }}
                    >
                        <SearchBar 
                            changeSearchInput={changeSearchInput}
                            searchInput={searchInput}
                        />
                    </Box>
                    {!error ? <ProductsList products={products} /> : (<div className={error}>{error}</div>)}
                </Box>
            </Box>
              
    )
}

