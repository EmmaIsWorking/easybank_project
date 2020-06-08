import React from 'react';

import Logo from '../Logo/Logo';

//Social Media
import fbIcon from '../../images/icon-facebook.svg';
import ytIcon from '../../images/icon-youtube.svg';
import twIcon from '../../images/icon-twitter.svg';
import ptIcon from '../../images/icon-pinterest.svg';
import inIcon from '../../images/icon-instagram.svg';

function Logos() {
	return (
		<>
			<div className='logo'>
				<Logo color='#FFF' />
			</div>
			<div className='socialMedia'>
				<img src={fbIcon} alt='' className='icon' />
				<img src={ytIcon} alt='' className='icon' />
				<img src={twIcon} alt='' className='icon' />
				<img src={ptIcon} alt='' className='icon' />
				<img src={inIcon} alt='' className='icon' />
			</div>
		</>
	);
}

export default Logos;
