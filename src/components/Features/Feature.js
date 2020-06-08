import React from 'react';

import Article from './Article';

//* Images
import apiIcon from '../../images/icon-api.svg';
import budgetingIcon from '../../images/icon-budgeting.svg';
import onlineIcon from '../../images/icon-online.svg';
import onBoardingIcon from '../../images/icon-onboarding.svg';

function Feature() {
	return (
		<section className='Feature'>
			<div className='Feature__Container'>
				<div className='Feature__Container__header'>
					<h2>Why choose EasyBank?</h2>
					<p>
						We leverage Open Banking to turn your bank account into
						your financial hub. Control your finances like never
						before.
					</p>
				</div>
				<div className='Feature__Container_ArticulesContainer'>
					<Article
						imgSrc={onlineIcon}
						imgAlt='Receive money in any currency with no fees'
					/>
					<Article 
					imgSrc={budgetingIcon} 
					imgAlt='Treat yourself without worrying about money'/>
					<Article 
					imgSrc={onBoardingIcon} 
					imgAlt='Take your Easybank crd wherever you go'/>
					<Article 
					imgSrc={apiIcon} 
					imgAlt='Our invite-only Beta accounts are now live!' />
				</div>
			</div>
		</section>
	);
}

export default Feature;
