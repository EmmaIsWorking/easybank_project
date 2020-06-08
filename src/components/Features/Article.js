import React from 'react';

function Article({ imgSrc, imgAlt }) {
	return (
		<div className='FeatureArticleContainer'>
			<div className='FeatureArticleContainer__Img'>
				<img src={imgSrc} alt={imgAlt} />
			</div>
			<div className='FeatureArticleContainer__Description'>
				<h3>Lorem ipsum</h3>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Sed alias incidunt officia deserunt magnam, sint nesciunt
					enim animi. Ducimus quis molestias dolorem dolores
					perspiciatis eligendi, beatae vel. Ipsam, ab maxime?
				</p>
			</div>
		</div>
	);
}

export default Article;
