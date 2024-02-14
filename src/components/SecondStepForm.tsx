import React, { useState } from 'react';
import { Box, Container, TextField } from '@mui/material';
import { useAppSelector } from '../hooks/useAppSelector.ts';
import { BackButton } from './Buttonts/BackButton.tsx';
import { useAppDispatch } from '../hooks/useAppDispatch.ts';
import { IUser } from '../reducers/IUser.ts';
import { updateUserData } from '../reducers/userSlice.ts';
import { NextButton } from './Buttonts/NextButton.tsx';

export const SecondStepForm: React.FC = () => {
  const {user} = useAppSelector(state => state.user);
  const {positionShort, company, requirements} = user;
  const dispatch = useAppDispatch();
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
    if (!positionShort || !company || !requirements) {
      setIsError(true);
      return;
    } else {
      // Continue with the next step
    }
  }
  return (
    <Container sx={{width: '50%'}}>
      <Box sx={{height: '100%', width: '100%', display: 'flex', gap: 4, flexDirection: 'column'}}>
        <TextField
          label="Name of position"
          name="positionShort"
          variant="outlined"
          type="text"
          value={positionShort}
          fullWidth
          onChange={handleChange}
          error={isError && positionShort === ''}
        />
        <TextField
          label="Company"
          name="company"
          variant="outlined"
          type="text"
          value={company}
          fullWidth
          onChange={handleChange}
          error={isError && company === ''}
        />
        <TextField
          label="Requirements"
          name="requirements"
          variant="outlined"
          type="text"
          multiline
          maxRows={10}
          value={requirements}
          fullWidth
          onChange={handleChange}
          error={isError && requirements === ''}
        />
        <Box sx={{width: '100%', display: 'flex', gap: 1}}>
          <BackButton name="Prev"/>
          <NextButton name="Next" onClick={handleClick} />
        </Box>
      </Box>
    </Container>
  );
};
