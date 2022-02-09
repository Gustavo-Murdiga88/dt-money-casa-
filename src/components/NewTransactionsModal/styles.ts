import styled from "styled-components";
import { darken, transparentize } from "polished"; 

export const Content = styled.form`
h2{
    color: var(--text-tile);
    font-size: 1.5rem;
    margin-bottom: 2rem; 

}

input{
    width:100%; 
    font-size: 1rem; 
    font-weight: 400;
    padding: 0  1.5rem; 
    height: 3rem;
    border: 1px solid #E7E9EE;
    background: #d7d7d7;

    border-radius: 0.25rem;

    & + input {
        margin-top: 1rem;
    }

    &::placeholder{
        color: var(--text-body);
        font-size: 0.8rem;
    }   

    &:hover{

        border-color: ${darken(0.2, "#e7e9ee")};
    }

}

button[type = submit]{
    width:100%;
    font-size: 0.8rem;
    color: #fff;
    padding: 0 1.5rem;
    background: var(--green);
    border: 0;
    height: 3rem;
    border-radius: 0.25rem;
    font-weight: 400;
    margin-top: 1rem;

    transition: filter 0.2s;

    &:hover{
        filter: brightness(0.9);
    }

}

`;

export const ContentTypeButton = styled.div`
 
 display: grid;
    grid-template-columns: 1fr 1fr; 
    gap: 0.5rem;
    margin: 1rem 0 ;

`

interface RadioBox{
    isActive: boolean;
    Color: 'green' | 'red';
}

const Colors ={
    green: '#33CC95',
    red: '#e52e4d'
}

export const RadioBox = styled.button<RadioBox>`
    background: ${(props) => props.isActive ?  
    transparentize(0.8, Colors[props.Color]) : ''
    };
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid  #E7E9EE;
    height: 3rem;
    border-radius:0.25rem;

    &:hover{
        border-color: ${darken(0.2, '#e7e9ee')};
    }

    img{
        width: 20px;
        height: 20px;
    }


span{
    display: inline-block; 
    padding: 0 1rem ;
    color: var(--text-title); 
    font-size:1rem; 
}
`