import styled, {css} from "styled-components";

export const StyledCards = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 156px;
  width:min(560px,100%);
  border-radius: 0.25rem;
  
  ${({border})=>{
    if(border==="green"){
      return css`
       border-left: 4px solid var(--color-secondary);
      `
    }else{
      return css`
       border-left: 4px solid var(--color-grey2);
      `
    }
  }};

  background: var(--color-grey1);
  padding: 0.5rem 0.875rem;
  gap:25px;

  @media(min-width: 768px){
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 5.4375rem;
    padding: 0.5rem 0.875rem;

  }
`;
export const StyledButton = styled.button`
width:3.625rem;
height: 1.1875rem;
background: var(--color-grey2);
border-radius: 0.125rem;
color: var(--color-grey4),
text-align:center; 


`
export const StyledDiv1 = styled.div`
gap:15px; 
display: flex;
flex-direction:column; 
`