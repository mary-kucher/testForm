import React, { useEffect, useState } from 'react';
import { Box, Button, Grid, TextField } from '@mui/material';
import usersData from '../../../public/usersData.json';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/useAppDispatch.ts';
import { authorizingUser, updateEmail } from '../../reducers/userSlice.ts';

const initialData = {
  email: '',
  password: '',
};
const error = {
  isError: false,
  message: '',
}

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(initialData);
  const [errorData, setErrorData] = useState(error);
  const dispatch = useAppDispatch();

  function removeQueryParams() {
    const urlWithoutQuery = window.location.href.split('?')[0];
    window.history.replaceState({}, document.title, urlWithoutQuery);
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setErrorData({
      isError: false,
      message: '',
    });
    setData((prevState) => ({
        ...prevState,
        [name]: value.trim(),
      })
    );
  };

  useEffect(() => {
    removeQueryParams();
  }, [navigate]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const user = usersData.find(user => {
      return user.email === data.email && user.password === data.password;
    });
    if (user) {
      const updateEmailData: updateEmail = {isAuth: true, email: data.email};
      dispatch(authorizingUser(updateEmailData))
      navigate('step1');
    } else {
      setErrorData({isError: true, message: 'Incorrect login or password'})
    }
  }

  return (
    <Box sx={{display: 'flex', height: '700px', width: '100%', maxWidth: '300px', justifyContent: "center", alignItems: 'center'}}>
      <form style={{width: '100%', height: 'max-content'}} onSubmit={handleSubmit}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{gap: 4}}
        >
          <TextField
            label="Email"
            name="email"
            variant="outlined"
            type="email"
            value={data.email}
            fullWidth
            onChange={handleChange}
            error={errorData.isError}
            helperText={errorData.message}
          />
          <TextField
            label="Password"
            name="password"
            variant="outlined"
            type="password"
            value={data.password}
            fullWidth
            onChange={handleChange}
            error={errorData.isError}
            helperText={errorData.message}
          />
          <Button type="submit" variant="contained">Login</Button>
        </Grid>
      </form>
    </Box>
  );
};
