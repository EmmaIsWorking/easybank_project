import React, { useState } from 'react';

import Nav from './Nav';
import BtnRequest from './BtnRequest';
import ModalMenu from './ModalMenu';
import Logo from '../Logo/logo'

// import Logo from '../../images/logo.svg';
import burgerIcon from '../../images/icon-hamburger.svg';
import closeIcon from '../../images/icon-close.svg';

function Header() {
	const [modalOpen, setModalOpen] = useState(false);
	const openModal = () => {
		setModalOpen(!modalOpen);
	};

	return (
		<header className='Header'>
			<div className='Header__container'>
				<div className='Header__container__logoContainer'>
					<Logo color='hsl(233, 26%, 24%)' />
				</div>
				<ModalMenu modalOpen={modalOpen} setModalOpen={setModalOpen} />
				<div className='Header__container__navContainer'>
					<Nav />
				</div>
				{/* //*burger */}
				<button onClick={openModal} className='Modal'>
					<img src={modalOpen ? closeIcon : burgerIcon} alt='' />
				</button>
				<div className='BtnContainer'>
					<BtnRequest />
				</div>
			</div>
		</header>
	);
}

export default Header;
