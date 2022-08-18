import styled from "styled-components";

export const WrapperSearch = styled.div`
display: flex;
justify-content: center;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 70%;
  padding: 4px;
  margin-top: 100px;
  margin-left: 20px;
  margin-bottom: 50px;

  input {
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 100%;
    height: 44px;
    padding: 10px;
    font-weight: 600;
  }

  button {
    background-color: black;
    padding: 8px 16px;
    margin: 0 16px;
    border-radius: 8px;
    margin-right: 30px;

    &:hover {
      background-color: grey;
      box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
    }

    span {
      font-weight: bold;
      color: #ffff;
    }
  }
`;
