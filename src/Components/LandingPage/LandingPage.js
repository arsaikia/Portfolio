import React, { useState, Fragment } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import styled from 'styled-components';

import AboutMe from '../LandingPage/AboutMe/AboutMe';
import Skills from '../LandingPage/Skills/Skills';

// import { frame } from '../../Images/NavBarSeparator.svg';

const OuterContainer = styled.div`
	background-color: #cdcdcd;
	margin: 0px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Space = styled.div`
	width: 100%;
	height: 100px;
`;

const InnerContainer = styled.div`
	width: 75.5vw;
	height: 100vh;
	overflow: hidden;
	// background-color: turquoise;
`;

const NavContainer = styled.div`
	height: 8vh;
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	// background-color: purple;
`;

const NavItem = styled.div`
	font-family: '';
	font-size: 18px;
	font-weight: 800;
	line-height: 22px;
	color: #070707;

	cursor: pointer;
`;

const NavBarBottomLine = styled.div`
	display: flex;
	width: 100%;
	border: 1px solid #828282;
	transform: matrix(1, 0, 0, 1, 0, 0);
`;

const HeaderContainer = styled.div`
	height: 22vh;
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	// background-color: #fc7233;
`;

const HeaderItemLeft = styled.div`
	font-size: 40px;
	display: flex;
	align-items: flex-end;
	height: 150px;
	width: 200px;
	text-align: justify;
	text-align-last: justify;
	letter-spacing: 0.1em;
	font-weight: 700;
	// background-color: #4e78f7;
`;

const HeaderItemCenter = styled.div`
	height: 150px;
	width: 180px;
	display: flex;
	justify-content: center;
	align-self: center;
	// background-color: #4e78f7;
`;

const HeaderThreeText = styled.text`align-self: flex-end;`;

const HeaderItemRight = styled.div`
	width: 150px;
	padding-top: 130px;
	font-weight: bold;

	transform: rotate(270deg);
	// background-color: #4e78f7;
`;

const ImageContainer = styled.div`
	height: 60vh;
	width: 100%;
`;
const ProfileImage = styled.img`
	height: 100%;
	width: 100%;
`;

const LandingPage = (props) => {
	const scrollToTop = () => {
		scroll.scrollToTop();
	};
	return (
		<Fragment>
			<OuterContainer>
				<InnerContainer>
					<NavContainer>
						<NavItem>Home</NavItem>

						<NavItem>
							<Link activeClass='active' to='about' spy={true} smooth={true} offset={-70} duration={500}>
								About
							</Link>
						</NavItem>
						<NavItem>
							<Link activeClass='active' to='skills' spy={true} smooth={true} offset={-70} duration={500}>
								Skills
							</Link>
						</NavItem>
						<NavItem>Portfolio</NavItem>
						<NavItem>Contacts</NavItem>
					</NavContainer>
					<NavBarBottomLine />
					<HeaderContainer>
						<HeaderItemLeft>Arunabh Saikia</HeaderItemLeft>
						<HeaderItemCenter>
							<HeaderThreeText>UX | UI designer 28 years old, Chicago</HeaderThreeText>
						</HeaderItemCenter>
						<HeaderItemRight> ENG | ASSAMESE </HeaderItemRight>
					</HeaderContainer>
					<ImageContainer>
						<ProfileImage src={process.env.PUBLIC_URL + '/demo.png'} alt='Frame' />
					</ImageContainer>
				</InnerContainer>
				<AboutMe />
				<Space />
				<Skills />
				<Space />
				{/* Dummy Footer */}
				<img
					style={{
						width        : '80px',
						height       : '80px',
						marginLeft   : '90%',
						borderRadius : '80px',
						cursor       : 'pointer'
					}}
					src={process.env.PUBLIC_URL + '/toTop.gif'}
					onClick={scrollToTop}
				/>
				<Space />
				{/* Dummy Footer */}
			</OuterContainer>
		</Fragment>
	);
};

export default LandingPage;
