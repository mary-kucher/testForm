import { useNavigate } from 'react-router';
import { Button } from '@mui/material';
import { FC } from 'react';

type Props = {
  name: string,
}
export const BackButton:FC<Props> = ({ name }) => {
  const navigate = useNavigate();

  return (
    <Button sx={{width: '100%'}} variant="outlined" onClick={() => navigate(-1)}>{name}</Button>
  );
};
