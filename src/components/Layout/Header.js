import { Fragment } from 'react';
import moonPic from '../../assets/eclipe.webp';
import classes from './Header.module.css';

const Header = props => {
	return (
		<Fragment>
			<header className={classes.header}>
				<h1>Moon Magic</h1>
				<button>Cart</button>
			</header>
			<div className={classes['main-image']}>
				<img src={moonPic} alt='a blood moon' />
			</div>
		</Fragment>
	);
};

export default Header;
