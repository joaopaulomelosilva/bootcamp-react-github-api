import { Link } from 'react-router-dom';
import './styles.css'

function Home(){
    return(
        <div className='home-container'>
            <h1 className='content-style'>Desafio Github API</h1>
            <h5 className='content-style'>DevSuperior - Escola de programação</h5>
            <div className='btn-content content-style'>
                <button><Link to="/search" className='btn-link'><h4>Começar</h4></Link></button>
            </div>
        </div>
    )
}

export default Home;