import React from 'react';
import Title from '../Title';
import FavColumns from './FavColumns';
import EmptyFav from './EmptyFav';
import { ProductConsumer } from '../../context';
import FavList from './FavList';
import FavTotals from './FavTotals';

class Favorites extends React.Component {
    render() { 
        return (
            <section>
                <ProductConsumer>
                    {
                        value => {
                            const {fav} = value;
                            if(fav.length > 0) {
                                return (
                                    <React.Fragment>
                                        <Title name="your" title="Favorites" />
                                        <FavColumns />
                                        <FavList value={value}/>
                                        <FavTotals value={value}/>
                                    </React.Fragment>
                                );
                            } else {
                                return <EmptyFav/>
                            }
                        }
                    }
                </ProductConsumer>

                
            </section>
        );
    }
}
 
export default Favorites;
