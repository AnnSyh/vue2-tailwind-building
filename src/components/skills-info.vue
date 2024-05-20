<template>
  <div>
    <!-- <ul class="skills">
        <li><b>Языки:</b> Английский (Upper-intermediate), Испанский (Pre-intermediate)</li>
        <li><b>Компьютерные навыки:</b> Microsoft Office, Figma</li>
        <li><b>Дополнительно:</b> Консультант Плюс, Гарант, Кодекс, Мой арбитр, Westlaw</li>
    </ul> -->

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
      <div class="rounded border md:shadow w-full p-4 overflow-hidden">
        <h3 class="font-semibold text-gray-800 my-4 text-lg dark:text-white">{{$t('Languages')}}:</h3>
        <BarChart :width="300" :height="300"/>
      </div>
      <div class="rounded border md:shadow w-full p-4 overflow-hidden">
        <h3 class="font-semibold text-gray-800 my-4 text-lg dark:text-white">{{$t('other')}}:</h3>
        <PieChart :width="300" :height="300"/>
      </div>
      <!-- <div class="rounded border md:shadow w-full p-4 overflow-hidden">
        <h3 class="font-semibold text-gray-800 my-4 text-lg dark:text-white">Компьютерные навыки:</h3>
        
      </div> -->
    </div>

  </div>
</template>

<script>
import PieChart from '@/components/PieChart.vue'
import BarChart from '@/components/BarChart.vue'

export default {
	name: 'skills-info',
	components: {
    PieChart,
    BarChart,
    },
    data() {
      return {

      }
    },
    methods: {

      }
    }
	
</script>