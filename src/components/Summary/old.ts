import styled from "styled-components";

export const SummaryBody = styled.main`
    width: 1120px; 
    margin: 0 auto;
    display: flex; 
    flex-flow: row;

`


export const SummaryContent = styled.div`

    color: var(--text-title);
    background-color: #ffffff;
    width: 22rem; 
    height: 8.5rem; 
    border-radius: 5px;
    
    margin:  -4.25rem 32px 0 32px;

    &:first-child{
        margin-right: 0;

    }

    &:last-child{
        margin-right:29px;
        margin-left: 0;
        background-color: #33CC95;
        color: #ffffff;
        
        h3{
            color: #ffffff;
        }
    }
    
` 

export const TextContent = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

 
h3 { 
    color: var(--text-title);
    padding: 25px 0 0 32px;
    font-weight:400;
}

img {
    padding: 20px 20px 0 0;
}

`

export const ValueContent = styled.div` 

    strong{
        display: block;
    }

   h5 {
        height:3.4rem; 
        width: 13.8rem;
        margin-top: 0.875rem;
        margin-left: 2rem;
        font-size: 2rem;
        font-weight:500;
        line-height: 3rem;

    }


`