import React, {Component}  from 'react';
import HomeLayout from './../components/pages/home/home_layout.jsx';
import Header from './../components/header/header.jsx';
import Footer from './../components/footer/footer.jsx';
import PalabraSemana_Stage from './../components/pages/palabrasemana/palabrasemana_stage.jsx';
import EjemploGramatica_Stage from './../components/pages/ejemplogramatica/ejemplogramatica_stage.jsx';
import Conjugacion_Stage from './../components/pages/conjugacion/conjugacion_stage.jsx';
import data from './../servivces/api_home.json';


class Home extends Component {
	render() {
		return(
			<HomeLayout>
				<Header/>
				<div className="container">
					<div className="space-box">
						<PalabraSemana_Stage  data={data.categories[0]}/>
					</div>
					<div className="space-box">
						<EjemploGramatica_Stage data={data.categories[1]}/>
					</div>
					<div className="space-box">
						<Conjugacion_Stage data={data.categories[2]}/>
					</div>
				</div>
				<Footer/>
			</HomeLayout>
		)
	}
}

export default Home;