import React from 'react';
import { Box, List, ListItem, ListItemText, Paper, Typography } from '@mui/material';
import { useAppSelector } from '../hooks/useAppSelector.ts';

export const RightSide: React.FC = () => {
  const {user} = useAppSelector(state => state.user);
  const {
    firstName = '',
    lastName = '',
    email,
    position = '',
    positionShort = '',
    company = '',
    requirements = '',
  } = user;
  const requirementsList = requirements.split('\n');

  return (
    <Box sx={{height: '100%', width: '50%'}}>
      <Paper elevation={10}
             sx={{
               height: '500px',
               width: '100%',
               maxHeight: '800px',
               display: 'flex',
               flexDirection: 'column',
               padding: '30px',
               margin: '0 20px',
               boxSizing: 'border-box',
               gap: 2
             }}>
        <Typography>{!!firstName.length && `${firstName} `} {!!firstName.length && `${lastName}`}</Typography>
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Typography>{email}</Typography>
          <Typography>{!!position.length && position}</Typography>
        </Box>
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'start'}}>
          <Typography sx={{padding: '0 10px'}}>{!!positionShort.length && positionShort}</Typography>
          <Typography sx={{padding: '0 10px'}}>{!!company.length && `${company}:`}</Typography>
          <List sx={{display: 'flex', flexDirection: 'column', p: 0}}>
            {!!requirements.length && (
              requirementsList.map(el => (
                <ListItem sx={{padding: '0 20px'}} key={el}>
                  <ListItemText primary={el}/>
                </ListItem>
              )))
            }
          </List>
        </Box>
      </Paper>
    </Box>
  );
};
