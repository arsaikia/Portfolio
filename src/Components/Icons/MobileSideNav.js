import React from 'react';

const Cross = ({ width = '23', height = '23' }) => {
	return (
		<svg width={width} height={height} viewBox='0 0 23 23' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<rect x='2.68701' width='27.3715' height='3.8' transform='rotate(45 2.68701 0)' fill='#828282' />
			<rect
				x='0.831299'
				y='19.5566'
				width='27.3715'
				height='3.8'
				transform='rotate(-45 0.831299 19.5566)'
				fill='#828282'
			/>
		</svg>
	);
};

export { Cross };
