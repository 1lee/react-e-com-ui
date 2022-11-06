import classes from './ProductsSummary.module.css';

const ProductsSummary = () => {
	return (
		<section className={classes.summary}>
			<h2>Your slogan or tag line</h2>
			<p>Your invite message tp patrons to have a look around</p>
			<p>Your accolades, special features, and reasons you're unique.</p>
			<p>Your customer service proclomations, promises, etc</p>
		</section>
	);
};

export default ProductsSummary;
