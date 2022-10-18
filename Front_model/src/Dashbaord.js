
import './App.css';


import { Report } from 'powerbi-report-component';


function Dashboard() {

  return (
    <div className="" style={{height:'20%'}}>

<Report 
     tokenType="Embed" // or "Aad"
     accessToken="undefibned" // accessToken goes here
     embedUrl="https://app.powerbi.com/view?r=eyJrIjoiZjVjZmVlMzktM2FjNC00OTk5LWI5YjUtMGJiNTNlMzRlOTE1IiwidCI6ImE2MTdlYzYwLTBhYjMtNDBiZS05MjhmLWJmMzY1MzA4NDkxYSIsImMiOjF9" // embedUrl goes here
     embedId="undefined" // Report or Dashboard ID goes here
     permissions="All" // or "View"
     style={{width: "55rem", height:"30rem", marginTop:"-45%", marginLeft: "25%"}}

/>    </div>
  );
}
export default Dashboard;
