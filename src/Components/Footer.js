import styled from 'styled-components';
export default function Footer() {
    return (
        <ContainerFooter>
            <Foot>
                <p>0/4 CONCLUÍDOS</p>
            </Foot>
        </ContainerFooter>
    )
}


const ContainerFooter = styled.div`
    box-shadow: 0px -4px 6px 0px #0000000D;
    background-color: white;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 10%;
    bottom: 0;
    left: 0;
`

const Foot = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Righteous", sans-serif;
    font-size: 18px;
    font-weight: 400;
`
