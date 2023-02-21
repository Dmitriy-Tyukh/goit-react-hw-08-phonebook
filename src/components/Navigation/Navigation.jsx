import { NavLinkStyled, Text } from './Navigation.moduled';
import { AiTwotoneHome } from 'react-icons/ai';
import { MdContactPhone } from 'react-icons/md';

export const Navigation = () => {
  return (
    <nav>
      <NavLinkStyled to="/">
        <AiTwotoneHome size={20} className="icomHome" />
        <Text>Home</Text>
      </NavLinkStyled>

      <NavLinkStyled to="/contacts">
        <MdContactPhone size={20} className="icomNav" />
        <Text> Contacts</Text>
      </NavLinkStyled>
    </nav>
  );
};

    