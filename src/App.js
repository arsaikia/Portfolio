import React, { Fragment } from 'react';
import GlobalFonts from './fonts/fonts';
import './index.css';
import './App.css';
import LandingPage from './Components/LandingPage/LandingPage.js';

function App () {
	return (
		<Fragment>
			<GlobalFonts />
			<LandingPage />
		</Fragment>
	);
}

export default App;
