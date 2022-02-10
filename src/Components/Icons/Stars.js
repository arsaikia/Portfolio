import React, { Fragment } from 'react';

const FilledStar = ({ width = '22', height = '20' }) => {
	return (
		<svg width={width} height={height} viewBox='0 0 22 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M9.79329 0.85958C10.0931 -0.0606967 11.3951 -0.0606959 11.6949 0.859581L13.446 6.23398C13.5801 6.64561 13.9639 6.92418 14.3968 6.92418H20.0576C21.0269 6.92418 21.4293 8.16521 20.6443 8.73398L16.0694 12.0486C15.7179 12.3033 15.5709 12.7555 15.7053 13.1682L17.4539 18.5349C17.7539 19.4557 16.7006 20.2227 15.9164 19.6544L11.3308 16.3321C10.9808 16.0784 10.5074 16.0784 10.1574 16.3321L5.57183 19.6544C4.78757 20.2227 3.73428 19.4557 4.0343 18.5348L5.78288 13.1682C5.91733 12.7555 5.77025 12.3033 5.41879 12.0486L0.843917 8.73398C0.0589104 8.16521 0.461241 6.92418 1.43064 6.92418H7.09139C7.52432 6.92418 7.90808 6.64561 8.0422 6.23398L9.79329 0.85958Z'
				fill='#070707'
			/>
		</svg>
	);
};

const EmptyStar = ({ width = '22', height = '20' }) => {
	return (
		<svg width={width} height={height} viewBox='0 0 22 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M10.1817 0.85958C10.4816 -0.0606967 11.7835 -0.0606959 12.0833 0.859581L13.8344 6.23398C13.9685 6.64561 14.3523 6.92418 14.7852 6.92418H20.446C21.4154 6.92418 21.8177 8.16521 21.0327 8.73398L16.4578 12.0486C16.1064 12.3033 15.9593 12.7555 16.0937 13.1682L17.8423 18.5349C18.1423 19.4557 17.089 20.2227 16.3048 19.6544L11.7192 16.3321C11.3692 16.0784 10.8958 16.0784 10.5458 16.3321L5.96025 19.6544C5.176 20.2227 4.12271 19.4557 4.42273 18.5348L6.1713 13.1682C6.30576 12.7555 6.15868 12.3033 5.80722 12.0486L1.23234 8.73398C0.447338 8.16521 0.849669 6.92418 1.81906 6.92418H7.47982C7.91274 6.92418 8.2965 6.64561 8.43062 6.23398L10.1817 0.85958Z'
				fill='#E5E5E5'
			/>
		</svg>
	);
};

export { FilledStar, EmptyStar };