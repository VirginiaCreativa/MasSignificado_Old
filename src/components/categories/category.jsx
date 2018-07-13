import React, { Component } from 'react';
import PalabraSemana from './palabrasemana/palabrasemana.jsx';


export class Category extends Component {
    render() {
    	// const mainTitle_PalabraSemana = this.props.categories.title;
    	// const mainSubtitle_PalabraSemana = this.props.categories.description;
		return (
			<div>
				<div className="title_heading">
					<h6>{this.props.description}</h6>
					<h3>{this.props.title}</h3>
				</div>
				<div className="box_items">palabras
					<PalabraSemana palabrasema={this.props.palabra}/>
				</div>
			</div>
		);
    }
}

export default Category;
