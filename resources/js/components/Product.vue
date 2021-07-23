<template>
    <router-link
        class="block relative rounded overflow-hidden transform transition duration-300 hover:translate-y-2" :class="width"
        :to="{
            name: 'products.show',
            params: { slug: product.slug }
        }"
    >
        <img
            alt="ecommerce"
            class="object-cover object-center w-full h-full block hover:shadow-lg"
            :src="getThumbnail(product)"
        />

        <div class="mt-4">
            <h2
                class="text-black title-font text-2xl font-bold"
                v-text="product.name"
            ></h2>
            <p  v-text="formatCurrency(product.price)" class="text-gray-900 title-font text-xl font-regular mt-2"></p>
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
