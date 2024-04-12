import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import cards from "../src/Components/Cards"

function App() {
  const [clicked, setClicked] = useState([false, false, false, false]);
  const [randomIndexes, setRandomIndexes] = useState([]);
  const [showed, setShowed] = useState([false, false, false, false]);
  const opcoes = ["Não lembrei", "Quase não lembrei", "Zap!"];
  const [returned, setReturned] = useState([false, false, false, false]);
  const [selectedColors, setSelectedColors] = useState(["", "", "", ""]);
  const [completedCount, setCompletedCount] = useState(0);

  useEffect(() => {
    // Gerando 4 índices aleatórios únicos
    const newRandomIndexes = [];
    while (newRandomIndexes.length < 4) {
      const newIndex = Math.floor(Math.random() * cards.length);
      if (!newRandomIndexes.includes(newIndex)) {
        newRandomIndexes.push(newIndex);
      }
    }
    setRandomIndexes(newRandomIndexes);
  }, []);

  function showQuestion(index) {
    const newClicked = [...clicked];
    newClicked[index] = true;
    setClicked(newClicked);
  }

  function showOptions(index) {
    setShowed((prevShowed) => {
      const newShowed = [...prevShowed];
      newShowed[index] = true; // Alternando o estado de 'showed'
      return newShowed;
    });
  }

  function returnQuestions(index, optionIndex) {
    setClicked([false, false, false, false]);
    setShowed([false, false, false, false]);
    if (!returned[index]) {
      setReturned((prevReturned) => {
        const newReturned = [...prevReturned];
        newReturned[index] = true;
        return newReturned;
      });

      let color = "";
      if (opcoes[optionIndex] === opcoes[0]) {
        color = "#FF3030";
      } else if (opcoes[optionIndex] === opcoes[1]) {
        color = "#FF922E";
      } else if (opcoes[optionIndex] === opcoes[2]) {
        color = "#2FBE34";
      }

      // Armazenar a cor selecionada para a nova ReturnedQuestion
      setSelectedColors((prevColors) => {
        const newColors = [...prevColors];
        newColors[index] = color;
        return newColors;
      });
    }
    setCompletedCount((prevCount) => prevCount + 1);
  }

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <Main 
        randomIndexes={randomIndexes}
        returned={returned}
        selectedColors={selectedColors}
        returnQuestions={returnQuestions}
        showed={showed}
        cards={cards}
        opcoes={opcoes}
        showQuestion={showQuestion}
        clicked={clicked}
        showOptions={showOptions}
        />
        <Footer
        completedCount={completedCount}
        />
      </Container>
    </>
  );
}
export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100vh;
`;
