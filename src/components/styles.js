import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
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
  padding: 5px;
  width: 100%;
  max-width: 300px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Button = styled.button`
  padding: 8px 15px;
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
  color: ${(props) => (props.error ? "red" : "black")};
  font-size: 14px;
`;

export const SummaryContainer = styled.div`
  margin-top: 20px;
  text-align: left;
`;

export const SummaryText = styled.p`
  white-space: pre-line;
  background: #f8f9fa;
  padding: 10px;
  border-radius: 5px;
  line-height: 1.5;
`;
