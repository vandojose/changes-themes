import styled from "styled-components";

export const Button = styled.button`
  border: 2px solid;
  border-image-slice: 1;
  border-width: 2px;
  border-image-source: ${({ theme }) => theme.gradient};
  border-radius: 5px;
  font-size: 14px;
  background: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.body};
  outline: 0;
  padding: 10px 20px;
  font-weight: 600;
`;
