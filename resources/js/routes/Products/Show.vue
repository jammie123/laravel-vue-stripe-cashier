<template>
    <section class="text-gray-700 body-font overflow-hidden" v-if="product">
        <div class="container px-12 py-24 mx-auto">
            <div class="lg:w-5/5 mx-auto flex flex-wrap">
                <img
                    alt="ecommerce"
                    class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                    :src="getThumbnail(product)"
                />
                <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <h2
                        class="text-sm title-font text-gray-500 tracking-widest uppercase inline-block mr-2"
                        v-for="category in product.categories"
                        v-text="category.name"
                    ></h2>
                    <h1
                        class="text-gray-900 text-3xl title-font font-medium mb-2"
                        v-text="product.name"
                    ></h1>
                    <p class="leading-relaxed" v-html="product.description"></p>
                    <div class="flex mt-6 p-6    items-center border-gray-200 border bg-gray-50 rounded-lg">
                        <span
                            class="title-font font-medium text-2xl text-gray-900"
                            v-text="formatCurrency(product.price)"
                        ></span>
                        <button
                            class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                            @click="$store.commit('addToCart', product)"
                        >
                            Přidat do košíku
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
        getThumbnail(product) {
            if (product.image != null) {
                return "../images/" + JSON.parse(product.image)[0];
            }
        }
    },
    computed: {
        products() {
            return this.$store.state.products;
        },
        product() {
            return this.products.find(
                product => product.slug === this.$route.params.slug
            );
        }
    }
};
</script>
