import styled from "@emotion/styled";

export const FormStyled = styled.form`
  float: left;
  margin-right: 30px;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;
export const LabelStyled = styled.label`
  font-size: 16px;
  font-weight: bold;
  color: #4a4848;
`;
export const ButtonRegister = styled.button`
  padding: 10px 30px;
  background: #f8a035;
  color: #fff;
  border: none;
  width: 120px;
  border-radius: 6px;
  &:hover {
    background-color: orangered;
  }
`;
export const InputStyled = styled.input`
  display: block;
  margin: 0 0 15px 0;
  padding: 10px;
  width: 250px;
  border: 1px solid #ccc;
`;
export const WraperInput = styled.div`
position: relative;
`