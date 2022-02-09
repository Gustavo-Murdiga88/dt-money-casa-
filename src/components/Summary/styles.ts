import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr; 
    gap: 2rem; 
    margin-top: -5.25rem;

    div{
        
    color: var(--text-title);
    background-color: var(--shape); 
    padding: 2rem 2rem;
    border-radius: 5px;

    &.colorGreen{
        background-color: var(--green);
        color: #fff;
    }
    }   

    header {
        display: flex; 
        justify-content: space-between;
        align-items: center;
    }

    strong{
        
        display: block;
        padding: 1rem 0 0 0; 
        font-size: 2rem; 
        font-weight: 500;
        line-height: 3rem; 

    }
`