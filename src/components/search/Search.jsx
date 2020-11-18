import React, {useState} from 'react';
import {Container, InputField, Button, Form} from './Search.styles';
import Results from '../results/Results';


const SearchMovies = () => {
    const [searching, setSearching] = useState(false);
    const [message, setMessage] = useState(null);
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const searchMovies = async(event) => {
        event.preventDefault();
        setSearching(true);
        const url = `http://www.omdbapi.com/?&apikey=2a3b032c&s=${query}&type="movie"`;
        try{
            const response = await fetch(url);
            const data = await response.json();
            setMessage(null);
            setMovies(data.Search);
            setSearching(false);
        }
        catch (err){
            setMessage("An error occured!!!");
            setSearching(false);
        }
    };

    return (
        <div>
            <Container>
                <Form onSubmit={searchMovies}>
                    <InputField type="text" name="query" placeholder="Search movies by name..." value={query} onChange={(event) => setQuery(event.target.value)}/>
                    <Button type="submit" className=""><i class="fa fa-search"></i></Button>
                </Form>
            </Container>
            <Results searching={searching} message={message} movies={movies} />
        </div>
    );
}
export default SearchMovies;