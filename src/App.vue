<template>
    <!-- :class="{'dark': isDarkMode, 'bg-fon': isIndexPage}" -->
    <div id="app">
        <Navbar />
        <router-view />
        <Footer />

    </div>
</template>

<script>
import Navbar from "@/components/NavBar.vue"
import Footer from "@/components/footer-one"

export default {
    name: 'App',
    data() {
        return {
            isIndexPage: true, // Используйте переменную для определения гл стр
            isDarkMode: false, // Используйте переменную для определения активной темы
            pageTitle: 'sukharevskiy.ru' // Задаем начальное значение заголовка
        }
    },
    components: {
        Navbar,
        Footer,
    },
    created() {
        this.updateDocumentTitle();
    },
    watch: {
        '$route'() {
            this.updateDocumentTitle();
            this.checkIfIndexPage();
        }
    },
    methods: {
        updateDocumentTitle() {
            document.title = 'sukharevskiy.ru' + this.$route.path
        },
        checkIfIndexPage() {
            // Проверяем, является ли текущий маршрут главной страницей
            this.isIndexPage = this.$route.path === '/' ;
        }
    }
}
</script>

<style>

</style>
