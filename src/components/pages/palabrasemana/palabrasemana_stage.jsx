import React, { Component } from 'react';
import PalabraSemana_Item from './palabrasemana_item.jsx'
import './palabrasemana.scss'

export class PalabraSemana_Stage extends Component {
   render() {
		
		const { description, title, palabras} = this.props.data;

		return (
			<div>
				<div className="section-title">
					<h6>{description}</h6>
					<h2>{title}</h2>
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