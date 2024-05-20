<template>
 <div>
  <canvas ref="chart"></canvas>
 </div>
</template>
  
  <script>
import {Chart} from 'chart.js';
import 'chartjs-plugin-labels';

export default {
  data() {
    return {
      chartData: {
        labels: ['Консультант Плюс', 'Гарант', 'Кодекс', 'Мой арбитр', 'Microsoft Office', 'Figma'],
        datasets: [{
          label: 'My First Dataset',
          data: [60, 60, 60, 60, 60, 60],
          backgroundColor: [
            'red',
            'blue',
            'yellow',
            'green',
            'purple',
            'orange'
          ]
        }]
      }
    };
  },
  mounted() {
    this.renderChart();
  },
  methods: {
    renderChart() {
      const ctx = this.$refs.chart.getContext('2d');
      new Chart(ctx, {
        type: 'pie',
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
            labels: [{
              render: 'label',
              arc: true,
              position: 'outside',
              
              fontSize: 14,
              fontStyle: 'bold',
              fontColor: '#000',
            },
          ]
          }
        }
      });
    }
  }
};

  </script>