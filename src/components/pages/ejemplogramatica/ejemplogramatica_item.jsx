import React, { Component } from 'react';
import PropTypes from"prop-types";

class EjemploGramatica_Item extends Component {
   render() {

      const { incorrect, correct} = this.props;

      return (
      <div className='ejemplogramatica_item'>
      	<ul className='list-unstyled'>
          <li className="incorrect"><ion-icon name="close"></ion-icon>{incorrect}
          </li>
          <li className="correct"><ion-icon name="checkmark"></ion-icon>{correct}
          </li>
        </ul>

      </div>
      );
   }
}

EjemploGramatica_Item.propTypes = {
  incorrect: PropTypes.string,
  correct: PropTypes.string,
};

export default EjemploGramatica_Item;