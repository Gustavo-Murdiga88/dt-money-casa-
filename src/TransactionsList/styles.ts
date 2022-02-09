import styled from "styled-components"
export const Container = styled.div`

   table{
        width: 100%;
        border-spacing: 0 0.5rem;
        text-align: left;
        margin: 2rem 0;

   }

   th{
       color: var(--text-body);
       font-size: 1.2rem;
       line-height: 4rem;
       padding: 0 1rem;
       font-weight: bold;

  }
  tr{
      line-height: 4rem;
      border-radius: 0.25rem;

    td:first-child{

        border-top-left-radius:0.25rem; 
        border-bottom-left-radius: 0.25rem;
    }

    td:last-child{
        border-top-right-radius:0.25rem;
        border-bottom-right-radius: 0.25rem;
    }
    
  }

  td{
      font-size: 1rem;
      background-color:var(--shape);
      padding: 0 1rem;
      color: var(--text-body);
      font-weight: 400;

    &:first-child{
        color: var(--text-title);
        font-weight:bold;
    }

    &.receipt{
        color: var(--green); 
    }

    &.payment{ 
        color: var(--red);
  }
}
`;
