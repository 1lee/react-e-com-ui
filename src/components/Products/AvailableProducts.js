import Card from '../UI/Card';
import ProductItem from './ProductItem/ProductItem';
import classes from './AvailableProducts.module.css';

const DUMMY_PRODUCTS = [
	{
		id: '7a422937-bb86-4772-8b2f-fcc2fd96cf0e',
		name: 'Lettuce - Spring Mix',
		description:
			'erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis',
		price: 55.92
	},
	{
		id: '5d26b038-de91-4b4f-8db4-2fbc868c6c5f',
		name: 'Beans - Kidney, Red Dry',
		description:
			'felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor',
		price: 37.09
	},
	{
		id: '5bcb1cdc-6cd5-4f53-af2f-4fae8e2e67bd',
		name: 'Magnotta - Bel Paese White',
		description:
			'blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi',
		price: 10.1
	},
	{
		id: '5e0965b4-7c3e-4fd8-a803-c9e310745e34',
		name: 'Oil - Avocado',
		description:
			'sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque',
		price: 18.32
	},
	{
		id: '689ab379-2d77-44f5-8b65-ba4f6e375a70',
		name: 'Lamb Shoulder Boneless Nz',
		description: 'sapien non mi integer ac neque duis bibendum morbi non',
		price: 17.15
	},
	{
		id: 'aad62a3a-8a43-4dc7-a220-cb1127188bdc',
		name: 'Cheese - Montery Jack',
		description:
			'porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non',
		price: 52.42
	},
	{
		id: 'cf956afc-f21d-458b-a57d-8f31cd20d638',
		name: 'Currants',
		description:
			'donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id',
		price: 46.76
	},
	{
		id: '80526d8d-0257-4705-8a09-7fae8d3c33cd',
		name: 'Bagel - Everything',
		description:
			'erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi',
		price: 42.55
	}
];

const AvailableProducts = () => {
	const productsList = DUMMY_PRODUCTS.map(p => {
		return (
			<ProductItem
				key={p.id}
				name={p.name}
				description={p.description}
				price={p.price}
			/>
		);
	});

	return (
		<section className={classes.products}>
			<Card>
				<ul>{productsList}</ul>
			</Card>
		</section>
	);
};

export default AvailableProducts;
