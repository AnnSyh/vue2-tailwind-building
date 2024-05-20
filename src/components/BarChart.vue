<template>
  <div>
    <canvas ref="chart"></canvas>
  </div>
</template>
  
  <script>
  import { Chart } from 'chart.js'
  import 'chartjs-plugin-labels';

  
  export default {
    data() {
      return {
        chartData: {
          labels: ['English', 'Spanish'],
          datasets: [
            {
              // label: 'My First dataset',
              data: [50445, 30000, 15900],
              backgroundColor: [
                '#FF6384',
                '#36A2EB',
              ]
            }
          ]
        },
      }
    },
    mounted() {
    this.renderChart();
  },
  methods: {
    renderChart() {
      const ctx = this.$refs.chart.getContext('2d');
      new Chart(ctx, {
        type: 'bar',
        data: this.chartData,
        options: {
          responsive: true,
          legend: {
            display: false,
          },
          tooltips: { // работает 
            enabled: false
          },
          plugins: {
            labels: {
              render: 'label',
            },
          },
          scales: {
            yAxes: [{
              ticks: { //  работает
                beginAtZero: true,
                callback: function(value) {
               if (value === 60000) {
                    return 'Advanced';
                  } 
                  else if (value === 50000) {
                    return 'Upper-intermidiate';
                  } 
                  else if (value === 40000) {
                    return 'Intermidiate';
                  } 
                  else if (value === 30000) {
                    return 'Pre-intermediate';
                  } 
                  else if (value === 20000) {
                    return 'Elementary';
                  } 
                  else if (value === 10000) {
                    return 'Beginner';
                  } 
                  else {
                    return value;
                  }
                }
              }
            }]
          },
        }
      });
    }
  }
  }
  </script>
  