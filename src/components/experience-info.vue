<template>
  <div>

    <div class="container mx-auto">
          <button  @click="toggleAllSections" class="text-red-500 bg-red-200 h-10 rounded px-2 py-1 text-xs whitespace-nowrap flex ml-auto items-center -my-4 ">
            {{ allSectionsOpen ? 'Close All Sections' : 'Open All Sections' }}
          </button>
          <!-- accordion-tab  -->
          <!-- :loading="enableLazyload ? 'lazy' : 'eager'" -->
          <div v-for="(item, index) in items" :key="index" class="group outline-none accordion-section" :tabindex="index">
            <div  @click="toggleAccordion(index)" 
                  class="rounded-t mt-8 group border border-gray-500 flex justify-between px-4 py-3 items-center text-gray-500 transition ease duration-500 cursor-pointer pr-10 relative"
                  :class="item.open ? '' : 'rounded-b'"
            >
              <div class="transition ease duration-500 dark:text-white">
                <b>{{ item.titleName }}</b> ({{ item.titleDate }}), {{ item.titlePosition }}
              </div>
              <div class="h-8 w-8 border-2 border-green-400 dark:border-yellow-400 rounded-full items-center inline-flex justify-center transform transition ease duration-500  click:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-2 mr-2"
                    :class="{'-rotate-180': item.open}"
              >
                <i class="fas fa-chevron-down text-green-400 dark:text-yellow-400"></i>
              </div>
            </div>
            <div v-if="item.open" class="rounded-b border-b border-l mb-8 border-r border-gray-500 px-4 overflow-hidden ease duration-500">
              <ul class="work-experience">
                <li v-for="(item, index) in item.content" :key="index">
                  {{ item }}
                </li>
              </ul>
              <a v-if="item.recommendation" :href="item.recommendation" target="_blank" class="text-indigo-600 text-xs uppercase hover:underline">
                Рекомендательное письмо
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
          <!-- /accordion-tab -->
    </div>

  </div>
</template>

<script>


export default {
	name: 'experience-info',
	components: {

     },
     data() {
    return {
      allSectionsOpen: false,
      items: [
        { 
          titleName: 'Адвокатское бюро г.Москвы «Инфралекс»',
          titleDate: '11.10.2022 – 24.11.2022',  
          titlePosition: 'стажер в практике разрешения споров', 

          content: {
            li1: 'Подготовка различных процессуальных документов (ходатайства, жалобы, объяснения) от имени адвокатов',
            li2: 'Анализ и обобщение судебной практики по различным вопросам (например, по вопросам: «Могут ли вкладчики ПИФа выступать в суде отдельно от управляющей компании?»',
            li3: '«Анализ судебной практики с участием конкретного эксперта»',
            li4: 'Взаимодействие с судами, получение нужной документации',
            li5: 'Техническая работа (ведение реестров, описей документов)',
          }, 
          recommendation: 'https://mylaw.fun/wp-content/uploads/2023/01/letterRecommendationInfralecs.pdf',
          open: false 
        },
        { 
          titleName: 'АО «Консультант-Плюс»',
          titleDate: '03.2022 – 04.2022',  
          titlePosition: 'должность-стажер', 

          content: {
            li1: 'Разработка LegalTech проекта (Инструмент, позволяющий автоматизировать процесс согласования договора внутри компании и с контрагентом) в составе команды из юристов и IT специалистов',
            li2: 'Написание правовых заключений по вопросу возникновения и защиты интеллектуальных прав на сайт',
            li3: 'Подготовка различного рода отчетной документации',
            li4: 'Поиск актуальной информации и написание/редактирование юридических новостей',
            li5: 'Подготовка визуальной части проекта в программе «Figma».'
          }, 
          open: false 
        },
        { 
          titleName: 'Коллегия адвокатов «Курганов и партнеры»',
          titleDate: '09.2021 – 12.2021',  
          titlePosition: 'должность-помощник адвоката', 

          content: {
            li1: 'Написание и отправка в арбитражные суды различных процессуальных документов (ходатайства, претензии, иски) от имени адвоката',
            li2: 'Подготовка к судебным разбирательствам, проведение юридических исследований и составление документов',
            li3: 'Анализ судебной практики по различным правовым спорам',
            li4: 'Исправление ранее написанных документов, подача их в суд, выставление счетов клиентам',
            li5: 'Подготовка правовых заключений по вопросам из других отраслей права (например, по вопросам: «Как стать сенатором?» или «Как открыть ООО?»).'
          }, 
          open: false 
        },
        { 
          titleName: 'Юридическая фирма «ЮСТ»',
          titleDate: 'осенняя практика',  
          titlePosition: 'должность-стажер', 

          content: {
            li1: 'Написание правовых заключений по вопросам корпоративного права (например, «Анализ SPV фондов в Америке», «Структура договора SAFE», «Сравнительный анализ правовых механизмов венчурного инвестирования в США и РФ»',
            li2: 'Подготовка документов, таблиц, презентаций для внутренних нужд и для клиентов',
            li3: 'Анализ судебной практики по вопросам корпоративного и интеллектуального права',
          }, 
          open: false 
        },
      ]
    };
  },
	methods: {
      toggleAccordion(index) {
        this.items[index].open = !this.items[index].open;
      },
      toggleAllSections() {
        this.allSectionsOpen = !this.allSectionsOpen;
        this.items.forEach(item => item.open = this.allSectionsOpen);
      }
    }
}
	
</script>