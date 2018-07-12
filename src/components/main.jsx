import React, { Component, PropTypes } from 'react';
import PalabraSemana from './palabrasemana.jsx';


export class Main extends Component {
    render() {

    	const mainTitle_PalabraSemana = this.props.data.categories[0].title;
    	const mainSubtitle_PalabraSemana = this.props.data.categories[0].description;
    	const palabras = this.props.data.categories[0].palabra;

		return (
			<div>
				<div className="title_main">
					<h6>{mainSubtitle_PalabraSemana}</h6>
					<h1>{mainTitle_PalabraSemana}</h1>
				</div>
				<div className="box_PalabraSemana">
					{
						palabras.map((item, id) => {
							return <PalabraSemana key={item.id} {...item}/>
						})
					}
				</div>
			</div>
		);
    }
}

export default Main;