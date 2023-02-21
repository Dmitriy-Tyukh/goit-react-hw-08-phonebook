import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';

export const Wraper = styled.div`
display: flex;
justify-content: center;
`
export const BoxContact = styled.div`
margin-top: 50px;

`
export const FormStyled = styled(Form)`
  float: left;
  margin-right: 64px;
`;

export const FieldStyled = styled(Field)`
  display: block;
  margin: 0 0 15px 0;
  padding: 10px;
  width: 250px;
  border: 1px solid #ccc;
`;

export const ErrorMessagetyled = styled(ErrorMessage)`
  font-size: 12px;
  margin-bottom: 16px;
  color: red;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
  color: #4a4848;
`;

export const ButtonSubmit = styled.button`
  padding: 10px 30px;
  background: #f8a035;
  color: #fff;
  border: none;
  border-radius: 6px;
  &:hover {
    background-color: orangered;
  }
`;