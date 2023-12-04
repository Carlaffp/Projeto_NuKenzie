import { StyledHeadLine2 } from "../../Styles/Typographia";
import { StyledHeadLine4 } from "../../Styles/Typographia";
import { StyledSpan } from "./total";
import { StyledContainer } from "./total";
import { StyledDiv } from "./total";

export const TotalMoney = ({ noteList }) => {
  const totalBalance = noteList.reduce((previousValue, currentNote) => {
    if (currentNote.type === "Entrada") {
      return previousValue + currentNote.value;
    } else {
      return previousValue - currentNote.value;
    }
  }, 0);

  return (
    <StyledContainer>
      <StyledDiv>
        <StyledHeadLine2 fontSize="medium" fontWeight="big" color="color1">
          Valor total:{" "}
        </StyledHeadLine2>
        <StyledHeadLine4 fontSize="small" fontFamily="primary">
          O valor refere-se ao saldo
        </StyledHeadLine4>
      </StyledDiv>
      <div>
        <StyledSpan>
          {totalBalance.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </StyledSpan>
      </div>
    </StyledContainer>
  );
};
