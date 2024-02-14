import { Button } from '@mui/material';
import React, { FC, MouseEventHandler } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface Props extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  name: string,
  onClick?: MouseEventHandler<HTMLButtonElement>,
}

export const NextButton: FC<Props> = ({name, onClick}) => {
  return (
    <Button sx={{width: '100%'}} type="submit" variant="contained" endIcon={<ArrowForwardIcon/>}
            onClick={onClick}>{name}</Button>
  );
};
