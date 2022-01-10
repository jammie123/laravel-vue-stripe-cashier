<template>
    <router-link
        class="block relative rounded overflow-hidden transform transition duration-300 hover:translate-y-2 h-64 lg:h-96 rounded-2xl"
        :class="width"
        :to="{
            name: 'products.show',
            params: { slug: product.slug }
        }"
    >
        <app-image
            v-bind:lazy-src="getThumbnail(product)"
            v-bind:lazy-srcset="getThumbnail(product)"
        />

        <div class="mt-4 absolute bottom-4 left-4">
            <h2
                class="text-white title-font text-3xl lg:text-4xl font-bold"
                v-text="product.name"
            ></h2>
            <p
                v-text="formatCurrency(product.price)"
                class="text-white title-font text-xl lg:text-2xl font-regular mt-2"
            ></p>
        </div>
    </router-link>
</template>

<script>
import AppImage from "./AppImage.vue";
export default {
    name: "Product",

    props: {
        product: {
            type: Object
        },
        width: {
            type: String
        }
    },

    components: {
        AppImage
    },

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
                return "images/" + JSON.parse(product.image)[0];
            }
        }
    }
};
</script>
