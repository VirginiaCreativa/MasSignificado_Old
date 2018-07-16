import React, { Component } from 'react';

class Conjugacion_Item extends Component {
   render() {

      const { tema, yo, tu, persona, nosotros, vosotros, ellos } = this.props;

      return (
      <div className='conjugacion'>
      	<div className="items_verbos">
          <h4 className='item_indicativo'>{tema}</h4>
          <div className="item_verbo">
            <p className="verbtxt">{yo}</p>
            <p className="verbtxt">{tu}</p>
            <p className="verbtxt">{persona}</p>
            <p className="verbtxt">{nosotros}</p>
            <p className="verbtxt">{vosotros}</p>
            <p className="verbtxt">{ellos}</p>
          </div>
        </div>
      </div>
      );
   }
}

export default Conjugacion_Item;