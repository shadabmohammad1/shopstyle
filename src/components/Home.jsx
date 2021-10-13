import * as React from 'react';
import {
    Grid,
    FormControl,
    OutlinedInput,
    InputAdornment,
    InputLabel,
    Box,
    AppBar,
    Toolbar,
    Typography,
    InputBase
  } from '@mui/material'
import { withStyles} from '@mui/styles';
import { styled, alpha } from '@mui/material/styles';
import {
    Button,
    IconButton,
 } from '@mui/material';
 import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

import InfiniteScroll from 'react-infinite-scroll-component';

import {getSearchResult} from '../api_handler'
import ProductCard from './ProductCard'


const styles = {
    root: {
        width: '80%',
        margin: 'auto'
    }
}

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

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
                        <Box sx={{ flexGrow: 1 }}>
                            <AppBar position="static" style={{background: '#212121'}}>
                                <Toolbar>
                                    <IconButton
                                        size="large"
                                        edge="start"
                                        color="inherit"
                                        aria-label="menu"
                                        sx={{ mr: 2 }}
                                    >
                                        <MenuIcon />
                                    </IconButton>
                                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                        Products
                                    </Typography>
                                    <Search>
                                        <SearchIconWrapper>
                                            <SearchIcon />
                                        </SearchIconWrapper>
                                        <StyledInputBase
                                            placeholder="Search…"
                                            inputProps={{ 'aria-label': 'search' }}
                                            value={this.state.q}
                                            onChange={(event) => {
                                                this.setState({q: event.target.value})
                                            }}
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter') {
                                                    this.handleSearch()
                                                }
                                            }}
                                        />
                                    </Search>
                                </Toolbar>
                            </AppBar>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container spacing={4} mt={4} ml={2}>
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
                            style={{
                                width: '100%'
                            }}
                            >
                                {this.state.products.map((product, i) => (
                                    <ProductCard product={product} key={i}/>
                                ) )}
                        </InfiniteScroll>
                </Grid>
            </Grid>
        </Grid>
        )
    }
}

export default withStyles(styles)(Home)