import * as React from 'react';
import {
    Grid,
    FormControl,
    OutlinedInput,
    InputAdornment,
    InputLabel
  } from '@mui/material'

import SearchIcon from '@mui/icons-material/Search';

import ProductCard from './ProductCard'

const Products = [
    {
        "product_categories_mapped": ["99"],
        "product_id": 769727985,
        "url": "https://api.shopstyle.com/action/apiVisitRetailer?id=769727985&pid=uid8521-40402211-57",
        "gender": "men",
        "price": 5.99,
        "product_description": "Cap in cotton twill with an adjustable strap at back with metal fastener.colour:  Blue",
        "image_urls": ["https://img.shopstyle-cdn.com/pim/43/49/4349bdc3e26ee9b900fede407e9f9de5_best.jpg"],
        "product_imgs_src": ["https://img.shopstyle-cdn.com/pim/43/49/4349bdc3e26ee9b900fede407e9f9de5_best.jpg"],
        "source": "H&M",
        "product_categories": ["mens-hats"],
        "images": [
            {
                "url": "https://img.shopstyle-cdn.com/pim/43/49/4349bdc3e26ee9b900fede407e9f9de5_best.jpg",
                "path": "full/d4c0b469d423ade33f9547c43e016f5e1d1e460d.jpg",
                "checksum": "9b901fac32079a6ab689c795f6689011"
            }
        ],
        "position": ["front"],
        "product_title":
        "H&M - Cotton Twill Cap - Blue",
        "brand": "H&M",
        "currency_code": "USD",
        "stock": 1
    }
]

function Home() {
    const [values, setValues] = React.useState({
        query: '',
      });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleSearch = (event) => {

    }

    return (
      <Grid container >
        <Grid item xs={12} sm={12} md={12} lg={12}>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-search">Search</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-search"
                    value={values.password}
                    onChange={handleChange('query')}
                    endAdornment={
                    <InputAdornment position="end">
                        <SearchIcon
                            onClick={handleSearch}
                            edge="end"
                        />
                    </InputAdornment>
                    }
                    label="Search"
                />
            </FormControl>
        </Grid>
        <Grid item>
            {Products.map((product) => (
                <ProductCard product={product} />
            ) )}
        </Grid>
      </Grid>
    );
  }
  
  export default Home;
  