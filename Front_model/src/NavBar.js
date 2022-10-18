import React from 'react';
import Typography from '@mui/material/Typography';
import ExperienceTab from  './ExperienceTab';
import history from  './history';

import {AppBar, Tabs, Tab} from '@mui/material';

function HomePage() {
  const tabClicked =(type)=>{
    switch (type) {
        case experience:
          return  <Route path="/" element={<ExperienceTab />} />
        case 2:
          return <View2 />;
        default:
          return <Main clickBtn={this.clickBtn} />;
      }
    }
  }
    return (
      <AppBar title="My App">
        <Typography> Check Resume</Typography>
        <Tabs>
          <Tab style={{color: 'white', width: '35%'}} label="Professional Experience"  onClick={()=>tabClicked('experience')}/>
          <Tab style={{color: 'white', width: '35%'}} label="Education" onClick={()=>tabClicked('education')}/>
          <Tab style={{color: 'white', width: '35%'}} label="Skills" onClick={()=>tabClicked('skills')} />
          <Tab style={{color: 'white', width: '35%'}} label="Intreset" />
        </Tabs>
      </AppBar>
    )
}
export default HomePage;
