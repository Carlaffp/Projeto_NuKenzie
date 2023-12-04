import { StyledHeadLine2 } from "../../../../Styles/Typographia";
import { StyledHeadLine4 } from "../../../../Styles/Typographia";
import { StyledCards } from "./cards";
import { StyledButton } from "./cards";
import { StyledDiv1 } from "./cards";

export const Cards = ({ note, removeNoteFromList }) => {
  return (
    <StyledCards border={note.type==="Entrada"? "green" : ""}>
      <StyledDiv1>
        <StyledHeadLine2 fontWeight="big" fontSize="medium" color="color1" >{note.description}</StyledHeadLine2>
        <StyledHeadLine4 fontSize="small" >{note.type}</StyledHeadLine4>
      </StyledDiv1>
      <StyledDiv1>
        <StyledHeadLine4 fontSize="small">
          {note.value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </StyledHeadLine4>
        <StyledButton onClick={() => removeNoteFromList(note.id)}>Excluir</StyledButton>
      </StyledDiv1>
    </StyledCards>
  );
};
