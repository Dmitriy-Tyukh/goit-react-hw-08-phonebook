import styled from '@emotion/styled';

export const List = styled.ul`
  overflow: hidden;
  border-left: 1px solid #ccc;
  padding-bottom: 30px;
`;
export const Link = styled.li`
  list-style: none;
`;
export const ButtonDelete = styled.button`
  display: flex;
  align-items: center;
  width: 80px;
  height: 30px;
  padding: 10px;
  background: #f8a035;
  color: #fff;
  border: none;
  border-radius: 6px;
  &:hover {
    background-color: orangered;
  }
`;
export const TextStyled = styled.span`
 margin-left: 4px;
 `