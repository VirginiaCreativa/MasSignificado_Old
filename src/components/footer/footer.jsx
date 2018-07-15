import React, { Component } from 'react';
import './footer.scss'


class Footer extends Component {
	render() {
		return (
			<div>
				<footer>
					<div className="container">
						<div className="section_content">
							<div className="row justify-content-center">
								<div className="col-xl-4 col-lg-4 col-md-4 col-12">
									<h5>MI PERFÍL</h5>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
									<div className="footer_icons">
										<a href="#"><ion-icon name="logo-facebook"></ion-icon></a>
										<a href="#"><ion-icon name="logo-twitter"></ion-icon></a>
										<a href="#"><ion-icon name="logo-linkedin"></ion-icon></a>
										<a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
									</div>
								</div>
								<div className="offset-xl-1 col-xl-3 col-lg-3 col-md-4 col-12">
									<h5>CONTACTO</h5>
									<ul className="list-unstyled">
										<li>
											<p>+57(321)7979160</p>
										</li>
										<li>
											<p>virginiavelasquezsoto@gmail.com</p>
										</li>
										<li>
											<p>Rionegro, El Tablacito</p>
										</li>
										<li>
											<p>Colombia</p>
										</li>
									</ul>
								</div>
								<div className="col-xl-4 col-lg-4 col-md-4 col-12">
									<h5>INSTAGRAM</h5>
									<ul className="instagram-img list-unstyled">
										<li><a href="#"><img alt="" src="http://www.campinasegoviana.es/archivos/not-available.png"  className=" img-fluid"/></a></li>
										<li><a href="#"><img alt="" src="http://www.campinasegoviana.es/archivos/not-available.png"  className=" img-fluid"/></a></li>
										<li><a href="#"><img alt="" src="http://www.campinasegoviana.es/archivos/not-available.png"  className=" img-fluid"/></a></li>
									</ul>
								</div>
							</div>
						</div>
						<div className="footer_bottom">
							<div className="row">
								<div className="col-12">
									<p>All Rights Reserved © Designed/FrontEnd By Virginia.Creativa</p>
								</div>
							</div>
						</div>
					</div>
				</footer>
			</div>
		);
	}
}
export default Footer