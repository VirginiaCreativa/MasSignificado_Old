import React, { Component } from 'react';
import PalabraSemana_Single from './palabrasemana_area_single.jsx'

export class Categories extends Component {
    render() {
		
		const { description, title, palabra} = this.props.data;
		console.log(palabra)

		return (
			<div>
				<div className="title_heading">
					<h6>{description}</h6>
					<h3>{title}</h3>
				</div>
				<div className="box_items">
					{
						palabra.map((item, id) => {
							return <PalabraSemana_Single key={item.id} {...item}/>
						})
					}
				</div>
			</div>
		);
    }
}

export default Categories;