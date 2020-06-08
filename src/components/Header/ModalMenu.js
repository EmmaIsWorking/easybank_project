import React from 'react';
import Modal from 'react-modal';

//My components
import Nav from './Nav';

function ModalMenu({ modalOpen, setModalOpen }) {
	return (
		<Modal
			isOpen={modalOpen}
			onRequestClose={setModalOpen}
			className='modal'
			overlayClassName='overlayModal'
			ariaHideApp={false}
		>
			<Nav />
		</Modal>
	);
}

export default ModalMenu;
