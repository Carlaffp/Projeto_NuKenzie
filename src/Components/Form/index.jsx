import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { StyledInput } from "../../Styles/Forms";
import { StyleSelect } from "../../Styles/Forms";
import { StyledHeadLine3 } from "../../Styles/Typographia";
import { StyledHeadLine4 } from "../../Styles/Typographia";
import { StyledButton } from "./form";
import { StyledForm } from "./form";

export const Form = ({ setNoteList }) => {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [selectOption, setSelectOption] = useState("");
  
  const addNoteList = () => {
    const newList = {
      id: uuidv4(),
      description: description,
      value: Number(value),
      type: selectOption,
    };
    setNoteList(noteList => [...noteList, newList]);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if(selectOption!==""){
        addNoteList()
    }else{
     
    }
   
    setDescription("");
    setValue("");
    setSelectOption("");
    setErro("")
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledHeadLine3 fontSize="small" color="color1">
        Descrição
      </StyledHeadLine3>
      <StyledInput
      className="placeholder"
        type="text"
        value={description}
        onChange={e => setDescription(e.target.value)}
        placeholder="Digite aqui sua descrição"
        required
      />
      <StyledHeadLine4 fontSize="small">Ex: Compra de roupas</StyledHeadLine4>
      <StyledHeadLine3 fontSize="small" color="color1">
        Valor (R$)
      </StyledHeadLine3>
      <StyledInput
        className="placeholder"
        type="number"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Valor"
        required
      />
      <StyledHeadLine3 fontSize="small" color="color1">
        Tipo de valor
      </StyledHeadLine3>
      <StyleSelect
      className="select"
        value={selectOption}
        onChange={e => setSelectOption(e.target.value)}
        required
      >
        <option value="">Selecione</option>
        <option value="Entrada">Entrada</option>
        <option value="Saida">Saída</option>
      </StyleSelect>
      <StyledButton type="submit">Inserir Valor</StyledButton>
    </StyledForm>
  );
};
