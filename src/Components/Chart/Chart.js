import React, { useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import './Chart.css'; 

const SalesChart = () => {
  const [activeTab, setActiveTab] = useState('monthly');

  const monthlyData = {
    title: 'Monthly Sales Performance',
    labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    data: [15000, 8000, 4500, 11000, 2000, 9500],
  };

  const quarterlyData = {
    title: 'Sales Performance',
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    data: [15000, 8000, 4500, 11000],
  };

  const switchTabs = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="tab-buttons">
        <button
          onClick={() => switchTabs('monthly')}
          className={activeTab === 'monthly' ? 'active' : ''}
        >
          Monthly
        </button>
        <button
          onClick={() => switchTabs('quarterly')}
          className={activeTab === 'quarterly' ? 'active' : ''}
        >
          Quarterly
        </button>
      </div>
      <div className="chart-container">
        {activeTab === 'monthly' ? (
          <div>
            <h2>{monthlyData.title}</h2>
            <Line
              data={{
                labels: monthlyData.labels,
                datasets: [
                  {
                    label: 'Monthly Sales',
                    data: monthlyData.data,
                    fill: false,
                    borderColor: 'rgba(75,192,192,1)',
                    tension: 0.3,
                  },
                ],
              }}
              height={200} // Adjust the height as needed
            />
          </div>
        ) : (
          <div>
            <h2>{quarterlyData.title}</h2>
            <Bar
              data={{
                labels: quarterlyData.labels,
                datasets: [
                  {
                    label: 'Quarterly Sales',
                    data: quarterlyData.data,
                    backgroundColor: 'rgba(75,192,192,0.6)',
                  },
                ],
              }}
              height={200} // Adjust the height as needed
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SalesChart;
