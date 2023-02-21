import {WraperFormLogin, FormStyled, LabelStyled, ButtonLogIn, InputStyled} from './LoginForm.moduled';
import { WraperInput } from 'components/RegisterForm/RegisterForm.moduled';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { logIn } from '../../redux/auth/auth-operations';
import { RiLockPasswordFill } from 'react-icons/ri';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { MdEmail } from 'react-icons/md';
import { Avatar } from '@mui/material';
import { useState } from 'react';
import * as yup from 'yup';

let schema = yup.object().shape({
  email: yup.string().nullable().email().required('Email is required'),
  password: yup.string().required('Password is required')
});
    
export const LoginForm = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPass, setIsPass] = useState(true);
  
    
  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <WraperFormLogin>
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
          
      <FormStyled
        onSubmit={handleSubmit}
        autoComplete="on"
        validationSchema={schema}
      >
        <WraperInput>
          <MdEmail size={20} className="iconInput" />
          <LabelStyled>
            Email
            <InputStyled
              type="email"
              name="email"
              value={email}
              placeholder="Email *"
              onChange={handleChange}
            />
          </LabelStyled>
        </WraperInput>

        <WraperInput>
          <RiLockPasswordFill size={20} className="iconInput" />
          <LabelStyled>
            Password
            <InputStyled
              name="password"
              type={isPass ? 'password' : 'text'}
              autoComplete="current-password"
              value={password}
              placeholder="Password *"
              onChange={handleChange}
            />
            {<i className={isPass ? 'far fa-eye-slash iconPasword' : 'far fa-eye iconPasword'}
                onClick={() => setIsPass(prev => !prev)}>
            </i>
            }
          </LabelStyled>
        </WraperInput>
              
        <ButtonLogIn type="submit" state={{ from: location }}>
          Log In
        </ButtonLogIn>
              
      </FormStyled>
    </WraperFormLogin>
  );
};
