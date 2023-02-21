import styled from "@emotion/styled";

export const Wraper = styled.div`
 display: flex;
  align-items: center;
  gap: 12px;
`
export const UserName = styled.p`
font-weight: 700;
`
export const ButtonLogOut = styled.button`
  position: relative;
  padding: 10px;
  background: #f8a035;
  color: #fff;
  border: none;
  border-radius: 6px;
  &:hover {
    background-color: orangered;
  }
`;

export const MailStyle = styled.span`
font-size:14px;
`