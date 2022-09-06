import styled from 'styled-components';

export const InputContainer = styled.div `
    max-width: 400px;
    height: 75px;
    display: flex;
    flex-direction: row;
    align-items: center;
    
    justify-content: flex-end;
    border-radius: 10%;

    font-size: 24px;
    font-family: 'Roboto';
    

    input {        
        width: 100%;
        height: 75px;
        color: blueviolet;
        background-color: #FFF;
        border: none;
        border-radius: 10px;        
        padding: 0 20px;
        text-align: right;
        
       

        font-size: 24px;
        font-family: 'Roboto';
    }
`