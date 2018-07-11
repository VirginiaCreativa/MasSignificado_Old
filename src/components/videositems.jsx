import React, { Component } from 'react';
import video_item from './../style/_videositems.scss'
import PropTypes from"prop-types";

class VideosItems extends Component {

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
         <div className='video_item'>
         	<a href='' onMouseOver={this.handleClick} >
               <div class="imagen">
                  <div class='img-hover'><i class="fas fa-play"></i></div>
   	            <img src={imageSrc} class="img-fluid" alt={title} />
               </div>
               <article>
   	            <h6>{title}</h6>
   	            <p><span class="abrev">{abrev}.</span> {definition}</p>
               </article>
         	</a>
         </div>
      );

   }
}

VideosItems.propTypes = {
  title: PropTypes.string,
  definition: PropTypes.string,
  imageSrc: PropTypes.string,
  abrev: PropTypes.oneOf(['tr', 'adj', 'deter', 'f', 'm', 'prnl', 'pron', 'subj', 'prep', 'irreg', 'intr'])
};

export default VideosItems;