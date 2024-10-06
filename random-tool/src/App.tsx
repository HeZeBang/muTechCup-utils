import React from 'react';
import logo from './logo.png';
import './App.css';
import { Box, Card, CardContent, CardHeader, CardMedia, Container, Paper, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import music from './music.json';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function createData(
  type: string,
  critical: number,
  perfect: number,
  great: number,
  good: number,
  miss: number
) {
  return { type, critical, perfect, great, good, miss };
}

const rows = [
  createData('TAP', 0, 0, 0, 0, 0),
  createData('HOLD', 0, 0, 0, 0, 0),
  createData('SLIDE', 0, 0, 0, 0, 0),
  createData('TOUCH', 0, 0, 0, 0, 0),
  createData('BREAK', 0, 0, 0, 0, 0),
];

function scoreTable(rows: any) {
  return <TableContainer >
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell align="right">TYPE</TableCell>
          <TableCell align="right">CRITICAL</TableCell>
          <TableCell align="right">PERFECT</TableCell>
          <TableCell align="right">GREAT</TableCell>
          <TableCell align="right">GOOD</TableCell>
          <TableCell align="right">MISS</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row: any) => (
          <TableRow
            key={row.type}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row" align='right'>
              {row.type}
            </TableCell>
            <TableCell align="right">{row.critical}</TableCell>
            <TableCell align="right">{row.perfect}</TableCell>
            <TableCell align="right">{row.great}</TableCell>
            <TableCell align="right">{row.good}</TableCell>
            <TableCell align="right">{row.miss}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
}

function App() {
  return (
    <div className="App" style={{ 
      // backgroundImage: `url('./bg.png')`, backgroundSize: 'cover',
      minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: "center" }}>
      <Container maxWidth="lg">
        <Stack spacing={2}>
          <Card>
            {/* <CardHeader title="muTechCup - 比赛结果" /> */}
            <CardContent>
              <Stack spacing={2}>
                <Typography variant="h2" component="div" color="lightsalmon" alignSelf="center">
                  muTechCup - 比赛结果
                </Typography>
              </Stack>
            </CardContent>
          </Card>

          <Grid container spacing={2} alignItems={'center'} justifyContent={'center'}>
            {/* <Grid size={6}>
              <Card>
                <CardHeader title="1P" />
                <CardContent>
                  {scoreTable(rows)}
                </CardContent>
              </Card>
            </Grid>
            <Grid size={6}>
              <Stack spacing={2}>
                <Card>
                  <CardHeader title="2P" />
                  <CardContent>
                    {scoreTable(rows)}
                  </CardContent>
                </Card>
              </Stack>
            </Grid> */}

            <Grid size={8}>
              <Card sx={{ display: 'flex' }} >
                <CardMedia
                  component="img"
                  sx={{ width: 151 }}
                  image="https://maimaidx-eng.com/maimai-mobile/img/Music/e7c32e5c2d4300ee.png"
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography variant="h2" component="div">
                      SongNameLONGLONGLONGLONGLONGLONGLONGLONG
                    </Typography>
                    <Typography variant="h4" color="bluegrey" align="left">
                      Artist
                    </Typography>
                  </CardContent>
                </Box>
              </Card>
            </Grid>

            <Grid size={4}>
              <Paper sx={{ padding: "15px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Stack>
                  <Typography variant="h2" component="div"  alignSelf="center">
                    Track 1
                  </Typography>
                  <Typography variant="h5" component="div" alignSelf="center">
                    正常模式
                  </Typography>
                </Stack>
              </Paper>
            </Grid>

            <Grid size={12}>
              <Card>
                <Typography variant="h3" component="div" color="lightsalmon" alignSelf="center">
                  Total Score
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Stack>
      </Container >
    </div >
  );
}

export default App;
