import styled from "styled-components";

export const Container = styled.header`
background: var(--blue);
`

export const Content = styled.div`

    max-width: 1120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto; 
    
    padding: 2rem 2rem 12rem;

    
    button{
        color: #fff;
        background-color:var(--blue-light);
        border: 0;
        padding:  0 2rem;
        height: 3rem;
        border-radius: 0.25rem;
        cursor: pointer;
        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.9); 
        }
        
    }
`