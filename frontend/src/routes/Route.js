import { Route, Redirect } from 'react-router-dom';

export default function RouteWrapper({ component: Component, isPrivate, ...rest }) {
	const signed = false;

	if (!signed && isPrivate) {
		return <Redirect to="/login" />;
	}

	return <Route {...rest} render={props => <Component {...props} />} />;
}
