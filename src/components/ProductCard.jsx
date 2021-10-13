import {
    Grid,
    ImageListItem,
    ImageListItemBar
  } from '@mui/material'

import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    root: {
      // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(100, 100, 100, .3)',
      padding: '0 30px',
      display: 'inline-block',
    },
    image: {
      height: 200,
      overflow: 'scroll-x'
    },
});


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

function ProductCard(props) {
    const classes = useStyles();
    return (
      <ImageListItem key={props.product.images[0].url} style={{margin: 10}}>
        <img
          src={props.product.images[0].ur}
          srcSet={props.product.images[0].url}
          loading="lazy"
          style={{
            width: 260
          }}
        />
        <ImageListItemBar
          title={props.product.product_title}
          subtitle={<span>by: {props.product.brand}</span>}
          position="below"
        />
        <h5 style={{marginTop: 5}}>Price: {props.product.price} {props.product.currency_code}</h5>
      </ImageListItem>
    );
  }

export default ProductCard;
