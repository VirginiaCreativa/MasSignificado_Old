import React, {Component}  from 'react';
import PalabraSemana from './palabrasemana.jsx';

class App extends Component {
	render() {
		const primos = ['Virginia', 'Felipe', 'Santiago' ]
		return(
			<div>
				<PalabraSemana imageSrc='https://source.unsplash.com/collection/356862/' />
			</div>
		)
	}
}

export default App;