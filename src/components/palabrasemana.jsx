import React, { Component } from 'react';
import PropTypes from"prop-types";

class PalabraSemana extends Component {
  
  constructor(props)  {
    super(props)
  }
   render() {

      const { title, abrev, definition, imageSrc, topImage } = this.props;
      const sizeTopImage = {
        top: topImage + 'px'
      }

      return (
      <div className='palabrasemana'>
      	<a href='' onMouseOver={this.handleClick} >
          <div className="imagen">
            <div className='img-hover'><i className="fas fa-play"></i></div>
            <img src={imageSrc} className="img-fluid" alt={title} style={sizeTopImage}/>
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
  abrev: PropTypes.oneOf(['tr', 'adj', 'deter', 'f', 'm', 'prnl', 'pron', 'subj', 'prep', 'irreg', 'intr', 'tr y prnl'])
};

export default PalabraSemana;