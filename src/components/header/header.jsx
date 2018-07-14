import React, { Component } from 'react';
import './../../style/_header.scss'

class Header extends Component {
	render() {
		return (
			<header>
				<div className="container">
					<div className="row">
						<div className="col-6">
							<div className="logo">
								<h2><span className='type'>más</span>significado</h2>
							</div>
						</div>
						<div className="col-6">
							<ul className="nav justify-content-end">
								<li className="nav-item">
									<a className="nav-link active" href="#">Home</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">Palabras</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">Gramática</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">Conjugación</a>
								</li>
								<li className="nav-item">
									<button className='btnSearch'>
										<ion-icon name="search"></ion-icon>
									</button>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</header>
		);
	}
}
export default Header;