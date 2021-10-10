import {
    Grid,
  } from '@mui/material'

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
  });
  

function ProductCard(props) {
    const classes = useStyles();
    return (
      <Grid container className={classes.root} >
        <Grid item xs={12} sm={12} md={12} lg={12}>
            {props.product.product_title}
        </Grid>
      </Grid>
    );
  }
  
  export default ProductCard;
  