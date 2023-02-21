import { Wraper, UserName, ButtonLogOut, MailStyle } from './UserMenu.moduled';
import { celectUserName, celectUserEmail } from 'redux/auth/auth-selectors';
import { Text } from 'components/Navigation/Navigation.moduled';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import { RiLogoutCircleLine } from 'react-icons/ri';
import  userAvatar from '../../images/user.png'

export const UserMenu = () => {
    const dispatch = useDispatch();
    const userName = useSelector(celectUserName);
    const userEmail = useSelector(celectUserEmail);
    
  return (
    <Wraper>
      <img src={userAvatar} alt="user avatar" width="32" />
      <div>
        <UserName>Welcome - {userName}</UserName>
        <MailStyle>{userEmail}</MailStyle>
      </div>

      <ButtonLogOut type="button" onClick={() => dispatch(logOut())}>
        <RiLogoutCircleLine size={20} className="icomNav" />
        <Text> Log Out </Text>
      </ButtonLogOut>
    </Wraper>
  );
};
