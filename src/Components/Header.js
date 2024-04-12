import styled from 'styled-components';
import logo from "../assets/img/logo.png"
export default function Header() {
    return (
        <Title>
            <img src= {logo} alt="logo" />
            <p>ZapRecall</p>
        </Title>
    )
}

const Title = styled.div`
    width: 68% ;
    height: auto;
    margin: auto;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-family: "Righteous", sans-serif;
    font-size: 36px;
    line-height: 44.7px;
    img{
       height: 60px ;
       margin-right: 30px;
    }
`