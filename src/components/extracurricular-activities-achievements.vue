<template>
    <div class="pl-4 pb-4">
        <ul>
            <li class="flex justify-between">
                <!-- - Участник очного этапа Модели суда по семейному праву в рамках IX Студенческого юридического форума -->
                - {{ $t('ea-achievements_li1') }} 
                <span class="whitespace-nowrap">{{ $t('November') }} 2022</span>
            </li>
            <li class="flex justify-between">
                <span>- 
                    <a  class="text-indigo-600 text-xs uppercase hover:underline" 
                        target="_blank" 
                        href="http://mylaw.fun/wp-content/uploads/2021/11/PenPaper-scaled.jpg" 
                        data-fancybox="images"
                    >
                    <!-- Участник VI Всероссийского конкурса на лучшую студенческую научную работу по административному праву и процессу -->
                    {{ $t('ea-achievements_li2') }}
                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                </span>
                <span class="whitespace-nowrap">{{ $t('October') }} 2022</span>
            </li>
            <li class="flex justify-between">- 
                <!-- Автор научной статьи «Перспективы закрепления серийных обществ с ограниченной ответственностью (Series LLC) в  корпоративном законодательстве Российской Федерации» -->
                {{ $t('ea-achievements_li3') }}
            <span class="whitespace-nowrap"> {{ $t('May') }} 2022</span></li>
            <li class="flex justify-between">- 
                <!-- Участник очного этапа чемпионата «Gardium IP Moot Court» -->
                {{ $t('ea-achievements_li4') }}
            <span class="whitespace-nowrap">{{ $t('February') }} 2022</span></li>
            <li class="flex justify-between">
                <span>- 
                    <a  class="text-indigo-600 text-xs uppercase hover:underline" 
                        target="_blank" 
                        href="http://mylaw.fun/wp-content/uploads/2021/11/PenPaper-scaled.jpg" 
                        data-fancybox="images"
                    >
                    <!-- Полуфиналист всероссийского кейс-чемпионата по семейному праву «Kutafin Legal Cup» -->
                    {{ $t('ea-achievements_li5') }}
                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                </span> 
                <span class="whitespace-nowrap">{{ $t('November') }} 2021</span>
            </li>
            <li class="flex justify-between">- 
                <!-- Автор научной статьи «Проблемы введения муниципальных округов в Российской Федерации»  -->
                {{ $t('ea-achievements_li6') }} <span class="whitespace-nowrap">{{ $t('November') }} 2020</span>
            </li>
            <!-- <p> 	<b>Пройденные курсы:</b></p> -->
            <p> 	<b>{{ $t('CoursesCompleted') }}:</b></p>
            <!-- <li class="flex justify-between">- Университет АЛРУД<span class="whitespace-nowrap">Нояб 2022</span></li> -->
            <li class="flex justify-between">- {{ $t('CoursesCompleted_1') }} <span class="whitespace-nowrap">{{ $t('November') }} 2022</span></li>
            <li class="flex justify-between">- {{ $t('CoursesCompleted_2') }} <span class="whitespace-nowrap">{{ $t('May') }} 2022</span></li>
            <li class="flex justify-between">- {{ $t('CoursesCompleted_3') }} <span class="whitespace-nowrap">{{ $t('June') }} 2022</span></li>
            <li class="flex justify-between">- {{ $t('CoursesCompleted_4') }} <span class="whitespace-nowrap">{{ $t('January') }} 2021</span></li>
        </ul>
    </div>
</template>

<script>


export default {
	name: 'extracurricular-activities-achievements',
	components: {

     },
    data() {
      return {
        
      }
    },
	methods: {

     }
  }
	
</script>