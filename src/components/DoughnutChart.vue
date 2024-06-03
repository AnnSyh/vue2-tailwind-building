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
          // borderWidth: 100  // настройка ширины границы
  
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
          animation: {
            duration: 4000, // настройка скорости рисования
            easing: 'linear'
          },
          plugins: {
            labels: {
              render: 'label',
              fontColor: document.getElementsByTagName('html')[0].classList.contains('dark') ? 'white' : 'black'

            }
          },
          cutoutPercentage: 90, // Устанавливает отверстие в центре диаграммы на 50% от радиуса, что делает кольцо более широким
          // cutoutPercentage: function(context) {
          //     var width = context.chart.width;
          //     if (width < 600) {
          //         return 0; // Ширина 0% для разрешений менее 600 пикселей
          //     } else {
          //         return 90; // Ширина 90% для разрешений более 600 пикселей
          //     }
          // },
          // responsive: true,
          // maintainAspectRatio: false,

          layout: {
              padding: {
                  top: 10,
                  bottom: 10,
                  left: 10,
                  right: 10
              }
          }

        }
      });
    }
  }
};

  </script>