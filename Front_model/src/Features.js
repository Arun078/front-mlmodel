
import './App.css';

import Paper from '@mui/material/Paper';
import Plots from "../src/assets/plots.png";
import Plot2 from "../src/assets/plot2.png";

function Features() {

  return (
    <div className="App">
      <Paper elevation={3} style={{ width: '70%', height: '80vh', marginLeft: '25%', marginRight: 'auto', marginTop: '-44%' }}>
        <div style={{ display: "flex", flexDirection: 'row', marginRight: 'auto', marginLeft: "-7%" }} >
          <div >


            <img alt="timer" src={Plot2} style={{ width: "83%", height: "105%" }} />
          </div>

          <div style={{ marginLeft: '-8%' }}>
            <img src={Plots} style={{ width: "105%", height: "105%" }} />
          </div>


        </div>
      </Paper>
    </div>

  );
}
export default Features;
