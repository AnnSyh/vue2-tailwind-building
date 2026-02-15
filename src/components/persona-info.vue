<template>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <img src="@/assets/images/IMG_ivan.jpg" alt="Сухаревский Иван Иванович" class="mb-4 w-full">
        <div>
            <div><strong>{{$t('SukharevskiyIvan')}}</strong></div>
            <a class="text-indigo-600 text-xs uppercase hover:underline" href="tel:79889502395"> +7 (988) 950 23 95</a><br>
            <a class="text-indigo-600 text-xs uppercase hover:underline" href="mailto:ivan.Sukharevskiy@gmail.com">ivan.Sukharevskiy@gmail.com</a>
            <div><strong>{{$t('education')}}</strong></div>
            <p>
                ({{$t('MSLA')}})<br>
                {{$t('MSLAFull')}}, <br>
                {{$t('PrivateLawInstitute')}},<br>
                <!-- {{$t('BachelorDegree')}}, 4 {{$t('thYear')}}<br> -->
                2019 – 2023
            </p>
            <ul>
                <!-- <li>Средний балл (GPA): 87,2</li> -->
                <li>{{ $t('AverageScore') }}(GPA): 87,2</li>
            </ul>
            <!-- <p>Персональные интересы</p> -->
            <div><strong>{{$t('personalInterests')}}</strong></div>
            <p>
                {{ $t('PersonalInterests_1') }}
            </p>
            <p>
                {{ $t('PersonalInterests_2') }}
            </p>
            <div class="flex flex-col gap-3 mt-3">
                <a class="text-indigo-600 text-xs uppercase hover:underline" :href="config.getUploadUrl('2022/09/RESUME.pdf')" target="_blank">
                    <i class="fa fa-download text-green-400 dark:text-yellow-400 mr-2"></i>Скачать портфолио(english)
                </a>
                <a class="text-indigo-600 text-xs uppercase hover:underline" :href="config.getUploadUrl('2023/01/RESUMERus150123.pdf')" target="_blank" >
                    <i class="fa fa-download text-green-400 dark:text-yellow-400 mr-2"></i>Скачать портфолио(рус)
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import config from '@/config'

export default {
	name: 'persona-info',
	components: {

     },
    data() {
      return {
        config: config,
      }
    },
	methods: {

     }
  }

</script>
