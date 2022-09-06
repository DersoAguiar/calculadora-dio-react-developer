import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    min-height: 100vh;
    align-items: center;
    justify-content: center;


`

export const Content = styled.div `
    width: 100%;
    max-width: 400px;
    background-color: #fff;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0px 2px 64px rgba(0, 0, 0, 0.2);
    

`

export const Row = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Column = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`