import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from "react-redux";

import Routes from '../routes/';
import configureStore from "../store/configureStore";

const store = configureStore();

ReactDOM.render(
	<div>
		<Provider store={store}>
			<div>
				<Routes />
			</div>
		</Provider>
	</div>,
	document.getElementById('app'));


