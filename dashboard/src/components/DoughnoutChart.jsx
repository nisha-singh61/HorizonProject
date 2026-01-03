import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export function DoughnutChart({ data }) {
  const options = {
    cutout: "75%", 
    //ANIMATION SETTINGS
    animation: {
      animateRotate: true,   // Chart rotates from 0 to 360 degrees on load
      animateScale: true,    // Chart grows from the center outward
      duration: 2000,        // Animation length in milliseconds (2 seconds)
      easing: "easeOutQuart", // Smooth "slow down" effect at the end
    },

    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          usePointStyle: true,
          padding: 25,
          font: {
            size: 12,
            family: "'Inter', sans-serif",
          },
        },
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        padding: 12,
        cornerRadius: 8,
      },
    },
    maintainAspectRatio: false,
    responsive: true,
    // Add hover offset for extra animation when mouse touches a segment
    hoverOffset: 20, 
  };

  return (
    <div style={{ height: "350px", marginTop: "20px", position: "relative" }}>
      <Doughnut data={data} options={options} />
    </div>
  );
}