<template>
    <div class="wrapper">
        <Header :type="$route.meta.type" />
        <router-view></router-view>
        <Footer />
    </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";

export default {
    name: "App",
    components: {
        Header,Footer
    }
};
</script>
