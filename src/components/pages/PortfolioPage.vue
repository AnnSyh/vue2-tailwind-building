<template>
	<div class="container m-auto">

		<div class="mx-auto my-12 px-4">
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
			<perfect-scrollbar class="perfect-scrollbar tab">
				<component :is="tabs[currentTab]" class=""></component>
			</perfect-scrollbar>
		</div>

	</div>
</template>

<script>
// import ExtracurricularActivitiesAndAchievements from '@/components/extracurricular-activities-achievements.vue';
// import PersonalInterests from '@/components/personal-interests.vue';
import Personalnfo from '@/components/persona-info';
import EducationInfo from '@/components/education-info';
import Skills from '@/components/skills-info.vue';
import Experience from '@/components/experience-info.vue';
import { ref } from 'vue';

export default {
	components: {
		Personalnfo,
		Skills,
		// ExtracurricularActivitiesAndAchievements,
		// PersonalInterests,
		Experience,
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
			// ExtracurricularActivitiesAndAchievements,
			// PersonalInterests,
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

	.tab-button {
		@apply px-4 py-2 items-center rounded-t-lg duration-300 ease-in-out bg-gray-300 text-gray-800 hover:text-white cursor-pointer hover:bg-green-400 dark:hover:bg-yellow-400;
	}

	.tab-button.active {
		@apply bg-green-400 dark:bg-yellow-400 text-white;
	}
	.tab {
		@apply p-4 overflow-y-auto h-screen;
		max-height: calc(100vh - 200px);
		/* @apply flex-none min-w-full px-4 overflow-hidden lg:overflow-auto scrollbar-track:!bg-slate-100 scrollbar-thumb:!rounded ; */
		/* @apply scrollbar-thumb:!bg-slate-300 scrollbar-track:!rounded  max-h-96 ; */
	}
	a {
		@apply text-indigo-600;
	}

</style>
