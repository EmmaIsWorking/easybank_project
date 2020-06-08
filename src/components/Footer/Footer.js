import React from 'react';

import Menu from './Menu';
import Logos from './Logos';

function Footer() {
	return (
		<footer className='Footer'>
			<div className='Footer__container'>
				<div className='Footer__container__LogosContainer'>
					<Logos />
				</div>
				<div className='Footer__container__menu'>
					<Menu />
				</div>
				<div className='Footer__container_requestBtn'>
					<button className='btn'>Request Invite</button>
					<p>©Easybank. All Rights Reserved</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
