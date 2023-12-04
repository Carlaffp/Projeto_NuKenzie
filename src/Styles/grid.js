import styled from "styled-components";

export const StyledContainer = styled.div`
width: 100%;
max-width: 1200px;
margin: 0 auto;
padding: 1rem;

.divForm{
    width: min(355px,100%)
  }
.divCards{
  width: min(560px,100%)
}

@media(min-width: 768px){
  display flex;
  justify-content: center;
  gap:59px;


  
}
`
