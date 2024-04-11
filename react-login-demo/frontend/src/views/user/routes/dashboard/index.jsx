import React from "react";
import Chart from './chart';

const Dashboard = () => {
  return (
    <div className="mainContainer">
      <div className={'titleContainer'}>
        <div>Sales!</div>
      </div>
      <Chart />
    </div>
  )
}

export default Dashboard;
