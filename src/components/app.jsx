import React, {Component}  from 'react';
import VideosItems from './videositems.jsx';

class App extends Component {
	render() {
		return(
			<div>
				<VideosItems imageSrc='https://source.unsplash.com/collection/356862/' />
			</div>
		)
	}
}

export default App;