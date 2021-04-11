<template>

        <div class="wrapper">
            <div class="wrapper">
                <Header :class="$route.meta.headerClass" />  
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
