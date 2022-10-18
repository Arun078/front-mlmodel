import React from 'react';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { AppBar, Tabs } from '@mui/material';
import InsightsIcon from '@mui/icons-material/Insights';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import GridViewIcon from '@mui/icons-material/GridView';
// import { faLinkedin } from '@fortawesome/free-solid-svg-icons'

import Features from './Features';
import Data from './Data';
import Pipeline from './Pipeline';
import Analytics from './Analytics';
import Dashbaord from './Dashbaord';
import Logo from "../src/assets/Logo.png";
import './App.css';
import 'react-pro-sidebar/dist/css/styles.css';
function HomePage() {
  const [type, setType] = React.useState('Dashbaord');
  const [menuCollapse, setMenuCollapse] = React.useState(false);
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };
  const tabClicked = (type) => {
    setType(type);

  }


  return (
    <>
      <div id='header'>

        <AppBar title="My App">
          <Tabs style={{ backgroundColor: '#1a1a65' }}>
            <img src={Logo} style={{ width: '5%', height: '5%', margin: '1%' }} />
          </Tabs>





        </AppBar>
        <ProSidebar style={{ height: '40rem', backgroundColor: '#1a1a65' }} collapsed={menuCollapse}>
          <div >

            <div className="closemenu" onClick={menuIconClick}  style={{ marginTop: '11%' }}>
              {/* {menuCollapse ? <FormatAlignRightIcon  /> : <FormatAlignRightIcon  />} */}

            </div>
            {!menuCollapse && <Menu iconShape="round" className="menu" style={{marginTop: "26%"}}>
              <MenuItem active={true} style={{ fontSize: 'small', height: '4rem', color: 'white' }} onClick={() => tabClicked('Dashbaord')}><SignalCellularAltIcon style={{ width: '25%' }} />Dashbaord</MenuItem>
              <MenuItem style={{ fontSize: 'small', height: '4rem', color: 'white' }} onClick={() => tabClicked('data')}><TextSnippetIcon style={{ width: '25%' }} />Data</MenuItem>
              <MenuItem style={{ fontSize: 'small', height: '4rem', color: 'white' }} onClick={() => tabClicked('features')}><GridViewIcon style={{ width: '25%' }} />Features</MenuItem>

              <MenuItem style={{ fontSize: 'small', height: '4rem', color: 'white' }} onClick={() => tabClicked('pipeline')}><DesignServicesIcon style={{ width: '25%' }} />Pipeline</MenuItem>
              <MenuItem style={{ fontSize: 'small', height: '4rem', color: 'white' }} onClick={() => tabClicked('analytics')}><InsightsIcon style={{ width: '25%' }} />Analytics</MenuItem>



            </Menu>}
          </div>

        </ProSidebar>
        {type === 'Dashbaord' && <Dashbaord />}
        {type === 'features' && <Features />}
        {type === 'data' && <Data />}
        {type === 'pipeline' && <Pipeline />}
        {type === 'analytics' && <Analytics />}
      </div>
    </>);

}
export default HomePage;