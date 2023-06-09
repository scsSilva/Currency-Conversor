import styled from "styled-components";

export const Container = styled.input`
  height: 40px;
  width: 200px;
  border: none;
  background: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  font-size: 2rem;
  font-weight: 600;

  @media (max-width: 650px) {
    width: 250px;
  }

  &:focus {
    border-color: #16a085;
  }
`;
