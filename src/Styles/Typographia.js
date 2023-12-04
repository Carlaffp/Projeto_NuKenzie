import styled, { css } from "styled-components";

export const HeadLineStyles = css`
  
  ${({ fontWeight }) => {
    if (fontWeight === "big") {
      return css`
        font-weight: 700;
      `;
    } else {
      return css`
        font-weight: 400;
      `;
    }
  }}

  ${({ fontSize }) => {
    switch (fontSize) {
      case "big":
        return css`
          font-size: 1.375rem;
        `;
      case "medium":
        return css`
          font-size: 1rem;
        `;
      case "small":
        return css`
          font-size: 0.75rem;
        `;
    }
  }}

 ${({ color }) => {
    if (color === "color1") {
      return css`
        color: var(--color-grey4);
      `;
    } else {
      return css`
        color: var(--color-grey3);
      `;
    }
  }}
`;
export const StyledHeadLine1 = styled.h2`
  ${HeadLineStyles};
  font-family: var(--font-primary)
`;
export const StyledHeadLine2 = styled.h3`
  ${HeadLineStyles};
  font-family: var(--font-primary)
`;
export const StyledHeadLine3 = styled.h4`
  ${HeadLineStyles};
  font-family: var(--font-secondary)
`;
export const StyledHeadLine4 = styled.p`
  ${HeadLineStyles};
  ${({fontFamily}) =>{
    if(fontFamily==="primary"){
      return css`
      font-family: var(--font-primary)`
    }else{
      return css`
      font-family: var(--font-secondary)`
    }
  }}
`;

