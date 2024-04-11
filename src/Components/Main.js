import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import cards from './Cards';

export default function Main() {
    const [clicked, setClicked] = useState([false, false, false, false]);
    const [randomIndexes, setRandomIndexes] = useState([]);

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
        newClicked[index] = !newClicked[index];
        setClicked(newClicked);
    }

    function showOptions() {
        /* 
        1º - mudar o texto do paragrafo para a respectiva resposta da pergunta
        2º - remover o ion-icon
        3º - adicionar 3 paragrafos alinhados uns com os outros logo abaixo da resposta
        4º - manter a formatação de backgroundcolor e heigth quando está clicado
    */
   }

    return (
        <Questions>
            {randomIndexes.map((index, i) => (
                <Question
                    key={i}
                    onClick={() => showQuestion(i)}
                    clicked={clicked[i] ? "true" : "false"}
                >
                    <p>
                        {clicked[i] ? cards[index].question : `Pergunta ${i + 1}`}
                    </p>
                    <ion-icon
                        name={clicked[i] ? "sync" : "play-outline"}
                        onClick={() => {
                            if (clicked[i]) {
                                showOptions(i)
                            } else {

                            }
                        }}
                    >

                    </ion-icon>
                </Question>
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
    height: ${props => props.clicked === "true" ? '130px' : '65px'};
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${props => props.clicked === "true" ? '#FFFFD4' : 'white'};
    border-radius: 5px;
    box-shadow: 0px 4px 5px 0px #00000026;
    cursor: pointer;
    p {
        margin-left: 15px;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        font-family: 'Righteous', sans-serif;
    }
    ion-icon {
        margin-right: 15px;
        width: 20px;
        height: 23px;
    }
`;
