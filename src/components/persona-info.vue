<template>
    <div class="pl-4 pb-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <img src="@/assets/images/IMG_ivan.jpg" alt="Сухаревский Иван Иванович" class="mb-4 w-full">
            <div>
                <h1>Сухаревский Иван Иванович</h1>
                <a class="text-indigo-600 text-xs uppercase hover:underline" href="tel:79889502395"> +7 (988) 950 23 95</a><br>
                <a class="text-indigo-600 text-xs uppercase hover:underline" href="mailto:ivan.suharevskiy@gmail.com">ivan.suharevskiy@gmail.com</a>
                <h2>{{$t('education')}}</h2>
                <p>
                    (МГЮА)<br>
                    МОСКОВСКАЯ ГОСУДАРСТВЕННАЯ ЮРИДИЧЕСКАЯ АКАДЕМИЯ , <br>
                    ИНСТИТУТ ЧАСТНОГО ПРАВА,<br>
                    Бакалавриат, 4 курс<br>
                    2019 – 2023
                </p>
                <ul>
                    <li>Средний балл (GPA): 87,2</li>
                </ul>
                <div class="flex flex-col gap-3 mt-3">
                    <a class="text-indigo-600 text-xs uppercase hover:underline" href="http://mylaw.fun/wp-content/uploads/2022/09/RESUME.pdf" target="_blank">
                        <i class="fa fa-download text-green-400 dark:text-yellow-400 mr-2"></i>Скачать портфолио(english)
                    </a>
                    <a class="text-indigo-600 text-xs uppercase hover:underline" href="http://mylaw.fun/wp-content/uploads/2023/01/RESUMERus150123.pdf" target="_blank" >
                        <i class="fa fa-download text-green-400 dark:text-yellow-400 mr-2"></i>Скачать портфолио(рус)
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


export default {
	name: 'persona-info',
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