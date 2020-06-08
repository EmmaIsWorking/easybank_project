import React from 'react';

function Article({ img, alt, autor, title, description }) {
	return (
		<div className='ArticleContainer'>
			<div className='ArticleContainer__img'>
				<img src={img} alt={alt} />
			</div>
			<div className='ArticleContainer__description'>
				<h6>{autor}</h6>
				<h3>{title}</h3>
				<p> {description}</p>
			</div>
		</div>
	);
}

export default Article;
