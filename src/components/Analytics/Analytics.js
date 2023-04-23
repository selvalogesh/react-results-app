import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

import PropTypes from 'prop-types';
import styles from './Analytics.module.css';

const Analytics = () => {
  const [xAxis, setXAxis] = useState([]);
  const [yAxis, setYAxis] = useState([]);

  let data = {
    labels: xAxis,
    datasets: [
      {
        label: '# of Votes',
        data: yAxis,
        fill: false,
        backgroundColor: 'rgb(120, 142, 255)',
        borderColor: 'rgba(120, 142, 255, 1)',
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch("http://python-bcg-backend.herokuapp.com/analytics/all");
      let x = []
      let y = []
      response = await response.json()
      for(let item of response){
        x.push(item["year_month"]);
        y.push(item["count"]);
      }
      setXAxis(x);
      setYAxis(y);
      console.log(response)
    }
    fetchMyAPI()
  },[])

  return(
  <div className={styles.Analytics}>
    <Bar data={data} options={options} />
  </div>
)};

Analytics.propTypes = {};

Analytics.defaultProps = {};

export default Analytics;
