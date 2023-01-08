import axios from 'axios';
import ResultCard from './ResultCard';
import { useState } from 'react';
import SearchInfoLoader from './SearchInfoLoader';

import './styles.css';


type Username = {
    login: string;
}

type Profile = {
        avatar_url: string;
        url: string;
        location: string;
        name: string;
        followers: string;
}


function Search(){

    const [profile, setProfile] = useState<Profile>();

    const [username, setUsername] = useState<Username>({
        login: '',
    });

    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;

        setUsername({...username, [name]: value});
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setIsLoading(true);
        axios.get(`https://api.github.com/users/${username?.login}`)
        .then((response) => {
            setProfile(response.data);
        }).catch((error) => {
            setProfile(undefined);
        } ).finally(() => {
            setIsLoading(false);
        })
    }

    return(
        <div className='search-container'>
            <div className='search-content'>
                <h2>Encontre um perfil Github</h2>
                <form onSubmit={handleSubmit} className='form-content'>
                    <input type="text" 
                    name='login' 
                    value={username.login}
                    placeholder='Usuário Github'
                    className='input-text-content'
                    onChange={handleChange}/>

                    <button type='submit'>
                        <h5>Encontrar</h5>
                    </button>
                </form>
            </div>
            {isLoading ? <SearchInfoLoader></SearchInfoLoader> : (profile &&
                <>
                <ResultCard image={profile.avatar_url} profile={profile.url} 
                followers={profile.followers} Location={profile.location} Name={profile.name}></ResultCard>
                </>
                )
            }
        </div>
    )
}

export default Search;