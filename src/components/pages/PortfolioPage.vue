<template>
	<div class="container m-auto">

		<div class="demo">
			<div class="overflow-x-auto flex whitespace-nowrap">
				<button
					v-for="(_, tab) in tabs"
					:key="tab"
					:class="['tab-button', { active: currentTab === tab }]"
					@click="currentTab = tab"
					>
					{{ $t(tab) }}
				</button>
			</div>
			<component :is="tabs[currentTab]" class="tab"></component>
		</div>

	</div>
</template>

<script>
import PersonalInterests from '@/components/personal-interests.vue';
import Personalnfo from '@/components/persona-info';
import EducationInfo from '@/components/education-info';
import Skills from '@/components/skills-info.vue';
import ExtracurricularActivitiesAndAchievements from '@/components/extracurricular-activities-achievements.vue';
import Experience from '@/components/experience-info.vue';
import { ref } from 'vue';

export default {
	components: {
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
		@apply  m-4 overflow-hidden;
	}

	.tab-button {
		@apply px-4 py-2 items-center rounded-t-lg duration-300 ease-in-out bg-gray-300 text-gray-800 hover:text-white cursor-pointer hover:bg-green-400 dark:hover:bg-yellow-400;
	}

	.tab-button.active {
		@apply bg-green-400 dark:bg-yellow-400 text-white;
	}
	.tab {
		@apply border border-gray-200 p-4;
	}
	a {
		@apply text-indigo-600;
	}
</style>
