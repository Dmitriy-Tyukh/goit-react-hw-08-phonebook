import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { HeaderStyled } from './AppBar.styled';
import { useSelector } from 'react-redux';
import { celectIsLogin } from 'redux/auth/auth-selectors';

export const AppBar = () => {
  const isLoggedIn = useSelector(celectIsLogin);

  return (
    <HeaderStyled>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </HeaderStyled>
  );
};
