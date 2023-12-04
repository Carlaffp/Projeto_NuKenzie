import { useState } from 'react'
import { Form } from './Components/Form'
import { TotalMoney } from './Components/TotalMoney'
import { SectionList } from './Components/SectionList'
import { Header } from './Components/Header'
import { GlobalReset } from './Styles/reset'
import { GlobalStyles } from './Styles/Global'
import { StyledContainer } from './Styles/grid'

function App() {
  const [noteList, setNoteList] = useState([])
  return (
      <div className='App'>
        <GlobalReset/>
        <GlobalStyles/>
        <Header/>
        <main>
          <StyledContainer>
            <div className='divForm'>
          <Form setNoteList={setNoteList}/>
          {noteList.length > 0? (
            <TotalMoney noteList={noteList}/>
          ):("") }
            </div>
            <div className='divCards'>
          <SectionList noteList={noteList} setNoteList={setNoteList}/>
            </div>
          </StyledContainer>
        </main>
       
      </div>
  )
}

export default App
