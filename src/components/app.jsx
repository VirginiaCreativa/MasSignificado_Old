import React, {Component}  from 'react';
import Main from './main.jsx'
import PalabraSemana from './palabrasemana.jsx';
import DataMain from './json/main.json';

class App extends Component {
	render() {
		const primos = ['Virginia', 'Felipe', 'Santiago' ]
		return(
			<div>
				<div id="wrap-content">
					<div className="container">
						<Main data={DataMain}/>
					</div>
				</div>
			</div>
		)
	}
}

export default App;