<template>
    <div>
        <button
            v-if="getQuantity <= 0"
            class="flex mt-4 w-full text-center text-black bg-yellow-300 border-0 text-2xl py-4 px-6 focus:outline-none hover:bg-yellow-400 rounded-1xl"
            @click="addtoCart(product)"
        >
            <span class="w-full text-center">Přidat do košíku</span>
        </button>

        <div v-else class="align-middle flex mt-4 flex-col lg:flex-row">
            <p
                class="text-center text-black border-0 text-xl align-middle my-auto  justify-center"
            >
                Počet balení v košíku
            </p>
            <p
                class="text-center text-black border-0 text-sm align-middle my-auto pr-4"
            ></p>
            <div class="flex flex-row justify-center align-middle mt-4 lg:mt-0">
                <button
                    @click="removeItem(product)"
                    class="flex text-center text-black bg-gray-200 border-0 text-2xl py-4 px-6 focus:outline-none hover:bg-gray-400 rounded-1xl "
                >
                    <span class="w-full text-center">-</span>
                </button>
                <div class="h-auto mb-auto mt-auto px-8">
                    <p
                        class="text-center text-black border-0 text-2xl align-middle"
                        v-text="getQuantity"
                    ></p>
                </div>
                <button
                    @click="addtoCart(product)"
                    class="flex text-center text-black bg-yellow-300 border-0 text-2xl py-4 px-6 focus:outline-none hover:bg-yellow-400 rounded-1xl "
                >
                    <span class="w-full text-center">+</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
    name: "AddToCart",
    data() {
        return {
            isCounterItems: ""
        };
    },
    props: ["product", "cart"],
    methods: {
        ...mapActions({
            addtoCart: "addToCart",
            removeItem: "removeItem"
        })
    },

    computed: {
        getQuantity() {
            return this.quantityData(this.product.id);
        },
        ...mapGetters({
            products: "allProducts",
            total: "getNumberOfProducts",
            quantityData: "getQuantityOfProduct"
        })
    }
};
</script>
