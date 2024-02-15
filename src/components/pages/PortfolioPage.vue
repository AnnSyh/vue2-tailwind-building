<template>
	<div class="container m-auto">

		<div class="demo">
			<button
				v-for="(_, tab) in tabs"
				:key="tab"
				:class="['tab-button m-[50px]', { active: currentTab === tab }]"
				@click="currentTab = tab"
				>
				{{ $t(tab) }}
				<!-- {{$t('main')}} -->
			</button>
			<component :is="tabs[currentTab]" class="tab"></component>
		</div>

		<!-- <div class="grid lg:grid-cols-2">
			<div class="border-b-2 border-white">
				<img 	class="object-cover w-full h-full" 
						style="max-height: 512px;"
						src="http://mylaw.fun/wp-content/uploads/2022/09/IMG_0705-scaled.jpg" 
						alt=""
				>
			</div>
			<div class="flex flex-col">
			
				<div class="mt-auto">
					<AccordionBlock :title="$t('extracurricularActivitiesAndAchievements')">
						достижения
					</AccordionBlock> 
					<AccordionBlock :title="$t('skills')">
						skills
					</AccordionBlock>   
					<AccordionBlock :title="$t('experience')">
						experience
					</AccordionBlock>
					<AccordionBlock :title="$t('personalInterests')">
						personalInterests
					</AccordionBlock>  
				</div>
			</div>

		</div> -->

		<button class="mt-4 flex px-4 py-2 items-center rounded-lg p-1 duration-300 ease-in-out bg-green-400 text-white max-w-max"
				@click="showModalWindow()" 
		>
			Связаться со мной
		</button>

		<ModalWindowConnect :show="showModal" @close="closeModal" />

	</div>
</template>

<script>
import ModalWindowConnect from '@/components/ModalWindowConnect.vue';
import PersonalInterests from '@/components/personal-interests.vue';
import Personalnfo from '@/components/persona-info';
import EducationInfo from '@/components/education-info';
import Skills from '@/components/skills-info.vue';
import ExtracurricularActivitiesAndAchievements from '@/components/extracurricular-activities-achievements.vue';
import Experience from '@/components/experience-info.vue';
import { ref } from 'vue';

export default {
	components: {
		ModalWindowConnect,
		Personalnfo,
		Skills,
		ExtracurricularActivitiesAndAchievements,
		Experience,
		PersonalInterests,
		EducationInfo,
	},
	data:()=>({
		showModal: false,
		currentTab: ref('Personalnfo'),
		tabs: {
			Personalnfo,
			EducationInfo,
			Experience,
			Skills,
			ExtracurricularActivitiesAndAchievements,
			PersonalInterests,
		}
			}),
	methods: {
		showModalWindow() {
			this.showModal = true;
		},
		closeModal() {
			this.showModal = false;
		}
	}
}
</script>

<style scoped>
	.demo {
		@apply border border-gray-200 p-4 m-4 overflow-hidden;
	}

	.tab-button {
		@apply   px-4 py-2 items-center rounded-t-lg duration-300 ease-in-out bg-green-400 text-white cursor-pointer;
	/* padding: 6px 10px;
	border-top-left-radius: 3px;
	border-top-right-radius: 3px; */
	/* border: 1px solid #ccc; */
	/* cursor: pointer; */
	/* background: #f0f0f0; */
	/* margin-bottom: -1px; */
	/* margin-right: -1px; */
	}
	.tab-button:hover {
	background: #e0e0e0;
	}
	.tab-button.active {
	background: #e0e0e0;
	}
	.tab {
	border: 1px solid #ccc;
	padding: 10px;
	}
</style>
