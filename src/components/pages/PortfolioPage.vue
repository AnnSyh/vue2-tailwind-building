<template>
	<div class="container m-auto">
		<div class="grid lg:grid-cols-2">
			<div class="border-b-2 border-white">
				<img 	class="object-cover w-full h-full" 
						style="max-height: 512px;"
						src="http://mylaw.fun/wp-content/uploads/2022/09/IMG_0705-scaled.jpg" 
						alt=""
				>
			</div>
			<div class="flex flex-col">
				<div class="pl-4 pb-4">
					<h1>Сухаревский Иван Иванович</h1>
					<a href="tel:79889502395"> +7 (988) 950 23 95</a><br>
					<a href="mailto:ivan.suharevskiy@gmail.com">ivan.suharevskiy@gmail.com</a>
					<h2>{{$t('education')}}</h2>
					<p>
						МОСКОВСКАЯ ГОСУДАРСТВЕННАЯ ЮРИДИЧЕСКАЯ АКАДЕМИЯ (МГЮА), ИНСТИТУТ ЧАСТНОГО ПРАВА,<br>
						МОСКВА<br>
						Бакалавриат, 4 курс<br>
						2019 – 2023
					</p>
					<ul>
						<li>Средний балл (GPA): 87,2</li>
					</ul>
					<div class="flex justify-between">
						<a href="http://mylaw.fun/wp-content/uploads/2022/09/RESUME.pdf" target="_blank">
							<i class="fa fa-download"></i>Скачать портфолио(english)
						</a>
						<a href="http://mylaw.fun/wp-content/uploads/2023/01/RESUMERus150123.pdf" target="_blank" >
							<i class="fa fa-download"></i>Скачать портфолио(рус)
						</a>
					</div>
				</div>
				<div class="mt-auto">
					<AccordionBlock :title="$t('extracurricularActivitiesAndAchievements')">
						<ul class="achievements">
							<li class="flex justify-between">- Участник очного этапа Модели суда по семейному праву в рамках IX Студенческого юридического форума<br>
								<span class="date">Нояб 2022</span></li>
							<li class="flex justify-between">- Участник VI Всероссийского конкурса на лучшую студенческую научную работу по административному праву и процессу<br>
								<span class="date">Окт 2022</span></li>
							<li class="flex justify-between">- Автор научной статьи «Перспективы закрепления серийных обществ с ограниченной ответственностью (Series LLC) в<br>
							корпоративном законодательстве Российской Федерации»<br>
								<span class="date"> Май 2022</span></li>
							<li class="flex justify-between">- Участник очного этапа чемпионата «Gardium IP Moot Court»<br>
								<span class="date">Февр 2022</span></li>
							<li class="flex justify-between"><span>- <a href="http://mylaw.fun/wp-content/uploads/2021/11/PenPaper-scaled.jpg" data-fancybox="images">Полуфиналист всероссийского кейс-чемпионата по семейному праву «Kutafin Legal Cup»</a></span> 
								<span class="date">Нояб 2021</span>
							</li>
							<li class="flex justify-between">- Автор научной статьи «Проблемы введения муниципальных округов в Российской Федерации» 
								<span class="date">Нояб<br>
								2020</span>
							</li>
							<li> 	<b>Пройденные курсы:</b></li>
							<li class="flex justify-between">- Университет АЛРУД<span class="date">Нояб 2022</span></li>
							<li class="flex justify-between">- «Сделки слияний и поглощений» от White&amp;Case <span class="date">Май 2022</span></li>
							<li class="flex justify-between">- Курс повышения квалификации «Бизнес и право» от МГЮА <span class="date">Июнь 2022</span></li>
							<li class="flex justify-between">- Курс «Правовые формы ведения бизнеса в России» от МГИМО <span class="date">Янв 2021</span></li>
						</ul>
					</AccordionBlock> 
					<AccordionBlock :title="$t('skills')">
						<ul class="skills">
							<li><b>Языки:</b> Английский (Upper-intermediate), Испанский (Pre-intermediate)</li>
							<li><b>Компьютерные навыки:</b> Microsoft Office, Figma</li>
							<li><b>Дополнительно:</b> Консультант Плюс, Гарант, Кодекс, Мой арбитр, Westlaw</li>
						</ul>
					</AccordionBlock>   
					<AccordionBlock :title="$t('experience')">
						<p>
							<b>Адвокатское бюро г.Москвы «Инфралекс»</b> (11.10.2022 – 24.11.2022), должность – стажер в практике разрешения споров<br>
							<a href="http://mylaw.fun/wp-content/uploads/2023/01/letterRecommendationInfralecs.pdf" target="_blank" rel="noopener">Рекомендательное письмо <i class="icon-exit-top-right mr-1"></i></a>
						</p>
						<ul class="work-experience" >
							<li>- Подготовка различных процессуальных документов (ходатайства, жалобы, объяснения) от имени адвокатов</li>
							<li>- Подготовка различных процессуальных документов (ходатайства, жалобы, объяснения) от имени адвокатов</li>
							<li>- Анализ и обобщение судебной практики по различным вопросам (например, по вопросам: «Могут ли вкладчики ПИФа<br>
							выступать в суде отдельно от управляющей компании?», «Анализ судебной практики с участием конкретного эксперта»)</li>
							<li>- Взаимодействие с судами, получение нужной документации</li>
							<li>- Техническая работа (ведение реестров, описей документов).</li>
						</ul>
						<p><b>АО «Консультант-Плюс» </b>(03.2022 – 04.2022), должность-стажер</p>
						<ul class="work-experience" >
							<li>- Разработка LegalTech проекта (Инструмент, позволяющий автоматизировать процесс согласования договора<br>
							внутри компании и с контрагентом) в составе команды из юристов и IT специалистов</li>
							<li>- Написание правовых заключений по вопросу возникновения и защиты интеллектуальных прав на сайт</li>
							<li>- Подготовка различного рода отчетной документации</li>
							<li>- Поиск актуальной информации и написание/редактирование юридических новостей</li>
							<li>- Подготовка визуальной части проекта в программе «Figma».</li>
						</ul>
						<p><b>Коллегия адвокатов «Курганов и партнеры» </b>(09.2021 – 12.2021), должность-помощник адвоката</p>
						<ul class="work-experience" >
							<li>- Написание и отправка в арбитражные суды различных процессуальных документов (ходатайства, претензии,<br>
							иски) от имени адвоката</li>
							<li>- Подготовка к судебным разбирательствам, проведение юридических исследований и составление документов</li>
							<li>- Анализ судебной практики по различным правовым спорам</li>
							<li>- Исправление ранее написанных документов, подача их в суд, выставление счетов клиентам</li>
							<li>- Подготовка правовых заключений по вопросам из других отраслей права (например, по вопросам: «Как<br>
							стать сенатором?» или «Как открыть ООО?»).</li>
						</ul>
						<p><b>Юридическая фирма «ЮСТ» </b>(осенняя практика), должность-стажер</p>
						<ul class="work-experience" >
							<li>- Написание правовых заключений по вопросам корпоративного права (например, «Анализ SPV фондов в<br>
							Америке», «Структура договора SAFE», «Сравнительный анализ правовых механизмов венчурного<br>
							инвестирования в США и РФ»</li>
							<li>- Подготовка документов, таблиц, презентаций для внутренних нужд и для клиентов</li>
							<li>- Анализ судебной практики по вопросам корпоративного и интеллектуального права.</li>
						</ul>
					</AccordionBlock>
					<AccordionBlock :title="$t('personalInterests')">
						<p>
							Футбол (участвую в любительских чемпионатах).<br> В свободное время увлекаюсь изучением
							корпоративного и гражданского права, а также семейного права
						</p>
					</AccordionBlock>  
				</div>
			</div>

		</div>
		
  
	</div>
</template>

<script>
import AccordionBlock from '@/components/AccordionBlock.vue';

export default {
	components: {
		AccordionBlock,
	},
	data:()=>({
		
	}),
	methods: {
		
	}
}
</script>

<style scoped>

</style>
