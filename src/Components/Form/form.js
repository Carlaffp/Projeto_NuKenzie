import styled from "styled-components";

export const StyledButton = styled.button`
  width: 100%;
  height: 3rem;
  background: var(--color-primary);
  border: 0.125rem solid var(--color-primary);
  border-radius: 0.5rem;
  color: #ffff;
  margin-top: 14px;
  font-family: var(--font-secondary);
  font-weight: 500;

  :hover {
    background: var(--color-primary2);
  }
`;
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid rgba(0, 0, 0, 0.2);
  height: 434px;
  margin-top: 29px;
  padding: 30px 21px;
  gap: 12px;

  .placeholder{
    font-family: var(--font-secondary);
  };

  .select{
    font-family: var(--font-secondary); 
  };
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button{
    -webkit-appearance: none;
    margin: : 0;
  };
`;
