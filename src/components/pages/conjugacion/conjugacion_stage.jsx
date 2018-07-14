import React, { Component } from 'react';
import Conjugacion_Item from './conjugacion_item.jsx'

export class Conjugacion_Stage extends Component {
    render() {

    	const { description, title, ejemplogramatica} = this.props.data;

      return (
			<div>
        		<div className="title_heading">
					<h6>{description}</h6>
					<h3>{title}</h3>
				</div>
        </div>
      );
    }
}

export default Conjugacion_Stage;