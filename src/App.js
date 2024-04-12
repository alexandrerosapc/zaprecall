import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import GlobalStyle from "./GlobalStyle";
import styled from "styled-components"

function App() {
  return (
    <>
      <GlobalStyle/>
      <Container>
        <Header />
        <Main />
        <Footer />
      </Container>
    </>
  )
}
export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100vh;
`