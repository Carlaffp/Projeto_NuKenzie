import { Cards } from "./Cards";
import { StyledListCards } from "./listCard";

export const ListCards = ({ noteList, setNoteList }) => {
  const removeNoteFromList = noteId => {
    if (confirm("Você deseja realmente excluir esta nota?")) {
      const newNote = noteList.filter(note => note.id !== noteId);
      setNoteList(newNote);
    }
  };
  return (
    <StyledListCards>
      {noteList.map(note => (
        <Cards
          key={note.id}
          note={note}
          removeNoteFromList={removeNoteFromList}
        />
      ))}
    </StyledListCards>
  );
};
