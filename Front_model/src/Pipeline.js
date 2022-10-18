
import './App.css';

import Paper from '@mui/material/Paper';

import Plot from "../src/assets/pipelinee.png";


function pipeline() {
 
  return (
    <div className="App">
      <Paper elevation={3} style={{ width: '70%', height: '80vh', marginLeft: '25%', marginRight: 'auto', marginTop: '-44%' }}>
      {/* <h2 style={{ backgroundColor: '#1a1a65' , color: 'white', height: '3rem' }}>Pipeline</h2> */}

        <div style={{ display: "flex", flexDirection: "row", marginRight: 'auto', marginLeft: "2%" }} >
          <div >


            <img alt="timer" src={Plot} style={{ width: "83%", height: '105%' }} />
          </div>




        </div>
      </Paper>
    </div>
  );
}
export default pipeline;
