
import ResultCard from './ResultCard';
import './styles.css';
import foto from '../../assets/img/foto1.png';

function Search(){
    return(
        <div className='search-container'>
            <div className='search-content'>
                <h2>Encontre um perfil Github</h2>
                <form action="" className='form-content'>
                    <input type="text" placeholder='Usuário Github' />
                    <button>
                        <h5>Encontrar</h5>
                    </button>
                </form>
            </div>
            <ResultCard image={foto} profile='www.google.com' 
            followers='4500' Location='Alpinópolis' Name='João Paulo'></ResultCard>
        </div>
    )
}

export default Search;