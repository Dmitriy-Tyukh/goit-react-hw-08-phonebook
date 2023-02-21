import { Text } from "components/Navigation/Navigation.moduled";
import { Wraper } from "components/UserMenu/UserMenu.moduled";
import { NavLinkStyled } from "./AuthNav.styled";
import { FaRegistered } from 'react-icons/fa';
import { RiLoginCircleLine } from 'react-icons/ri';

export const AuthNav = () => {
  return (
    <Wraper>
      <NavLinkStyled to="/register">
        <FaRegistered size={20} className="icomNav" />
        <Text> Register </Text>
      </NavLinkStyled>

      <NavLinkStyled to="/login">
        <RiLoginCircleLine size={20} className="icomNav" />
        <Text> Log In </Text>
      </NavLinkStyled>
    </Wraper>
  );
};
