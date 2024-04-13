import styled from "styled-components";
import certo from "../assets/img/icone_certo.png";
import erro from "../assets/img/icone_erro.png";
import quase from "../assets/img/icone_quase.png";

export default function Main({randomIndexes,returned,selectedColors,returnQuestions,showed,cards,opcoes,showQuestion,clicked,showOptions}) {
  
  return (
    <Questions>
      {randomIndexes.map((index, i) => (
        <div key={i}>
          {returned[i] ? (
            <ReturnedQuestion
              as="div" // Renderizar como div
              color={selectedColors[i]}
              onClick={() => returnQuestions(i)}
            >
              <p>{`Pergunta ${i + 1}`}</p>
              <ReturnedImage
                src={
                  selectedColors[i] === "#2FBE34"
                    ? certo
                    : selectedColors[i] === "#FF3030"
                    ? erro
                    : quase
                }
                alt="Ícone de Status"
              />
            </ReturnedQuestion>
          ) : showed[i] ? (
            <Answer showed={showed[i] ? "true" : "false"}>
              <p>{cards[index].answer}</p>
              <Options>
                {opcoes.map((option, optionIndex) => (
                  <Option
                    key={optionIndex}
                    index={optionIndex}
                    onClick={() => returnQuestions(i, optionIndex)}
                  >
                    {option}
                  </Option>
                ))}
              </Options>
            </Answer>
          ) : (
            <Question
              as="div" // Renderizar como div
              onClick={() => showQuestion(i)}
              showed={showed[i] ? "true" : "false"}
              clicked={clicked[i]? "true" : "false"}
            >
              <p>{clicked[i] ? cards[index].question : `Pergunta ${i + 1}`}</p>
              <ion-icon
                name={clicked[i] ? "sync" : "play-outline"}
                onClick={() => {
                  showOptions(i);
                }}
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
  background-color: #ffffd4;
  height: 130px;
  border-radius: 5px;
  box-shadow: 0px 4px 5px 0px #00000026;
  cursor: pointer;
  font-family: "Righteous", sans-serif;
  p {
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
    if (props.index === 0) return "#FF3030";
    if (props.index === 1) return "#FF922E";
    if (props.index === 2) return "#2FBE34";
  }};
`;

const ReturnedQuestion = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  color: ${(props) => props.color}; // Cor dinâmica baseada no estado
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
  }`;

const ReturnedImage = styled.img`
  margin-right: 15px;
  width: 20px;
  height: 23px;
`;
