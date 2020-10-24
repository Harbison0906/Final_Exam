import * as React from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import Compose from './views/Compose';
import Admin from './views/Admin';
import Details from './views/Details';
import Login from './views/Login';
import Register from './views/Register';





export default class App extends React.Component {


	render() {
		return (
			<BrowserRouter>
				<Link to="/">Home</Link>
				<Link to="/compose">Compose</Link>
				<Link to="/login">Login</Link>
				<Link to="/register">Register</Link>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/details/:id" component={Details} />
					<Route exact path="/admin/:id" component={Admin} />
					<Route exact path="/compose" component={Compose} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/register" component={Register} />
				</Switch>
			</BrowserRouter>

		)
	}

}
