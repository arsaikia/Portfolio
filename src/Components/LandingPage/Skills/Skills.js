import React, { Fragment } from 'react';
import styled from 'styled-components';

const SkillsContainer = styled.div`
	width: 70vw;
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

const BodyContainer = styled.div`width: 70%;`;

const Body = styled.text`
	width: 100%;
	height: 100%;
	padding-top: 50px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	font-size: 14px;
	font-weight: bold;
`;

const ItemContainer = styled.div`
	width: 166px;
	height: 206px;
	background-color: #66b032;
	align-items: center;
	justify-content: center;
`;

const IconContainer = styled.img`
	width: 80px;
	height: 80px;
	align-self: center;
`;

const Skills = () => {
	return (
		<Fragment>
			<SkillsContainer id='skills'>
				<Header>SKILLS</Header>
				<BodyContainer>
					<Body>
						<ItemContainer>
							<IconContainer src={process.env.PUBLIC_URL + '/react.png'} alt='Frame' />
						</ItemContainer>
					</Body>
				</BodyContainer>
			</SkillsContainer>
		</Fragment>
	);
};

export default Skills;
