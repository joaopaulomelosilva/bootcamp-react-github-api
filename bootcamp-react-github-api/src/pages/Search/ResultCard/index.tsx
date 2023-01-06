
import './styles.css';


type Props = {
    image: string,
    profile: string,
    followers: string,             
    Location: string,             
    Name: string,
}

function ResultCard({image, profile, followers, Location, Name} : Props){
    return(
            <div className='show-content'>
                <div className='image-container'>
                    <img src={image} alt="" />
                </div>
                <div className='information-container'>
                    <h3>Informações</h3>
                    <div className='information-content'>
                        <div className='information'>
                            <h4>Perfil: </h4>
                            <a href={profile}>{profile}</a>
                        </div>
                        <div className='information'>
                            <h4>Seguidores: </h4>
                            <p>{followers}</p>
                        </div>
                        <div className='information'>
                            <h4>Localidade: </h4>
                            <p>{Location}</p>
                        </div>
                        <div className='information'>
                            <h4>Nome: </h4>
                            <p>{Name}</p>
                        </div>
                    </div>
                </div>
            </div>

    )
}

export default ResultCard;