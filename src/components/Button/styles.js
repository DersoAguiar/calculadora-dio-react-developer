import styled from 'styled-components';

export const ButtonContainer = styled.button `    
    display: flex;
    flex: 1 1 0%;
    justify-content: center;
    
    appearance: none;
    border: none;
    outline: none;
    background-color: #8e7dbe;
    color: #fff;
    font-size: 20px;
    padding: 16px;
    cursor: pointer;
    transition: .4s;

    &:hover {
        opacity: 0.6;
    }
`
