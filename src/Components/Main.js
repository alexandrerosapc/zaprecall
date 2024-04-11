import styled from 'styled-components';
export default function Main() {
    return (
        <Questions>

            <Question>
                <p>Pergunta 1</p>
                <ion-icon name="play-outline"></ion-icon>
            </Question>

            <Question>
                <p>Pergunta 2</p>
                <ion-icon name="play-outline"></ion-icon>
            </Question>

            <Question>
                <p>Pergunta 3</p>
                <ion-icon name="play-outline"></ion-icon>
            </Question>

            <Question>
                <p>Pergunta 4</p>
                <ion-icon name="play-outline"></ion-icon>
            </Question>

        </Questions>
    )
}

const Questions = styled.div`
    width: 80%;
    height: 60%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 90px;
`

const Question = styled.div`
    width: 100%;
    height: 65px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 4px 5px 0px #00000026;
    p{
        margin-left: 15px;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        font-family: "Righteous", sans-serif;
    }
    ion-icon{
        margin-right: 15px;
        width: 20px;
        height: 23px;
    }
`