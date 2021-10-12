import * as React from 'react';
import {
    Grid,
    FormControl,
    OutlinedInput,
    InputAdornment,
    InputLabel
  } from '@mui/material'
import { withStyles } from '@mui/styles';
import SearchIcon from '@mui/icons-material/Search';

import InfiniteScroll from 'react-infinite-scroll-component';

import {getSearchResult} from '../api_handler'
import ProductCard from './ProductCard'

const styles = {
    root: {
        width: '60%',
        margin: 'auto'
    }
}

class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          products: [],
          q: '',
          page_size: 15,
          offset: 0
        }
    }

    fetchResult() {
        getSearchResult({
            q: this.state.q,
            offset: this.state.offset,
            page_size: this.state.page_size
        }).then(resp => {
            this.setState({
                products: this.state.products.concat(resp.data.results),
                offset: this.state.products.length + resp.data.results.length
            })
        })
    }

    componentDidMount() {
        this.fetchResult()
    }

    async handleSearch() {
        await this.setState({
            offset: 0,
            products: []
        })
        this.fetchResult()
    }

    render() {
        const { classes } = this.props;
        return (
        <Grid container className={classes.root}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <Grid container>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <FormControl variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-search">Search</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-search"
                                value={this.state.q}
                                onChange={(event) => {
                                    this.setState({q: event.target.value})
                                }}
                                endAdornment={
                                <InputAdornment position="end">
                                    <SearchIcon
                                        onClick={() => {this.handleSearch()}}
                                        edge="end"
                                    />
                                </InputAdornment>
                                }
                                label="Search"
                            />
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <InfiniteScroll
                            dataLength={this.state.products.length} //This is important field to render the next data
                            next={() => {this.fetchResult()}}
                            hasMore={true}
                            loader={<h4>Loading...</h4>}
                            endMessage={
                                <p style={{ textAlign: 'center' }}>
                                <b>Yay! You have seen it all</b>
                                </p>
                            }
                            >
                                {this.state.products.map((product) => (
                                    <ProductCard product={product} />
                                ) )}
                        </InfiniteScroll>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        )
    }
}

export default withStyles(styles)(Home)