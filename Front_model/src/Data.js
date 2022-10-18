
import './App.css';
import React from 'react';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import loading from '../src/assets/loading.gif';

function Features() {
  const [data, setData] = React.useState()
  const [load, setLoading] = React.useState(true)

  React.useEffect(() => {
    fetch(`http://127.0.0.1:5000/api/dataset`)
      .then((response) => response.json())
      .then((respose) => {
        setData(respose)
        setLoading(false)

      })
      .catch(() => {
        // setErrorMessage("Unable to fetch user list");
        // setLoading(false);
      });
  }, []);
  React.useEffect(() => {

  }, data);
  return (
    <div className="App">

      <TableContainer component={Paper} elevation={3} style={{ width: '65%', height: '80vh', marginLeft: '28%', marginRight: 'auto', marginTop: '-44%' }}>
        {/* <h2 style={{ backgroundColor: '#1a1a65' , color: 'white', height: '2rem' }}>Data</h2> */}
        {load ? <img src={loading} alt="loading..."  style={{marginTop: "-10%"}}/>
          :

          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead style={{ position: "sticky" }}>
              <TableRow style={{ backgroundColor: '#1a1a65' }}>
                <TableCell align="right" style={{ color: 'white',     whiteSpace: "nowrap" }}>Day of Year</TableCell>
                <TableCell align="right" style={{ color: 'white',     whiteSpace: "nowrap"  }}>Year</TableCell>
                <TableCell align="right" style={{ color: 'white',     whiteSpace: "nowrap"  }}>Month</TableCell>
                <TableCell align="right" style={{ color: 'white' ,     whiteSpace: "nowrap" }}>Day</TableCell>
                <TableCell align="right" style={{ color: 'white' ,     whiteSpace: "nowrap" }} >First Hour of Period</TableCell>
                <TableCell align="right" style={{ color: 'white' ,     whiteSpace: "nowrap" }} >Is Daylight</TableCell>
                <TableCell align="right" style={{ color: 'white',     whiteSpace: "nowrap"  }} >Distance to Solar Noon</TableCell>
                <TableCell align="right" style={{ color: 'white' ,     whiteSpace: "nowrap" }} >Average Temperature (Day)</TableCell>
                <TableCell align="right" style={{ color: 'white' ,     whiteSpace: "nowrap" }} >Average Wind Direction (Day)</TableCell>
                <TableCell align="right" style={{ color: 'white' ,     whiteSpace: "nowrap" }} >Sky Cover</TableCell>
                <TableCell align="right" style={{ color: 'white' ,     whiteSpace: "nowrap" }} >Visibility</TableCell>
                <TableCell align="right" style={{ color: 'white' ,     whiteSpace: "nowrap" }} >Relative Humidity</TableCell>

                <TableCell align="right" style={{ color: 'white' ,     whiteSpace: "nowrap" }} >Average Wind Speed (Period)</TableCell>
                <TableCell align="right" style={{ color: 'white' ,     whiteSpace: "nowrap" }} >Average Barometric Pressure (Period)</TableCell>
                <TableCell align="right" style={{ color: 'white' ,     whiteSpace: "nowrap" }} >Power Generated</TableCell>


              </TableRow>
            </TableHead>
            <TableBody>

              {data && data.map((row) => (
                <TableRow

                >

                  <TableCell align="center">{row.Day_of_Year}</TableCell>
                  <TableCell align="center">{row.Year}</TableCell>
                  <TableCell align="center">{row.Month}</TableCell>
                  <TableCell align="center">{row.Day}</TableCell>
                  <TableCell align="center">{row.First_Hour_of_Period}</TableCell>
                  <TableCell align="center">{row.IsDaylight.replace(/['"]+/g, '')}</TableCell>
                  <TableCell align="center">{row.Distance_to_Solar_Noon}</TableCell>
                  <TableCell align="center">{row.Average_Temperature}</TableCell>
                  <TableCell align="center">{row.Average_Wind_Direction}</TableCell>
                  <TableCell align="center">{row.Sky_Cover}</TableCell>
                  <TableCell align="center">{row.Visibility}</TableCell>
                  <TableCell align="center">{row.Relative_Humidity}</TableCell>
                  <TableCell align="center">{row.Average_Wind_Speed}</TableCell>
                  <TableCell align="center">{row.Average_Barometric_Pressure}</TableCell>
                  <TableCell align="center">{row.Power_Generated}</TableCell>

   

                </TableRow>
              ))}
            </TableBody>
          </Table>}
      </TableContainer>

    </div>
  );
}
export default Features;
