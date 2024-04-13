import styled from "styled-components";
import certo from "../assets/img/icone_certo.png";
import erro from "../assets/img/icone_erro.png";
import quase from "../assets/img/icone_quase.png";
import play from "../assets/img/seta_play.png"
import virar from "../assets/img/seta_virar.png"
import { ReturnedQuestion, Image, Answer, Options, Option, Question } from "./StyledComponents";

export default function Main({ randomIndexes, returned, selectedColors, returnQuestions, showed, cards, opcoes, showQuestion, clicked, showOptions }) {

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
              <Image
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
              clicked={clicked[i] ? "true" : "false"}
            >
              <p>{clicked[i] ? cards[index].question : `Pergunta ${i + 1}`}</p>
              <Image
                src={clicked[i] ? virar : play}
                onClick={() => {
                  showOptions(i);
                }}
              ></Image>
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
