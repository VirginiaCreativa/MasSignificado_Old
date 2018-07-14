import React, {Component}  from 'react';
import HomeLayout from './../components/pages/home/home_layout.jsx';
import PalabraSemana_Stage from './../components/pages/palabrasemana/palabrasemana_stage.jsx';
import EjemploGramatica_Stage from './../components/pages/ejemplogramatica/ejemplogramatica_stage.jsx';
import Conjugacion_Stage from './../components/pages/conjugacion/conjugacion_stage.jsx';
import data from './../servivces/api.json';


class Home extends Component {
	render() {
		return(
			<HomeLayout>
				<PalabraSemana_Stage  data={data.categories[0]}/>
				<EjemploGramatica_Stage data={data.categories[1]}/>
				<Conjugacion_Stage data={data.categories[2]}/>
			</HomeLayout>
		)
	}
}

export default Home;