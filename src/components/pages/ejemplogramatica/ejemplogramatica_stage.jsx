import React, { Component } from 'react';
import EjemploGramatica_Item from './ejemplogramatica_item.jsx'
import './ejemplogramatic.scss'

export class EjemploGramatica_Stage extends Component {
  render() {

  	const { description, title, ejemplogramatica} = this.props.data;
    
    return (
      <div>
        <div className="section-title">
          <h6>{description}</h6>
          <h2>{title}</h2>
        </div>
        <div className="box_stage_ejemplogramatic">
          {
            ejemplogramatica.map((item, id) => {
              return <EjemploGramatica_Item key={item.id} {...item}/>
            })
          }
        </div>
      </div>
    );
  }
}

export default EjemploGramatica_Stage;