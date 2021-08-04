<template>
    <section class="text-gray-700 body-font overflow-hidden" v-if="product">
        <div class="container mx-auto px-2">
            <div class="lg:w-5/5 mx-auto flex flex-wrap">
            <ul class="grid gap-2 grid-flow-col auto-cols-max overflow-auto mx-auto w-full">
                <div v-for="item in images" :key="item" class="">
                    <img
                        alt="ecommerce"
                        class="w-full h-80 object-cover"
                        :src="item"
                    />
                </div>
            </ul>
                <div class="lg:w-1/2 ml-auto mr-auto w-full lg:pl-10 lg:py-6 mt-6 lg:mt-8">
                    <h1
                        class="text-gray-900 text-4xl title-font font-medium mb-2"
                        v-text="product.name"
                    ></h1>
                    <p class="leading-relaxed text-xl" v-html="product.description"></p>
                    <div class="flex flex-col">
                        <span
                            class="title-font font-medium text-3xl text-gray-900 py-8"
                            v-text="formatCurrency(product.price)" 
                        ></span>
                        <button
                            class="flex mt-4 text-center text-black bg-yellow-300 border-0 text-2xl py-4 px-6 focus:outline-none hover:bg-yellow-400 rounded-1xl"
                            @click="$store.commit('addToCart', product)"
                        >
                            <span class="w-full text-center">Přidat do košíku</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    methods: {
        formatCurrency(amount) {
            return amount.toLocaleString("cs-CZ", {
                style: "currency",
                currency: "CZK",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
            });
        },
        // getThumbnail(product) {
        //     console.log(JSON.parse(product.image));
        //     if (product.image != null) {
        //         return "../images/" + JSON.parse(product.image);
        //     }
        // }
    },
    computed: {
        products() {
            return this.$store.state.products;
        },
        images() {

            let {image} = this.products.find(
                product => product.slug === this.$route.params.slug
            );
            console.log(image);
            let parsedImages = JSON.parse(image);
            return parsedImages.map(item=>{return "../images/" + item});
       
        },
        product() {
            return this.products.find(
                product => product.slug === this.$route.params.slug
            );
        }
    }
};
</script>
