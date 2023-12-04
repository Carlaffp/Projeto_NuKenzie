import logo from "../../Assets/Logo.png"
import { StyledHeader } from "./header"
import { StyledContainer } from "../../Styles/grid"
import { StyledDivLog } from "./header"

export const Header = ()=>{
  return(
    
    <StyledHeader>
      <StyledContainer>
        <StyledDivLog>
      <img src={logo} alt="logo do NuKenzie" />
        </StyledDivLog>
      </StyledContainer>
    </StyledHeader>
  )
}