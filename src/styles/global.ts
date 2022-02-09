import {createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
:root{
    --background: #E5E5E5;
    --red : #e52e4d; 
    --green: #33CC95;
    --blue-light: #6933ff; 
    --text-title: #363f5f;
    --text-body: #969cb3; 
    --shape: #ffffff;
    --blue: #5429CC;
}

* {
    margin:0;
    padding:0;
    box-sizing: border-box;
    outline:0px;

}

html {
    @media (max-width:1080px) {
        font-size: 93.75%;
    }

    @media (max-width:720p){
        font-size: 87.5%; 
    }
}

body, input, textarea, button {
    font-family: "Poppins",'Dongle', sans-serif;
    font-weight: 400;
}

h1,h2,h3,h4,h5,h6, strong {
    font-family:"Poppins", 'Dongle', sans-serif;
    font-weight: 600;   
}

body{
    background: var(--background);
    -webkit-font-smoothing: antialiased;

}

button{
    cursor: pointer;
}

[disabled]{
    opacity: 0.6;
    cursor:not-allowed;
}

.new-react-modal{
    position:relative;
    width: 100%;
    max-width: 576px;
    background-color:var(--background); 
    padding: 3rem;
    border-radius: 0.25rem;

}   

.new-react-overlay-modal{

    background: rgba(0,0,0,0.5);
    position: fixed; 
    top:0; 
    left:0; 
    right:0;
    bottom:0;
    
    display: flex;
    justify-content:center; 
    align-items:center;

}

.closeModal{
    position: absolute;
    top: 1.5rem;
    right:1.5rem;
    background: transparent;
    border:0;
    
    transition: filter 0.5s;

}
.closeModal:hover{
         
        filter: brightness(0.7); 
        
}

`