import styled from '@emotion/styled';

export const WraperFormLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  float: left;
  margin-right: 30px;
  margin-bottom: 16px;
`;
export const LabelStyled = styled.label`
  font-size: 16px;
  font-weight: bold;
  color: #4a4848;
`;
export const ButtonLogIn = styled.button`
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
