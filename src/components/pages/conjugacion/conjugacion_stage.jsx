import React, { Component } from 'react';
import Conjugacion_Item from './conjugacion_item.jsx'

export class Conjugacion_Stage extends Component {
  render() {
  
  const { description, title, palabras} = this.props.data;

  return (
    <div>
      <div className="section-title">
        <h6 >{description}</h6>
        <h2>{title}</h2>
      </div>
      <div className="box_stage_palabrasemana">
       {/* {
          palabras.map((item, id) => {
            return <Conjugacion_Item key={item.id} {...item}/>
          })
        }*/}
      </div>
    </div>
  );
 }
}

export default Conjugacion_Stage;