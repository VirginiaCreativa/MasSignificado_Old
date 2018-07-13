import React, {Component}  from 'react';
import HomeLayout from './../components/layouts/home/home_layout.jsx';
import PalabraSemana_Area from './../components/palabrasemana/palabrasemana_area.jsx';
import EjemploGramatica_Area from './../components/ejemplogramatica/ejemplogramatica_area.jsx';
import Conjugacion_Area from './../components/conjugacion/conjugacion_area.jsx';
import data from './../servivces/api.json';


class Home extends Component {
	render() {
		return(
			<HomeLayout>
				<PalabraSemana_Area  data={data.categories[0]}/>
				<EjemploGramatica_Area data={data.categories[1]}/>
				<Conjugacion_Area data={data.categories[2]}/>
			</HomeLayout>
		)
	}
}

export default Home;