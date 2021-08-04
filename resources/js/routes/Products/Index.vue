<template>
    <section class="text-gray-700 body-font mt-12">
        <div class="container mx-auto">
            <div class="flex flex-wrap" v-if="!products.length">
                <div class="">
                    <a class="block relative h-48 rounded overflow-hidden">
                        <img
                            alt="ecommerce"
                            class="object-cover object-center w-full h-full block"
                            src="https://dummyimage.com/420x260"
                        />
                    </a>
                    <div class="mt-4">
                        <h3
                            class="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase inline-block mr-2"
                        >
                            N/A
                        </h3>
                        <h2
                            class="text-gray-900 title-font text-lg font-medium"
                        >
                            Loading
                        </h2>
                        <p class="mt-1">$0.00</p>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-1 px-4 lg:px-0 lg:grid-cols-2 lg:gap-4" v-else>
                <div
                    class="w-full mb-4"
                    v-for="product in products"
                    :key="product.id"
                >
                    <Product :product="product" :width="w-full" />
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import Product from "../../components/Product.vue";
export default {
    name: "Products",
    props: {
        width: {
            default: "w-1/2",
            type: String
        }
    },
    components: {
        Product
    },
    methods: {
        formatCurrency(amount) {
            return amount.toLocaleString("cs-CZ", {
                style: "currency",
                currency: "CZK",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
            });
        }
    },
    computed: {
        products() {
            return this.$store.state.products;
        }
    }
};
</script>
