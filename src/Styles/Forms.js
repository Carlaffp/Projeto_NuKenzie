import styled, { css } from "styled-components";

const InputAndSelectStyles = css` 
  width: 100%;
  height: 3rem;

  font-family: var(--font-primary),
  font-Weight: 400;
  font-Size: 1rem;

  padding: 0 1.25rem 0 1.25rem;

  color:var(--color-grey3);
  background: var(--color-grey1);
  border: 0.125rem solid var(--color-grey1);
  border-radius: .5rem;
  
`;

export const StyledInput = styled.input`
  ${InputAndSelectStyles};
`;

export const StyleSelect = styled.select`
  ${InputAndSelectStyles};
`;
