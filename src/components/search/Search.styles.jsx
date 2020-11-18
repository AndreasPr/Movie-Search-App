import styled from 'styled-components';

export const Container = styled.div`
    margin: auto;
    padding-top: 30px;
    padding-bottom: 30px;
    width: 40%;

    @media screen and (max-width: 768px){
        width: 70%;
    }
`;

export const InputField = styled.input`
    padding: 10px;
    font-size: 17px;
    border: 1px solid grey;
    float: left;
    width: 80%;
    background: #f1f1f1;

    &:focus{
        outline: none;
    }
`;

export const Button = styled.button`
    float: left;
    width: 20%;
    padding: 10px;
    background: black;
    color: #f5c518;
    font-size: 17px;
    border: 1px solid grey;
    border-left: none; /* Prevent double borders */
    cursor: pointer;

    &:hover{
        color: black;
        background: #f5c518;
    }
    &:focus{
        outline: none;
    }
`;

export const Form = styled.form`
    display: flex;
`;