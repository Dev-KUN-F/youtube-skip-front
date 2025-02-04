import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #2c2c2c; /* 어두운 회색 배경 */
    color: #f1f1f1; /* 텍스트 색상 변경 */
    margin: 0;
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
`;

export const Container = styled.div`
  padding: 20px;
  max-width: 600px;
  width: 100%;
  text-align: center;
  background-color: #2c2c2c; /* 어두운 회색 배경 */
  color: #f1f1f1; /* 텍스트 색상 변경 */
  border-radius: 10px; /* 둥근 모서리 추가 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 그림자 추가 */
`;

export const Logo = styled.img`
  width: 150px;
  /* margin-bottom: 20px; */
`;

export const Form = styled.form`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
  display: block;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  padding: 10px; /* 패딩 증가 */
  width: 100%;
  max-width: 300px;
  margin-bottom: 10px;
  border: 1px solid #444; /* 테두리 색상 변경 */
  border-radius: 5px;
  background-color: #3c3c3c; /* 입력 필드 배경색 변경 */
  color: #f1f1f1; /* 입력 필드 텍스트 색상 변경 */
`;

export const Button = styled.button`
  padding: 10px 20px; /* 패딩 증가 */
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Message = styled.p`
  color: ${(props) => (props.error ? "red" : "#f1f1f1")}; /* 텍스트 색상 변경 */
  font-size: 14px;
`;

export const SummaryContainer = styled.div`
  margin-top: 20px;
  text-align: left;
  background-color: #3c3c3c; /* 요약 컨테이너 배경색 변경 */
  padding: 10px;
  border-radius: 5px;
`;

export const SummaryText = styled.p`
  white-space: pre-line;
  background: #3c3c3c;
  padding: 10px;
  border-radius: 5px;
  line-height: 1.5;
`;
