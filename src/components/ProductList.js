import React from 'react';
import Product from './Product';
import Title from './Title';
import { ProductConsumer } from '../context';



class ProductList extends React.Component {
    render() { 
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <div className="row">
                            <Title name="Our " title="Sari-Sari Store"/>
                            <div className="row">
                                <ProductConsumer>
                                    {v => {
                                        return v.products.map(product => {
                                            return <Product key={product.id} product={product} />
                                        })
                                    }}
                                </ProductConsumer>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default ProductList;