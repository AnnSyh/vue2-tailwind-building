<template>
  <div>
    <p>
        МОСКОВСКАЯ ГОСУДАРСТВЕННАЯ ЮРИДИЧЕСКАЯ АКАДЕМИЯ (МГЮА),<br>
        ИНСТИТУТ ЧАСТНОГО ПРАВА,<br>
        Бакалавриат, 4 курс
    </p>
    <div class="relative">
      <span class="title">Средний балл (GPA)</span>
      <DoughnutChart :width="600" :height="600"/>
      <div id="name">
        <span class="persent">{{ counter.toFixed(1) }}%</span>
        <span class="title">Годы обучения</span>
        <span class="year">2019 – 2023</span>
      </div>
    </div>
  </div>
</template>

<script>
import DoughnutChart from '@/components/DoughnutChart.vue'

export default {
	name: 'education-info',
	components: {
    DoughnutChart,
     },
    data() {
      return {
        counter: 0,
        timer: null,
        targetNumber: 87.1,
        
      }
    },
    mounted() {
        this.timer = setInterval(() => {
          this.counter += 0.1;
          if (this.counter >= this.targetNumber) {
            clearInterval(this.timer);
          }
        }, 4);

    },
    beforeDestroy() {
      clearInterval(this.timer);
    },
  }
	
</script>
<style scoped>
  #wrapper {
    position: relative;
    padding: 50px 0;
    width: 300px;
  }
  #demo {
    -webkit-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    transform: rotate(-90deg);
  }

    ul {
    list-style: none;
    margin-left: 100px;
  }

  #name  {
    position: absolute;
    width: 200px;
    height: 50px;
    top: calc(42% - 25px);
    left: calc(50% - 100px);
}

.title, .persent,.year {
  display: block;
  text-align: center;
  width: 100%;
}
.persent {
  font-size: 400%;
}

</style>