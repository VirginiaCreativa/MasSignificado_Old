import React, { Component } from 'react';
import Category from './category.jsx';

export class Categories extends Component {
    render() {
    	const palabras = this.props.data.categories;
    	// console.log(categories)
		return (
			<div>
				{
					categories.map((item, id) => {
						return <Category key={item.id} {...item}/>
					})
				}
			</div>
		);
    }
}

export default Categories;