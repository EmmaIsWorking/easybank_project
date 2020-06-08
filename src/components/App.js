import React from 'react';

//Styles
import './Styles/styles.scss';

//MyComponents
import Header from './Header/Header';
import Hero from './Hero/Hero';
import Feature from './Features/Feature';
import Articles from './Articles/Articles';
import Footer from './Footer/Footer';

const App = () => {
	return (
		<>
			<Header />
			<Hero />
			<Feature />
			<Articles />
			<Footer />
		</>
	);
};
export default App;
