import React from 'react';
import Article from './Article';

import currencyPic from '../../images/image-currency.jpg';
import planePic from '../../images/image-plane.jpg';
import restaurantPic from '../../images/image-restaurant.jpg';
import confettiPic from '../../images/image-confetti.jpg';

function Articles() {
	return (
		<section className='Articles'>
			<div className='Articles__container'>
				<div className='Articles__header'>
					<h2>Latest Articles</h2>
				</div>
				<div className='Articles__container__posts'>
					<Article
						img={currencyPic}
						alt='currencyPic'
						autor='By Claire Robinson'
						title='Receive money in any currency with no fees'
						description='The world is getting smaller and we´re becoming more mobile. So why should you be forced to only receive money in a single...'
					/>
					<Article
						img={restaurantPic}
						alt='restaurantPic'
						autor='By Wilson Hutton'
						title='Treat yourself without worrying about money'
						description='Our simple budgeting feature allows you yo separate out your spending and set realistic limits each month. That means you...'
					/>
					<Article
						img={planePic}
						alt='planePic'
						autor='By Wilson Hutton'
						title='Take your Easybank crd wherever you go'
						description='We want you yo enjoy your travels. This is why we don´t charge any fees on purchases while your´re abroad. We´ll even show you...'
					/>
					<Article
						img={confettiPic}
						alt='confettiPic'
						autor='By Wilson Hutton'
						title='Our invite-only Beta accounts are now live!'
						description='After a lot hard work by the whole team, we´re excited to launch our closed beta. It´s easy yo request an invite through the site...'
					/>
				</div>
			</div>
		</section>
	);
}

export default Articles;
