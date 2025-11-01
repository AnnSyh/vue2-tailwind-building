<template>
  <div>

    <div class="container mx-auto">
          <button  @click="toggleAllSections" class="text-red-500 bg-red-200 h-10 rounded px-2 py-1 text-xs whitespace-nowrap flex ml-auto items-center -my-4 ">
            {{ allSectionsOpen ? $t('CloseAllSections') : $t('OpenAllSections') }}
          </button>
          <!-- accordion-tab  -->
          <!-- :loading="enableLazyload ? 'lazy' : 'eager'" -->
          <div v-for="(item, index) in items" :key="index" class="group outline-none accordion-section" :tabindex="index">
            <div  @click="toggleAccordion(index)" 
                  class="rounded-t mt-8 group border border-gray-500 flex justify-between px-4 py-3 items-center text-gray-500 transition ease duration-500 cursor-pointer pr-10 relative"
                  :class="item.open ? '' : 'rounded-b'"
            >
              <div class="transition ease duration-500 dark:text-white">
                <b>{{ $t(item.titleName) }}</b> ({{ $t(item.titleDate) }}), {{ $t('JobTitle') }}: {{ $t(item.titlePosition) }}
              </div>
              <div v-if="Object.keys(item.content).length"
                    class="h-8 w-8 border-2 border-green-400 dark:border-yellow-400 rounded-full items-center inline-flex justify-center transform transition ease duration-500  click:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-2 mr-2"
                    :class="{'-rotate-180': item.open}"
              >              
                <i class="fas fa-chevron-down text-green-400 dark:text-yellow-400"></i>
              </div>
            </div>
            <div v-if="item.open" class="rounded-b border-b border-l mb-8 border-r border-gray-500 px-4 overflow-hidden ease duration-500">
              <ul class="work-experience">
                <li v-for="(item, index) in item.content" :key="index">
                  {{ $t(item) }}
                </li>
              </ul>
              <!-- <a v-if="item.recommendation" :href="item.recommendation" target="_blank" class="text-indigo-600 text-xs uppercase hover:underline">
                Рекомендательное письмо
                {{$t('LetterRecommendation')}}
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a> -->
              <a  v-if="item.recommendation" 
                  @click="showModalWindow(item.recommendation)" 
                  class="text-indigo-600 text-xs uppercase hover:underline cursor-pointer"
              >
                <!-- Рекомендательное письмо -->
                {{$t('LetterRecommendation')}}
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
          <!-- /accordion-tab -->
    </div>

    <Modal :src="selectedImage" :show="showModal" @close="closeModal" />

  </div>
</template>

<script>
import Modal from '@/components/ModalWindowSrc.vue';
import config from '@/config'

export default {
	name: 'experience-info',
	components: {
      Modal
     },
     data() {
      return {
        selectedImage:'',
        showModal: false,
        allSectionsOpen: false,
        config: config,
        items: [
          { 
            titleName: 'AsnisAndPartnersLawOffice',
            titleDate: 'UntilNow',  
            titlePosition: 'paralegal', 

            content: {}, 
            open: false 
          },
          { 
            titleName: 'Infralex',
            titleDate: '11.10.2022 – 24.11.2022',  
            titlePosition: 'DisputeResolutionTrainee', 

            content: {
              li1: 'Infralex_li1',
              li2: 'Infralex_li2',
              li3: 'Infralex_li3',
              li4: 'Infralex_li4',
              li5: 'Infralex_li5',
            }, 
             recommendation: config.getUploadUrl('2023/01/letterRecommendationInfralecs.jpg'),
            open: false 
          },
          { 
            titleName: 'ConsultantPlus',
            titleDate: '03.2022 – 04.2022',  
            titlePosition: 'trainee', 

            content: {
              li1: 'ConsultantPlus_li1',
              li2: 'ConsultantPlus_li2',
              li3: 'ConsultantPlus_li3',
              li4: 'ConsultantPlus_li4',
              li5: 'ConsultantPlus_li5'
            }, 
            open: false 
          },
          { 
            titleName: 'KurganovAndPartners',
            titleDate: '09.2021 – 12.2021',  
            titlePosition: 'Assistantlawyer', 

            content: {
              li1: 'KurganovAndPartners_li1',
              li2: 'KurganovAndPartners_li2',
              li3: 'KurganovAndPartners_li3',
              li4: 'KurganovAndPartners_li4',
              li5: 'KurganovAndPartners_li5'
            }, 
            open: false 
          },
          { 
            titleName: 'YUST',
            titleDate: 'autumnPractice',  
            titlePosition: 'trainee', 

            content: {
              li1: 'YUST_li1',
              li2: 'YUST_li2',
              li3: 'YUST_li3',
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
      },
      showModalWindow(src) {
        // console.log('this.selectedImage = ',src);
        this.selectedImage = src;
        this.showModal = true;
      },
      closeModal() {
        this.showModal = false;
      }    
    }
}
	
</script>