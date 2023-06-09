import styled from "styled-components";
import bg from "../../assets/money-bg.jpg";

export const Container = styled.div`
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: rgba(22, 160, 133, 0.8);
  height: 100vh;
  width: 100vw;
  background-blend-mode: multiply;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ConversorSection = styled.section`
  background-color: #fff;
  min-width: 900px;
  height: 300px;
  border-radius: 5px;
  display: flex;
  position: relative;

  @media (max-width: 1000px) and (min-width: 850px) {
    min-width: 800px;
  }

  @media (max-width: 850px) and (min-width: 650px) {
    min-width: 500px;
    height: 500px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 650px) {
    min-width: 350px;
    height: 600px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const ContentConversorSection = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > p {
    padding-top: 50px;
  }

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    flex: 1;
  }

  @media (max-width: 650px) {
    width: 100%;

    & > div {
      gap: 1rem;
    }
  }
`;

export const ButtonConversor = styled.button`
  border: none;
  border-radius: 50%;
  background-color: #2c3e50;
  height: 70px;
  width: 70px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
