import React, { useState, useEffect } from "react";
import styled from "styled-components";
import cards from "./Cards";

export default function Main() {
  const [clicked, setClicked] = useState([false, false, false, false]);
  const [randomIndexes, setRandomIndexes] = useState([]);
  const [showed, setShowed] = useState([false, false, false, false]);
  const opcoes = ["Não lembrei", "Quase não lembrei", "Zap!"]
  const [returned, setReturned] = useState([false, false, false, false])

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
    setShowed(prevShowed => {
      const newShowed = [...prevShowed];
      newShowed[index] = true; // Alternando o estado de 'showed'
      return newShowed;
    });
  }
  
  function returnQuestions(index) {
    setClicked([false,false,false,false])
    setShowed([false,false,false,false])
    if (!returned[index]) {
      setReturned(prevReturned => {
        const newReturned = [...prevReturned];
        newReturned[index] = true; // Define apenas a pergunta clicada como retornada
        return newReturned;
      });
    }
  }
  
  return (
    <Questions>
      {randomIndexes.map((index, i) => (
        <div key={i}>
          {returned[i] ? (
            <ReturnedQuestion
            index={returned[i]}
            >
              <p>{`Pergunta ${i + 1}`}</p>
              <ion-icon name=""></ion-icon>
            </ReturnedQuestion>
          ) : showed[i] ? (
            <Answer showed={showed[i] ? "true" : "false"}>
              <p>{cards[index].answer}</p>
              <Options>
                {opcoes.map((option, optionIndex) => (
                  <Option
                    key={optionIndex}
                    index={optionIndex}
                    onClick={() => returnQuestions(i)}
                  >
                    {option}
                  </Option>
                ))}
              </Options>
            </Answer>
          ) : (
            <Question
              onClick={() => showQuestion(i)}
              clicked={clicked[i] ? "true" : "false"}
              returned={returned[i] ? "true" : "false"}
            >
              <p>{clicked[i] ? cards[index].question : `Pergunta ${i + 1}`}</p>
              <ion-icon
                name={clicked[i] ? "sync" : "play-outline"}
                onClick={() => {
                  showOptions(i)}
                }
              ></ion-icon>
            </Question>
          )}
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
  height: ${(props) => (props.clicked === "true" ? "130px" : "65px")};
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
  flex-direction: column;
  justify-content: space-around;
  background-color: #FFFFD4;
  height: 130px;
  border-radius: 5px;
  box-shadow: 0px 4px 5px 0px #00000026;
  cursor: pointer;
  font-family: "Righteous", sans-serif;
  p{
    margin-left: 15px;
  }
`;

const Options = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Option = styled.div`
  width: 28%;
  height: 37px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  color: white;
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  background-color: ${(props) => {
    if (props.index === 0) return "#FF3030"
    if (props.index === 1) return "#FF922E"
    if (props.index === 2) return "#2FBE34"
  }};
`

const ReturnedQuestion = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  color: ${(props) => {
    if (props.index === 0) return "#FF3030"
    if (props.index === 1) return "#FF922E"
    if (props.index === 2) return "#2FBE34"
  }};
  border-radius: 5px;
  box-shadow: 0px 4px 5px 0px #00000026;
  cursor: pointer;
  p {
    margin-left: 15px;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    font-family: "Righteous", sans-serif;
    text-decoration: line-through;
  }
  ion-icon {
    margin-right: 15px;
    width: 20px;
    height: 23px;
  }
`