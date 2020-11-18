import styled from 'styled-components';
export const ResultsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: stretch;
    padding-left: 10%;
    padding-right: 10%;
    
`;

export const Movie = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
    transition: 0.3s;
    border-radius: 8px;
    margin-bottom: 40px;
    display: flex;             /* nested flex container */
    flex-direction: column;    /* vertical alignment of flex items */
    justify-content: center;   /* center flex items vertically */
    align-items: center;
    flex-basis: 23%;
`;

export const Img = styled.img`
    display: block;
    margin: auto;
`;

export const Title = styled.div`
    font-weight: bold;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 5%;
    padding-right: 5%;
`;

export const Year = styled.div`
    text-align: center;
    padding-bottom: 10px;
`;