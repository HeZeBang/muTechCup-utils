import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Card, CardContent, CardHeader, Container, Typography } from '@mui/material';
import music from './music.json';

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <Card>
          <CardHeader title="Random Tool" />
          <CardContent>
            <Typography variant="body1">Random Tool</Typography>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}

export default App;
