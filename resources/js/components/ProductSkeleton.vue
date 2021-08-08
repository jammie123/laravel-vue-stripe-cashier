<template>
    <router-link
        class="block relative rounded overflow-hidden transform transition duration-300 hover:translate-y-2 h-64 lg:h-96 rounded-2xl" :class="width"  
        :to="{
            name: 'products.show',
            params: { slug: product.slug }
        }"
    >
        <div

            class="object-cover object-center w-full h-96 block hover:shadow-lg bg-cover"         
            v-bind:style="{ background: `#F0f0f0` }"
        />

        <div class="mt-4 absolute bottom-5 left-5">
            <h2
                class="text-white title-font text-4xl font-bold bg-gray-200 w-96 h-12"
            ></h2>
            <p   class="text-white title-font text-2xl font-regular mt-2 bg-gray-200 bg-gray-200 w-64 h-4"></p>
        </div>
    </router-link>
</template>

<script>
export default {
    name: "Product",
    props: ["product", "width"],
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
