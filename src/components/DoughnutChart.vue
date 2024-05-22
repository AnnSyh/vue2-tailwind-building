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
        // labels: ['Консультант Плюс', 'Гарант', 'Кодекс', 'Мой арбитр', 'Microsoft Office', 'Figma'],
        datasets: [{
          data: [87.2, 12.8],
          backgroundColor: [
            '#47cf73',
            '#d1d5db',
          ],
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
        type: 'doughnut',
        data: this.chartData,
        options: {
          responsive: true,
          legend: { // отключение legend
            display: false,
          },
          tooltips: { // отключение tooltips
            enabled: false
          },
          borderWidth: 1, // настройка ширины границы
          animation: {
            duration: 4000, // настройка скорости рисования
            easing: 'linear'
          },
          plugins: {
            labels: {
              render: 'label'
            }
          }
        }
      });
    }
  }
};

  </script>