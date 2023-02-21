import styled from "@emotion/styled";
import { NavLink } from 'react-router-dom';

export const NavLinkStyled = styled(NavLink)`
  position: relative;
  padding: 8px 12px;
  margin-right: 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  background-color: #efe8f5;
  font-weight: 500;
  &:hover,
  :focus {
    background-color: #feb258;
    color: white;
  }
  &.active {
    color: white;
    background-color: orangered;
    position: relative;
    &::after {
      content: ' ';
      position: absolute;
      left: 0;
      top:105%;     
      display: inline-block;
      height: 4px;
      width: 100%;
      border-radius: 2px;
      background-color: #2196f3;
    }
  }
`;
