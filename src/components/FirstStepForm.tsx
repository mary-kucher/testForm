import React, { useState } from 'react';
import { Box, Container, TextField } from '@mui/material';
import { useAppSelector } from '../hooks/useAppSelector.ts';
import { useAppDispatch } from '../hooks/useAppDispatch.ts';
import { IUser } from '../reducers/IUser.ts';
import { updateUserData } from '../reducers/userSlice.ts';
import { useNavigate } from 'react-router-dom';
import { NextButton } from './Buttonts/NextButton.tsx';

export const FirstStepForm: React.FC = () => {
  const {user} = useAppSelector(state => state.user);
  const {firstName, lastName, email, position} = user;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsError(false);
    const {name, value} = event.target;
    const userInfo: IUser = {
      [name]: value,
    };
    dispatch(updateUserData(userInfo));
  };

  const handleClick = () => {
    if (!firstName || !lastName || !email || !position) {
      setIsError(true);
      return;
    } else {
      navigate('/step2');
    }
  };

  return (
    <Container sx={{width: '50%'}}>
      <Box sx={{height: '100%', display: 'flex', gap: 4, flexDirection: 'column', alignItems: 'center'}}>
        <Box sx={{width: '100%', display: 'flex', gap: 4, flexDirection: 'column'}}>
          <TextField
            label="First name"
            name="firstName"
            variant="outlined"
            type="text"
            value={firstName}
            fullWidth
            onChange={handleChange}
            error={isError && firstName === ''}
          />
          <TextField
            label="Last name"
            name="lastName"
            variant="outlined"
            type="text"
            value={lastName}
            fullWidth
            onChange={handleChange}
            error={isError && lastName === ''}
          />
          <TextField
            label="Email"
            name="email"
            variant="outlined"
            type="email"
            value={email}
            fullWidth
            onChange={handleChange}
            error={isError && email === ''}
          />
          <TextField
            label="Your Position"
            name="position"
            variant="outlined"
            type="text"
            value={position}
            fullWidth
            onChange={handleChange}
            error={isError && position === ''}
          />
        </Box>
        <NextButton name="Next" onClick={handleClick}/>
      </Box>
    </Container>
  );
};
