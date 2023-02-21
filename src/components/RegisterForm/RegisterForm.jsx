import { FormStyled, LabelStyled, ButtonRegister, InputStyled, WraperInput} from './RegisterForm.moduled';
import { WraperFormLogin } from 'components/LoginForm/LoginForm.moduled';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { register } from 'redux/auth/auth-operations';
import { BsFillPersonFill } from 'react-icons/bs';
import { RiLockPasswordFill } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { MdEmail } from 'react-icons/md';
import { Avatar } from '@mui/material';
import { useState } from 'react';
import * as yup from 'yup';

let schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().nullable().email().required('Email is required'),
  password: yup.string().required('Password is required'),
});
    
export const RegisterForm = () => {
   const dispatch = useDispatch();
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [isPass, setIsPass] = useState(true);

   const handleChange = ({ target: { name, value } }) => {
     switch (name) {
       case 'name':
         return setName(value);
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
   dispatch(register({ name, email, password }));
   setName('');
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
          <BsFillPersonFill size={20} className="iconInput" />
          <LabelStyled>
            Username
            <InputStyled
              type="text"
              name="name"
              value={name}
              placeholder="Name *"
              onChange={handleChange}
            />
          </LabelStyled>
        </WraperInput>

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
            </i>}
          </LabelStyled>
        </WraperInput>

            <ButtonRegister type="submit">Register</ButtonRegister>
              
      </FormStyled>
    </WraperFormLogin>
  );
};
