import React from 'react';
import {ResultsContainer, Movie, Img, Title, Year} from './Results.styles';

const Results = ({searching, message, movies}) => {
    return (
        <ResultsContainer>
        {
            searching && !message ? (<span>Loading...</span>) : message ? (<div>{message}</div>) :
            (movies.map( (movie) => (
                <Movie key={movie.imdbID}>
                    <Img src={movie.Poster} />
                    <Title>{movie.Title}</Title>
                    <Year>Year of release: {movie.Year}</Year>
                </Movie>
            )))
        }
        </ResultsContainer>
    );
}
export default Results;