import { Fragment } from 'react'
import ProductsSummary from './ProductsSummary';
import AvailableProducts from './AvailableProducts';

const Products = () => {
    return (
        <Fragment>
            <ProductsSummary></ProductsSummary>
            <AvailableProducts></AvailableProducts>
    </Fragment>
)
}

export default Products;