<template>
    <div id="app" :class="{'dark': isDarkMode, 'bg-fon': isIndexPage}">
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
            isIndexPage: true,
            isDarkMode: false,
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
            this.isIndexPage = this.$route.path === '/' ;
        }
    }
}
</script>

<style>

</style>
