import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  gap: 10px;
`;

export const StyledInput = styled.input`
  padding: 5px;
  border-radius: 10px;
`;

export const StyledBtn = styled.button`
  padding: 5px;
  width: 100px;
  border-radius: 10px;
  text-decoration: none;
  background-color: #e2e2e2;
  color: black;
  text-align: center;
  font-size: 20px;
  :hover {
    background-color: #fc7d07;
    color: #fff;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
      0px 2px 1px rgba(0, 0, 0, 0.2);
  }
`;
