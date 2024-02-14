import React, { useEffect } from 'react';
import { Box, Divider } from '@mui/material';
import { FirstStepForm } from '../FirstStepForm.tsx';
import { RightSide } from '../RightSide.tsx';
import { useAppSelector } from '../../hooks/useAppSelector.ts';
import { useNavigate } from 'react-router-dom';

export const FirstStepPage: React.FC = () => {
  const navigate = useNavigate();
  const {isAuth} = useAppSelector(state => state.user);
  useEffect(() => {
    if (!isAuth) {
      navigate('/');
    }
  }, [isAuth, navigate]);
  return (
    <Box sx={{width: '100%', height: '100%', display: 'flex', maxHeight: '800px', margin: '0 20px'}}>
      <FirstStepForm/>
      <Divider orientation="vertical" variant="middle" flexItem/>
      <RightSide/>
    </Box>
  );
};
