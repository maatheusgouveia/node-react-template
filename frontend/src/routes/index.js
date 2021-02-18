import React from 'react';
import { Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';

import Route from './Route';

export default function Routes() {
	return (
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/login" exact component={Login} />
		</Switch>
	);
}
