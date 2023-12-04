import { ListCards } from "./ListCards";
import { StyledHeadLine1 } from "../../Styles/Typographia";
import { StyledHeadLine2 } from "../../Styles/Typographia";
import { StyledSection } from "./section";

export const SectionList = ({ noteList, setNoteList }) => {
  return (
    <StyledSection>
      <StyledHeadLine2 fontWeight="big" color="color1" fontSize="big">
        Resumo financeiro
      </StyledHeadLine2>
      {noteList.length > 0 ? (
        <ListCards noteList={noteList} setNoteList={setNoteList} />
      ) : (
        <StyledHeadLine1 color="color1" fontSize="big">
          Você ainda não possui nenhum lançamento
        </StyledHeadLine1>
      )}
    </StyledSection>
  );
};
