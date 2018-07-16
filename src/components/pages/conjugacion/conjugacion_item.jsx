import React, { Component } from 'react';

class Conjugacion_Item extends Component {
   render() {

      const { tema, yo, tu, persona, nosotros, vosotros, ellos } = this.props;

      return (
      <div className='conjugacion'>
      	<div className="item_verbo">
          <h3>{tema}</h3>
          <div className="item_verbo">
          <p className="graytxt">{yo}</p>
          <p className="graytxt">{tu}</p>
          <p className="graytxt">{persona}</p>
          <p className="graytxt">{nosotros}</p>
          <p className="graytxt">{vosotros}</p>
          <p className="graytxt">{ellos}</p>
        </div>
        </div>
      </div>
      );
   }
}

export default Conjugacion_Item;