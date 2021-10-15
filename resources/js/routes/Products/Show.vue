<template>
    <section class="text-gray-700 body-font overflow-hidden" v-if="product">
        <div class="container mx-auto px-4 lg:px-0">
            <div class="lg:w-5/5 mx-auto flex flex-wrap">
                <Gallery :images="images" />
                <div
                    class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-8"
                >
                    <h1
                        class="text-gray-900 text-4xl title-font font-medium mb-2"
                        v-text="product.name"
                    ></h1>
                    <p
                        class="leading-relaxed text-xl"
                        v-html="product.description"
                    ></p>
                    <div class="flex flex-col">
                        <span
                            class="title-font font-medium text-3xl text-gray-900 py-8 text-center lg:text-left"
                            v-text="formatCurrency(product.price)"
                        ></span>

                        <AddToCart :product="product" :cart="cart" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import Button from "../../../../vendor/laravel/breeze/stubs/inertia/resources/js/Components/Button.vue";
import AddToCart from "../../components/addToCart.vue";
import Gallery from "../../components/gallery.vue";

export default {
    components: { Button, AddToCart, Gallery },

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
        cart() {
            return this.$store.state.cart;
        },
        products() {
            return this.$store.state.products;
        },
        images() {
            let { image } = this.products.find(
                product => product.slug === this.$route.params.slug
            );
            console.log(image);
            let parsedImages = JSON.parse(image);
            return parsedImages.map(item => {
                return "../images/" + item;
            });
        },
        product() {
            return this.products.find(
                product => product.slug === this.$route.params.slug
            );
        }
    }
};
</script>
