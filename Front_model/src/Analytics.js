
import './App.css';
import { Report } from 'powerbi-report-component';

function Analytics() {
  
  return (
    <div className="" style={{ height: '20%' }}>

      <Report
        tokenType="Embed" 
        accessToken="undefibned" // accessToken goes here
        embedUrl="https://app.powerbi.com/view?r=eyJrIjoiMWMzOGFkZDYtYzQ1Yy00NjZjLTlkYWUtZTM0OTU0OTA5ZDJhIiwidCI6ImE2MTdlYzYwLTBhYjMtNDBiZS05MjhmLWJmMzY1MzA4NDkxYSIsImMiOjF9&pageName=ReportSection" // embedUrl goes here
        embedId="undefined" // Report or Dashboard ID goes here
        permissions="All" // or "View"
        style={{ width: "55rem", height: "30rem", marginTop: "-45%", marginLeft: "25%" }}

      />    </div>
  );
}
export default Analytics;
