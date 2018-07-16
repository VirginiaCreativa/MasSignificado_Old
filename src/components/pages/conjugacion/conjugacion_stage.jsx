import React, { Component } from 'react';
import Conjugacion_Item from './conjugacion_item.jsx'
import './conjugacion.scss'

export class Conjugacion_Stage extends Component {
  render() {
  
  const { description, palabra, title, verbos} = this.props.data;

  return (
    <div>
      <div className="section-title">
        <h6 >{description}</h6>
        <h2>{title}</h2>
      </div>
      <div className="item_title_palabra">
        <h4><ion-icon name="return-right"></ion-icon>{palabra}</h4>
      </div>
      <div className="box_stage_conjugacion">
        <div className="item_person">
          <p className="graytxt space">&ensp;</p>
          <p className="graytxt">Yo</p>
          <p className="graytxt">Tú</p>
          <p className="graytxt">Él/Ella/Usted</p>
          <p className="graytxt">Nosotros</p>
          <p className="graytxt">Vosotros</p>
          <p className="graytxt">Ellos/Ellas/Ustedes</p>
        </div>
        {
          verbos.map((item, id) => {
            return <Conjugacion_Item key={item.id} {...item}/>
          })
        }
      </div>
    </div>
  );
 }
}

export default Conjugacion_Stage;