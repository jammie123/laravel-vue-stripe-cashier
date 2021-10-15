<template>
    <header class="relative container mx-auto text-gray-800 body-font ">
        <div
            v-if="!this.type"
            class="relative mx-auto flex flex-col flex-wrap lg:mt-4 lg:mb-12 lg:p-0 p-5 md:flex-row items-start"
        >
            <a class="flex title-font font-medium items-center md:mb-0">
                <span class="text-xl">
                    <router-link :to="{ name: 'home.index' }">
                        Farma Častrov
                    </router-link>
                </span>
            </a>
            <nav
                class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-col lg:flex-row flex-wrap  text-base align-baseline"
            >
                <router-link
                    class="mr-5 hover:text-gray-900 "
                    :to="{ name: 'products.index' }"
                >
                    Produkty
                </router-link>
                <router-link
                    class="mr-5 hover:text-gray-900 "
                    :to="{ name: 'products.index' }"
                >
                    Kontakt
                </router-link>
                <router-link
                    class="mr-5 hover:text-gray-900 "
                    :to="{ name: 'products.index' }"
                >
                    Ceník
                </router-link>
            </nav>
        </div>

        <div
            v-else
            class="back-to relative mx-auto flex flex-row flex-wrap lg:mt-4 lg:mb-12 lg:p-0 p-5 md:flex-row items-start"
        >
            <a class="flex flex-row title-font font-medium items-center md:mb-0">
                <span class="text-xl flex flex-row">
                    <router-link :to="{ name: 'home.index' }" class="flex justify-center items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-8 w-8 mr-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                                clip-rule="evenodd"
                            />
                        </svg> Zpátky na produkty
                    </router-link>
                </span>
            </a>

        </div>

        <router-link
            :to="{ name: 'order.checkout' }"
            class="absolute right-4 top-4"
        >
            <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M25.6 25.6C23.824 25.6 22.4 27.024 22.4 28.8C22.4 29.6487 22.7371 30.4626 23.3373 31.0627C23.9374 31.6629 24.7513 32 25.6 32C26.4487 32 27.2626 31.6629 27.8627 31.0627C28.4629 30.4626 28.8 29.6487 28.8 28.8C28.8 27.024 27.36 25.6 25.6 25.6ZM0 0V3.2H3.2L8.96 15.344L6.784 19.264C6.544 19.712 6.4 20.24 6.4 20.8C6.4 21.6487 6.73714 22.4626 7.33726 23.0627C7.93737 23.6629 8.75131 24 9.6 24H28.8V20.8H10.272C10.1659 20.8 10.0642 20.7579 9.98916 20.6828C9.91414 20.6078 9.872 20.5061 9.872 20.4C9.872 20.32 9.888 20.256 9.92 20.208L11.36 17.6H23.28C24.48 17.6 25.536 16.928 26.08 15.952L31.808 5.6C31.92 5.344 32 5.072 32 4.8C32 4.37565 31.8314 3.96869 31.5314 3.66863C31.2313 3.36857 30.8243 3.2 30.4 3.2H6.736L5.232 0H0ZM9.6 25.6C7.824 25.6 6.4 27.024 6.4 28.8C6.4 29.6487 6.73714 30.4626 7.33726 31.0627C7.93737 31.6629 8.75131 32 9.6 32C10.4487 32 11.2626 31.6629 11.8627 31.0627C12.4629 30.4626 12.8 29.6487 12.8 28.8C12.8 27.024 11.36 25.6 9.6 25.6Z"
                    fill="black"
                />
            </svg>

            <span
                v-if="itemsInCart > 0"
                class="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center"
                v-text="itemsInCart"
            >
            </span>
        </router-link>
    </header>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
    name: "Header",
    props: ["type"],
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
        return {};
    },

    computed: {
        itemsInCart() {
            let cart = this.$store.getters.cartProducts;
            console.log(cart);
            return cart.reduce((accum, item) => accum + item.quantity, 0);
        }
    }
};
</script>
