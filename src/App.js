import './App.css';
// import  {  Suspense } from 'react';
import ServerEvent from './EventSource';
// import Cards from './CardsHook';
import React from 'react';
// const Cards = React.lazy(() => import('./CardsHook'));

class App extends React.Component {
	// componentDidMount() {
	// 	this.setState({ flag: true });
	// }

	render() {
		return (
			<div>
				HELLO EVENT SOURCES
				<ServerEvent />
			</div>
		);
	}
}

export default App;
