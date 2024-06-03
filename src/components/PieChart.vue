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
        labels: ['Консультант Плюс', 'Гарант', 'Figma', 'Microsoft Office', 'Мой арбитр', 'Кодекс'],
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
          // maintainAspectRatio: false,
          legend: {
            display: false,
          },
          tooltips: { // работает 
            enabled: false
          },
          animation: {
            duration: 4000, // настройка скорости рисования
            easing: 'linear'
          },
          plugins: {
            labels: [{
              render: 'label',
              // arc: true,
              position: 'outside',
              
              fontSize: 14,
              fontStyle: 'bold',
              // fontColor: '#000',
              fontColor: document.getElementsByTagName('html')[0].classList.contains('dark') ? 'white' : 'black'
            },
          ]
          }
        }
      });
    }

  }
};

  </script>