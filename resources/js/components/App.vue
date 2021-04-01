<template>

        <div class="wrapper">
            <div class="wrapper">
                <Header />  
                <router-view></router-view>
            </div>
        </div>

</template>

<script>
import Header from "./Header.vue";

export default {
    name: "App",
    components: {
        Header
    }
};
</script>
