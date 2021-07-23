<template>
    <header
        class="text-gray-800 body-font w-full"
        :class="{ fixed: fixed }"
    >
        <div
            class="mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
        >
            <a class="flex title-font font-medium items-center mb-4 md:mb-0">
                <span class="ml-3 text-xl">
                    <router-link :to="{ name: 'home.index' }">
                        Farma Častrov
                    </router-link>
                </span>
            </a>
            <nav
                class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center"
            >
                <router-link
                    class="mr-5 hover:text-gray-900"
                    :to="{ name: 'products.index' }"
                >
                    Produkty
                </router-link>
            </nav>
            <router-link
                class="inline-flex items-center bg-gray-600 text-white border-0 py-2 px-3 focus:outline-none hover:bg-gray-700 rounded-full text-base mt-4 md:mt-0"
                :to="{ name: 'order.checkout' }"
                >Košík
                <span
                    class="inline-block ml-1 text-white"
                    v-text="
                        `${items == 0 ? 'je prázdný' : ''} ` +
                            `${total == 0 ? '' : getCurrency(total)}`
                    "
                ></span>
            </router-link>
        </div>
    </header>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
    name: "Header",
    props: ["fixed"],
    methods: {
        getCurrency: total => {
            return total.toLocaleString("cs-CZ", {
                style: "currency",
                currency: "CZK",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
            });
        }
    },
    data() {
        return {
            fixed: false
        };
    },
    computed: {
        ...mapGetters({
            total: "getTotal",
            items: "getCartItems"
        })
    }
};
</script>
