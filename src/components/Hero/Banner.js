import React from 'react';

import desktopBanner from '../../images/bg-intro-desktop.svg';
import movilBanner from '../../images/bg-intro-mobile.svg';
import ImgMockup from '../../images/image-mockups.png';
function Banner() {
	return (
		<div className='Main__container__boxImage'>
			<div className='IntroBanner'>
				<img className='desktopBanner' src={desktopBanner} alt='' />
				<img className='movilBanner' src={movilBanner} alt='' />
			</div>
			<div className='ImgMockup'>
				<img src={ImgMockup} alt='' />
			</div>
		</div>
	);
}

export default Banner;
