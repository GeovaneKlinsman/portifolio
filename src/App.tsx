import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import Projects from './containers/Projects'
import Sidebar from './containers/Sidebar'
import About from './containers/About'
import EstiloGlobal, { Container } from './styles'
import styled from 'styled-components'
import lightTheme from './themes/light'
import darkTheme from './themes/dark'

function App() {
  const [usingDarkTheme, setIsUsingDarkTheme] = useState(false)

  function changeTheme() {
    setIsUsingDarkTheme(!usingDarkTheme)
  }

  return (
    <ThemeProvider theme={usingDarkTheme ? darkTheme : lightTheme}>
      <EstiloGlobal />
      <Container>
        <Sidebar changeTheme={changeTheme} />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
