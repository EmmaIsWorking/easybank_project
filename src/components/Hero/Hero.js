import React from 'react';

import Description from './Description';
import Banner from './Banner';

function Hero() {
	return (
		<main className='Main'>
			<div className='Main__container'>
				<Description />
				<Banner />
			</div>
		</main>
	);
}

export default Hero;
