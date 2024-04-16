import React, { useState, useEffect } from 'react';
import { Container } from '../Components/StyledComponents';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import GlobalStyle from '../GlobalStyle';
import cards from './Cards';

export default function ZapMain() {
    const initialArray = Array(4).fill(false);
    const [clicked, setClicked] = useState(initialArray);
    const [randomIndexes, setRandomIndexes] = useState([]);
    const [showed, setShowed] = useState(initialArray);
    const opcoes = ['Não lembrei', 'Quase não lembrei', 'Zap!'];
    const [returned, setReturned] = useState(initialArray);
    const [selectedColors, setSelectedColors] = useState(initialArray);
    const [completedCount, setCompletedCount] = useState(0);

    useEffect(() => {
        generateRandomIndexes();
    }, []);

    const generateRandomIndexes = () => {
        const newRandomIndexes = [];
        while (newRandomIndexes.length < 4) {
            const newIndex = Math.floor(Math.random() * cards.length);
            if (!newRandomIndexes.includes(newIndex)) {
                newRandomIndexes.push(newIndex);
            }
        }
        setRandomIndexes(newRandomIndexes);
    };

    const showQuestion = (index) => {
        const newClicked = [...clicked];
        newClicked[index] = true;
        setClicked(newClicked);
    };

    const showOptions = (index) => {
        setShowed((prevShowed) => {
            const newShowed = [...prevShowed];
            newShowed[index] = true;
            return newShowed;
        });
    };

    const returnQuestions = (index, optionIndex) => {
        const newClicked = initialArray;
        const newShowed = initialArray;
        if (!returned[index]) {
            setReturned((prevReturned) => {
                const newReturned = [...prevReturned];
                newReturned[index] = true;
                return newReturned;
            });

            let color = '';
            switch (opcoes[optionIndex]) {
                case opcoes[0]:
                    color = '#FF3030';
                    break;
                case opcoes[1]:
                    color = '#FF922E';
                    break;
                case opcoes[2]:
                    color = '#2FBE34';
                    break;
                default:
                    break;
            }

            setSelectedColors((prevColors) => {
                const newColors = [...prevColors];
                newColors[index] = color;
                return newColors;
            });
        }
        if (completedCount < 4) {
            setCompletedCount((prevCount) => prevCount + 1);
        }
        setClicked(newClicked);
        setShowed(newShowed);
    };
    return (
        <Container>
            <GlobalStyle />
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
            <Footer completedCount={completedCount} />
        </Container>
    )
}