<template>
    <div class="bg-gray-100 px-4 lg:p-8">
        <p
            class=" text-black border-0 text-xs lg:text-sm align-middle my-auto lg:block"
        >
            Cena za balení
        </p>
        <span
            class="title-font font-medium text-3xl text-gray-900 py-8 text-center lg:text-left"
            v-text="`${formatCurrency(product.price)}`"
        ></span>
        <button
            v-if="getQuantity <= 0"
            class="flex mt-4 w-full text-center text-black bg-yellow-300 border-0 text-2xl py-4 px-6 focus:outline-none hover:bg-yellow-400 rounded-1xl"
            @click="addtoCart(product)"
        >
            <span class="w-full text-center">Přidat do košíku</span>
        </button>

        <div v-else class="flex mt-6 flex-col ">
            <div class="flex flex-row my-2 lg:mt-0 lg:justify-start">
                <button
                    @click="removeItem(product)"
                    class="flex text-center text-black bg-gray-200 border-0 text-2xl py-2 px-4 focus:outline-none hover:bg-gray-400 rounded-1xl "
                >
                    <span class="w-full text-center">-</span>
                </button>
                <div class="h-auto mb-auto mt-auto px-6">
                    <p
                        class="text-center text-black border-0 text-2xl align-middle"
                        v-text="getQuantity"
                    ></p>
                </div>
                <button
                    @click="addtoCart(product)"
                    class="flex text-center text-black bg-yellow-300 border-0 text-2xl py-2 px-4 focus:outline-none hover:bg-yellow-400 rounded-1xl "
                >
                    <span class="w-full text-center">+</span>
                </button>
            </div>
            <p
                class=" text-black border-0 text-xs lg:text-sm align-middle my-auto mt-0 mb-6 mr-4 lg:block"
            >
                Počet balení v košíku v hodnotě {{ getPrizeCurrentItem }}
            </p>
            <router-link
                class=" flex items-center text-black bg-yellow-300 border-0 justify-center text-2xl py-4 px-4 focus:outline-none hover:bg-yellow-400 rounded-1xl "
                :to="{
                    name: 'order.checkout'
                }"
                >Pokračovat do košíku
            </router-link>
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
        formatCurrency(amount) {
            return amount.toLocaleString("cs-CZ", {
                style: "currency",
                currency: "CZK",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
            });
        },
        ...mapActions({
            addtoCart: "addToCart",
            removeItem: "removeItem"
        })
    },

    computed: {
        getQuantity() {
            return this.quantityData(this.product.id);
        },
        getPrizeCurrentItem() {
            return this.formatCurrency(
                this.quantityData(this.product.id) * this.product.price
            );
        },
        ...mapGetters({
            products: "allProducts",
            total: "getNumberOfProducts",
            quantityData: "getQuantityOfProduct"
        })
    }
};
</script>
