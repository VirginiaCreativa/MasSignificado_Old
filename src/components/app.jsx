import React, {Component}  from 'react';
import Main from './main.jsx'
import PalabraSemana from './palabrasemana.jsx';
import DataMain from './json/main.json';

class App extends Component {
	render() {
		const primos = ['Virginia', 'Felipe', 'Santiago' ]
		return(
			<div>
				<Main data={DataMain}/>
			</div>
		)
	}
}

export default App;