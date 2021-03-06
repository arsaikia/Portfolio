import React, { Fragment } from 'react';

const Linkedin = ({ width = '40', height = '40' }) => {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' width={width} height={height}>
			<path
				fill='#0288D1'
				d='M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z'
			/>
			<path
				fill='#FFF'
				d='M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z'
			/>
		</svg>
	);
};

const GitHub = ({ width = '40', height = '40' }) => {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' width={width} height={height}>
			<path fill='#fff' d='M41,24c0,9.4-7.6,17-17,17S7,33.4,7,24S14.6,7,24,7S41,14.6,41,24z' />
			<path
				fill='#455a64'
				d='M21 41v-5.5c0-.3.2-.5.5-.5s.5.2.5.5V41h2v-6.5c0-.3.2-.5.5-.5s.5.2.5.5V41h2v-5.5c0-.3.2-.5.5-.5s.5.2.5.5V41h1.8c.2-.3.2-.6.2-1.1V36c0-2.2-1.9-5.2-4.3-5.2h-2.5c-2.3 0-4.3 3.1-4.3 5.2v3.9c0 .4.1.8.2 1.1L21 41 21 41zM40.1 26.4C40.1 26.4 40.1 26.4 40.1 26.4c0 0-1.3-.4-2.4-.4 0 0-.1 0-.1 0-1.1 0-2.9.3-2.9.3-.1 0-.1 0-.1-.1 0-.1 0-.1.1-.1.1 0 2-.3 3.1-.3 1.1 0 2.4.4 2.5.4.1 0 .1.1.1.2C40.2 26.3 40.2 26.4 40.1 26.4zM39.8 27.2C39.8 27.2 39.8 27.2 39.8 27.2c0 0-1.4-.4-2.6-.4-.9 0-3 .2-3.1.2-.1 0-.1 0-.1-.1 0-.1 0-.1.1-.1.1 0 2.2-.2 3.1-.2 1.3 0 2.6.4 2.6.4.1 0 .1.1.1.2C39.9 27.1 39.9 27.2 39.8 27.2zM7.8 26.4c-.1 0-.1 0-.1-.1 0-.1 0-.1.1-.2.8-.2 2.4-.5 3.3-.5.8 0 3.5.2 3.6.2.1 0 .1.1.1.1 0 .1-.1.1-.1.1 0 0-2.7-.2-3.5-.2C10.1 26 8.6 26.2 7.8 26.4 7.8 26.4 7.8 26.4 7.8 26.4zM8.2 27.9c0 0-.1 0-.1-.1 0-.1 0-.1 0-.2.1 0 1.4-.8 2.9-1 1.3-.2 4 .1 4.2.1.1 0 .1.1.1.1 0 .1-.1.1-.1.1 0 0 0 0 0 0 0 0-2.8-.3-4.1-.1C9.6 27.1 8.2 27.9 8.2 27.9 8.2 27.9 8.2 27.9 8.2 27.9z'
			/>
			<path
				fill='#455a64'
				d='M14.2,23.5c0-4.4,4.6-8.5,10.3-8.5c5.7,0,10.3,4,10.3,8.5S31.5,31,24.5,31S14.2,27.9,14.2,23.5z'
			/>
			<path
				fill='#455a64'
				d='M28.6 16.3c0 0 1.7-2.3 4.8-2.3 1.2 1.2.4 4.8 0 5.8L28.6 16.3zM20.4 16.3c0 0-1.7-2.3-4.8-2.3-1.2 1.2-.4 4.8 0 5.8L20.4 16.3zM20.1 35.9c0 0-2.3 0-2.8 0-1.2 0-2.3-.5-2.8-1.5-.6-1.1-1.1-2.3-2.6-3.3-.3-.2-.1-.4.4-.4.5.1 1.4.2 2.1 1.1.7.9 1.5 2 2.8 2 1.3 0 2.7 0 3.5-.9L20.1 35.9z'
			/>
			<path
				fill='#00bcd4'
				d='M24,4C13,4,4,13,4,24s9,20,20,20s20-9,20-20S35,4,24,4z M24,40c-8.8,0-16-7.2-16-16S15.2,8,24,8 s16,7.2,16,16S32.8,40,24,40z'
			/>
		</svg>
	);
};

const Mail = ({ width = '40', height = '40' }) => {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' width={width} height={height}>
			<path
				fill='#e0e0e0'
				d='M5.5,40.5h37c1.933,0,3.5-1.567,3.5-3.5V11c0-1.933-1.567-3.5-3.5-3.5h-37C3.567,7.5,2,9.067,2,11v26C2,38.933,3.567,40.5,5.5,40.5z'
			/>
			<path
				fill='#d9d9d9'
				d='M26,40.5h16.5c1.933,0,3.5-1.567,3.5-3.5V11c0-1.933-1.567-3.5-3.5-3.5h-37C3.567,7.5,2,9.067,2,11L26,40.5z'
			/>
			<path fill='#eee' d='M6.745,40.5H42.5c1.933,0,3.5-1.567,3.5-3.5V11.5L6.745,40.5z' />
			<path fill='#e0e0e0' d='M25.745,40.5H42.5c1.933,0,3.5-1.567,3.5-3.5V11.5L18.771,31.616L25.745,40.5z' />
			<path
				fill='#ca3737'
				d='M42.5,9.5h-37C3.567,9.5,2,9.067,2,11v26c0,1.933,1.567,3.5,3.5,3.5H7V12h34v28.5h1.5c1.933,0,3.5-1.567,3.5-3.5V11C46,9.067,44.433,9.5,42.5,9.5z'
			/>
			<path
				fill='#f5f5f5'
				d='M42.5,7.5H24H5.5C3.567,7.5,2,9.036,2,11c0,1.206,1.518,2.258,1.518,2.258L24,27.756l20.482-14.497c0,0,1.518-1.053,1.518-2.258C46,9.036,44.433,7.5,42.5,7.5z'
			/>
			<path
				fill='#e84f4b'
				d='M43.246,7.582L24,21L4.754,7.582C3.18,7.919,2,9.297,2,11c0,1.206,1.518,2.258,1.518,2.258L24,27.756l20.482-14.497c0,0,1.518-1.053,1.518-2.258C46,9.297,44.82,7.919,43.246,7.582z'
			/>
		</svg>
	);
};

const CV = ({ width = '40', height = '40' }) => {
	return (
		<svg
			id='Capa_1'
			enable-background='new 0 0 512 512'
			height={height}
			viewBox='0 0 512 512'
			width={width}
			xmlns='http://www.w3.org/2000/svg'>
			<g>
				<g>
					<g fill='#ffcbbe'>
						<path d='m151.487 511.869c.555.006 1.11.021 1.665.021h44.809c.138 0 .272-.017.41-.021z' />
						<path d='m140.287 510.361c-.65.307-1.32.581-2.016.799.671.065 1.344.116 2.016.172z' />
					</g>
					<g>
						<g>
							<g>
								<g>
									<g>
										<path
											d='m457.069 455.129v-362.86h-9.058c-9.869 0-17.869-8-17.869-17.869v-63.99l-1.859-1.859c-5.405-5.405-12.736-8.442-20.381-8.442h-247.702c-15.918 0-28.823 12.904-28.823 28.822v426.197c0 15.918 12.904 28.822 28.823 28.822h268.046c15.918.002 28.823-12.902 28.823-28.821z'
											fill='#f4fbff'
										/>
										<path
											d='m446.768 92.269v362.86c0 15.918-12.904 28.822-28.823 28.822h65.232c15.918 0 28.823-12.904 28.823-28.822v-350.921c0-4.159-.899-8.225-2.589-11.939z'
											fill='#e4f6ff'
										/>
										<path
											d='m503.558 83.827-75.275-75.275c-2.465-2.465-5.33-4.436-8.442-5.853v71.701c0 9.869 8 17.869 17.869 17.869h71.701c-1.417-3.112-3.388-5.977-5.853-8.442z'
											fill='#e28086'
										/>
									</g>
									<g>
										<g>
											<g>
												<path
													d='m276.043 172.542h-76.629c-8.295 0-15.02-6.724-15.02-15.02v-95.018c0-8.295 6.724-15.019 15.02-15.019h76.629c8.295 0 15.02 6.724 15.02 15.019v95.019c0 8.294-6.725 15.019-15.02 15.019z'
													fill='#bed8fb'
												/>
												<path
													d='m237.729 124.566c-24.292 0-44.969 15.454-52.751 37.065 1.789 6.295 7.568 10.911 14.436 10.911h76.629c6.868 0 12.647-4.616 14.436-10.911-7.781-21.611-28.458-37.065-52.75-37.065z'
													fill='#4a80aa'
												/>
												<circle cx='237.729' cy='106.278' fill='#365e7d' r='23.924' />
											</g>
										</g>
									</g>
								</g>
							</g>
							<g>
								<g>
									<path
										d='m459.524 255.935h-275.67c-4.267 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h275.67c4.267 0 7.726 3.459 7.726 7.726s-3.459 7.726-7.726 7.726z'
										fill='#407093'
									/>
								</g>
								<g>
									<path
										d='m459.524 299.912h-275.67c-4.267 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h275.67c4.267 0 7.726 3.459 7.726 7.726s-3.459 7.726-7.726 7.726z'
										fill='#407093'
									/>
								</g>
							</g>
							<g>
								<g>
									<g>
										<path
											d='m459.524 358.81h-169.574c-4.267 0-7.726-3.459-7.726-7.726s3.458-7.726 7.726-7.726h169.573c4.267 0 7.726 3.459 7.726 7.726s-3.458 7.726-7.725 7.726z'
											fill='#407093'
										/>
									</g>
								</g>
								<g>
									<g>
										<path
											d='m459.524 402.787h-169.574c-4.267 0-7.726-3.459-7.726-7.726s3.458-7.726 7.726-7.726h169.573c4.267 0 7.726 3.459 7.726 7.726s-3.458 7.726-7.725 7.726z'
											fill='#407093'
										/>
									</g>
								</g>
							</g>
							<g>
								<g>
									<g>
										<g>
											<g>
												<g>
													<g>
														<g>
															<g>
																<g>
																	<path
																		d='m221.817 343.892-76.332-.017c-2.937-.001-5.664-.898-7.922-2.434l-45.336-.009c-4.677-.001-7.673-4.4-6.693-8.466-.521-.241.082.038-.439-.204l-11.379 14.45c-6.924 8.793-17.499 13.925-28.691 13.925h-16.899v127.945h31.868c4.629 0 9.215.88 13.516 2.593l30.141 12.008c15.938 5.433 32.662 8.206 49.501 8.206h44.809c7.435 0 13.679-5.099 15.425-11.991l-.018-.006-.67-2.603c-.949-3.687-3.565-6.721-7.073-8.201-4.417-1.864-7.333-6.142-7.454-10.934l-.21-8.263h10.199c8.788 0 15.912-7.124 15.912-15.912v-10.175c0-8.788-7.124-15.912-15.912-15.912h8.105c8.788 0 15.912-7.124 15.912-15.912v-10.175c0-8.788-7.124-15.912-15.912-15.912h5.552c8.788 0 15.912-7.124 15.912-15.912v-10.175c0-8.79-7.124-15.914-15.912-15.914z'
																		fill='#ffddce'
																	/>
																	<path
																		d='m24.107 331.187c-13.314 0-24.107 10.793-24.107 24.107v132.489c0 13.314 10.793 24.107 24.107 24.107 13.314 0 24.107-10.793 24.107-24.107v-132.489c0-13.314-10.793-24.107-24.107-24.107z'
																		fill='#4a80aa'
																	/>
																</g>
															</g>
														</g>
													</g>
												</g>
											</g>
										</g>
									</g>
								</g>
							</g>
						</g>
						<g fill='#ffcbbe'>
							<path d='m131.376 329.764v-19.464c-18.055 0-35.112 8.279-46.282 22.464-3.547 4.504-.339 11.115 5.394 11.116l54.999.011-.003-.014c-7.792-.003-14.108-6.321-14.108-14.113z' />
							<path d='m221.817 343.892-67.401-.015-.05.012c0 10.759 8.722 19.481 19.481 19.482l47.971.002c7.169 0 13.227 4.742 15.217 11.259.45-1.472.695-3.034.695-4.653v-10.175c-.001-8.788-7.125-15.912-15.913-15.912z' />
							<path d='m149.564 385.884c0 10.759 8.722 19.481 19.481 19.482l47.971.002c6.709 0 12.445 4.154 14.784 10.03.242-1.102.378-2.244.378-3.419v-10.175c0-8.788-7.124-15.912-15.912-15.912z' />
							<path d='m208.16 427.891-66.827-.006c0 10.759 8.722 19.481 19.481 19.482l47.971.002c6.785 0 12.57 4.251 14.857 10.232.272-1.165.43-2.374.43-3.622v-10.175c0-8.789-7.124-15.913-15.912-15.913z' />
							<path d='m197.961 469.891-67.009-.017c0 10.759 8.722 19.481 19.481 19.482l47.971.002c6.899 0 12.758 4.397 14.964 10.536.318-1.255.505-2.562.505-3.915v-10.175c0-8.789-7.124-15.913-15.912-15.913z' />
						</g>
					</g>
				</g>
			</g>
		</svg>
	);
};

export { Linkedin, GitHub, Mail, CV };
