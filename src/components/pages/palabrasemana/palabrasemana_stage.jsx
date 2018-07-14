import React, { Component } from 'react';
import PalabraSemana_Item from './palabrasemana_item.jsx'
import './palabrasemana.scss'

export class PalabraSemana_Stage extends Component {
    render() {
		
		const { description, title, palabras} = this.props.data;

		return (
			<div>
				<div className="title_heading">
					<h6>{description}</h6>
					<h3>{title}</h3>
				</div>
				<div className="box_stage_palabrasemana">
					{
						palabras.map((item, id) => {
							return <PalabraSemana_Item key={item.id} {...item}/>
						})
					}
				</div>
			</div>
		);
    }
}

export default PalabraSemana_Stage;