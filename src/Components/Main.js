import React, { useState, useEffect } from "react";
import styled from "styled-components";
import cards from "./Cards";

export default function Main() {
  const [clicked, setClicked] = useState([false, false, false, false]);
  const [randomIndexes, setRandomIndexes] = useState([]);
  const [showed, setShowed] = useState([false, false, false, false]);

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
    // Invertendo o estado de 'showed' para esconder/mostrar a resposta e opções
    const newShowed = [...showed];
    newShowed[index] = !newShowed[index];
    setShowed(newShowed);

    // Alterando o estado de 'clicked' para manter a resposta e opções visíveis
    const newClicked = [...clicked];
    newClicked[index] = true;
    setClicked(newClicked);
  }

  return (
    <Questions>
      {randomIndexes.map((index, i) => (
        <div key={i}>
          {/* Aqui você renderiza a pergunta ou a resposta */}
          {showed[i] ? (
            <Answer showed={showed[i] ? "true" : "false"}>
              {/* Aqui você renderiza a resposta */}
              <p>{cards[index].answer}</p>
              {/* Aqui você renderiza as opções */}
              <Options>
                <div>Opção 1</div>
                <div>Opção 2</div>
                <div>Opção 3</div>
              </Options>
            </Answer>
          ) : (
            <Question
              onClick={() => showQuestion(i)}
              clicked={clicked[i] ? "true" : "false"}
            >
              <p>{clicked[i] ? cards[index].question : `Pergunta ${i + 1}`}</p>
            </Question>
          )}
          {/* Ícone sync fora do componente Question */}
          <ion-icon
            name={clicked[i] ? "sync" : "play-outline"}
            onClick={() => showOptions(i)}
          ></ion-icon>
        </div>
      ))}
    </Questions>
  );
}

const Questions = styled.div`
  width: 80%;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Question = styled.div`
  width: 100%;
  height: ${(props) => (props.clicked === "true" ? "auto" : "65px")};
  display: ${(props) => (props.showed === "true" ? "none" : "flex")};
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) =>
    props.clicked === "true" ? "#FFFFD4" : "white"};
  border-radius: 5px;
  box-shadow: 0px 4px 5px 0px #00000026;
  cursor: pointer;
  p {
    margin-left: 15px;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    font-family: "Righteous", sans-serif;
  }
  ion-icon {
    margin-right: 15px;
    width: 20px;
    height: 23px;
  }
`;

const Answer = styled.div`
  display: ${(props) => (props.showed === "true" ? "flex" : "none")};
`;

const Options = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
