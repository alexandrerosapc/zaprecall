import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100vh;
`;

export const Question = styled.div`
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

export const Answer = styled.div`
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

export const Options = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Option = styled.div`
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

export const ReturnedQuestion = styled.div`
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

export const Image = styled.img`
  margin-right: 15px;
  width: 20px;
  height: 23px;
`;