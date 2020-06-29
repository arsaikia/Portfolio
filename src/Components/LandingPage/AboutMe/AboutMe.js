import React, { Fragment } from 'react';
import styled from 'styled-components';

const AboutMeContainer = styled.div`
	width: 90vw;
	height: 600px;
	background-color: #ffffff;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	overflow-x: hidden;
`;

const Header = styled.text`
	display: flex;
	font-family: '';
	font-size: 26px;
	font-weight: bold;
	line-height: 24px;
	color: #070707;
`;

const Body = styled.text`
	max-width: 500px;
	padding-top: 50px;
	display: flex;

	font-family: '';
	font-size: 18px;
	line-height: 22px;
	text-align: justify;
	color: #070707;
`;

const AboutMe = () => {
	return (
		<Fragment>
			<AboutMeContainer id='about'>
				<Header>About Me</Header>
				<Body>
					Dolor mollit sit consequat duis eu pariatur et commodo ut culpa non eiusmod. Minim exercitation
					fugiat ullamco anim laboris. Fugiat incididunt aute occaecat dolor consequat ipsum culpa elit duis
					amet duis. Occaecat ex labore ullamco ullamco. Id nisi laboris in anim in. Reprehenderit velit
					eiusmod ipsum cupidatat conr pariatur exercitation laborum officia sint in dolor adipisicing
					deserunt in ader.
				</Body>
			</AboutMeContainer>
		</Fragment>
	);
};

export default AboutMe;
