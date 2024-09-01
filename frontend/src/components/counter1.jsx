import React from 'react';
import Chart from 'react-apexcharts';
import "../assets/styles/counter.css"
function Counter1({number_of_days}) {
  console.log(number_of_days)
  const achievement_color = (days) => {
    if (days < 4) return "#F68A2C";
    if (days < 8) return "#0298F3";
    if (days < 16) return "#2DCD6B";
    if (days < 31) return "#F55462";
    if (days < 61) return "#7705A4";
    if (days < 91) return "#7F45F6";
    return "#FAB90A";
  };

  const achieved_percent_based_on_level = (days) => {
    const total = (() => {
      if (days < 4) return 3;
      if (days < 8) return 7;
      if (days < 16) return 15;
      if (days < 31) return 30;
      if (days < 61) return 60;
      if (days < 91) return 90;
      return 365;
    })();
    
    return (days * 100) / total;
  };

  const achieved_percent = achieved_percent_based_on_level(number_of_days);
  
  const options = {
    series: [achieved_percent, 100 - achieved_percent],
    colors: [achievement_color(number_of_days), '#30373D'],
    chart: {
      width: 400,
      type: 'donut',
    },
    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 360,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    fill: {
      type: 'gradient',
    },
    tooltip: {
      enabled: false,
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
      },
    }],
  };

  return (
  <>
    <div id="chart">
      <Chart options={options} series={options.series} type="donut" width={options.chart.width} />
      <div id="chart_days">
    <p>{number_of_days}</p>
    <p>Day{number_of_days > 1 && "s"}</p>
    </div>
    
  </div>
  </>

  );
}

export default Counter1;
