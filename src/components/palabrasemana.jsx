import React, { Component } from 'react';
import palabrasemana_style from './../style/_palabrasemana.scss'
import PropTypes from"prop-types";

class PalabraSemana extends Component {

   state = {
      definition: 'Acordar, pactar, decidir conjuntamente',
      title: 'Concertar',
      abrev: 'tr'
   }

   handleClick = (ev) => {
      console.log(`this is: ${this.props.title} + ${this.props.imageSrc}` );
      this.setState({
        definition: 'Concordar o combinar una cosa con otra',
        abrev: 'intr'
      })
   } 
   render() {

      const {  imageSrc } = this.props;
      const { title, abrev, definition } = this.state;

      return (
      <div className='palabrasemana'>
      	<a href='' onMouseOver={this.handleClick} >
        <div className="imagen">
          <div className='img-hover'><i className="fas fa-play"></i></div>
          <img src={imageSrc} className="img-fluid" alt={title} />
        </div>
        <article>
          <h6>{title}</h6>
          <p><span className="abrev">{abrev}.</span> {definition}</p>
        </article>
      	</a>
      </div>
      );

   }
}

PalabraSemana.propTypes = {
  title: PropTypes.string,
  definition: PropTypes.string,
  imageSrc: PropTypes.string,
  abrev: PropTypes.oneOf(['tr', 'adj', 'deter', 'f', 'm', 'prnl', 'pron', 'subj', 'prep', 'irreg', 'intr'])
};

export default PalabraSemana;