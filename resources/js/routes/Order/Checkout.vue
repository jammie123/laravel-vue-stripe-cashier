x<template>
    <div class="w-full px-4" v-if="this.$store.state.cart != ''">
        <div class="lg:w-2/3 w-full mx-auto mt-8 overflow-auto">
            <table class="table-auto w-full text-left whitespace-no-wrap">
                <thead>
                    <tr>
                        <th
                            class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200 rounded-tl rounded-bl"
                        >
                            Položka
                        </th>
                        <th
                            class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200"
                        >
                            Počet
                        </th>
                        <th
                            class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200"
                        >
                            Cena
                        </th>
                        <th
                            class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200"
                        >
                            Akce
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in cart" :key="item.id">
                        <td class="p-4" v-text="item.name"></td>
                        <td class="p-4" v-text="item.quantity"></td>
                        <td class="p-4" v-text="cartLineTotal(item)"></td>
                        <td class="w-10 text-right">
                            <button
                                class="flex ml-auto text-sm text-black bg-yellow-400 border-0 py-2 px-2 focus:outline-none hover:bg-yellow-500 rounded"
                                @click="$store.commit('removeFromCart', item)"
                            >
                                Remove
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td class="p-4 font-bold">Total Amount</td>
                        <td class="p-4 font-bold" v-text="cartQuantity"></td>
                        <td class="p-4 font-bold" v-text="cartTotal"></td>
                        <td class="w-10 text-right"></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="lg:w-2/3  w-full mx-auto mt-8">
            <div class="lg:flex flex-wrap flex-col lg:flex-row w-full mt-8">
                <div class="lg:w-1/3 w-full lg:p-4 p-0">
                    <div class="relative">
                        <label
                            for="first_name"
                            class="leading-7 text-sm text-gray-600"
                            >First Name</label
                        >
                        <input
                            type="text"
                            id="first_name"
                            name="first_name"
                            class="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            v-model="customer.first_name"
                            :disabled="paymentProcessing"
                        />
                    </div>
                </div>
                <div class="lg:w-1/3 w-full lg:p-4 p-0">
                    <div class="relative">
                        <label
                            for="last_name"
                            class="leading-7 text-sm text-gray-600"
                            >Last Name</label
                        >
                        <input
                            type="text"
                            id="last_name"
                            name="last_name"
                            class="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            v-model="customer.last_name"
                            :disabled="paymentProcessing"
                        />
                    </div>
                </div>
                <div class="lg:w-1/3 w-full lg:p-4 p-0">
                    <div class="relative">
                        <label
                            for="email"
                            class="leading-7 text-sm text-gray-600"
                            >Email Address</label
                        >
                        <input
                            type="email"
                            id="email"
                            name="email"
                            class="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            v-model="customer.email"
                            :disabled="paymentProcessing"
                        />
                    </div>
                </div>
            </div>

            <div class="w-full mt-8">
                <button
                    class="flex mx-auto text-black bg-yellow-400 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-500 rounded text-lg w-full text-center"
                    @click="postOrder"
                    :disabled="paymentProcessing"
                    v-text="paymentProcessing ? 'Processing' : 'Objednat'"
                ></button>
            </div>
        </div>
    </div>
    <div v-else>
        <div class="p-8 lg:w-1/3 mx-auto">
            <h1 class="text-4xl leading-tight font-serif">
                Upps!!! Váš košík je zatím prázdný
            </h1>
            <p class="text-xl pt-4 text-gray-700">
                Hoďte si něco dobrého do košíku než to bude všechno pryč'...
            </p>

            <button
                class="flex mt-12 text-center text-black bg-yellow-300 border-0 text-2xl py-4 px-6 focus:outline-none hover:bg-yellow-400 rounded-1xl w-full"
            >
                <router-link :to="{ name: 'home.index' }" class="text-center w-full">
                    Hurá do nakupování
                </router-link>
            </button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            cardElement: {},
            customer: {
                first_name: "",
                last_name: "",
                email: "",
                address: "",
                city: "",
                state: "",
                zip_code: ""
            },
            paymentProcessing: false
        };
    },

    methods: {
        cartLineTotal(item) {
            let amount = item.price * item.quantity;
            amount = amount;

            return amount.toLocaleString("cs-CZ", {
                style: "currency",
                currency: "CZK",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
            });
        },
        async postOrder() {
            this.customer.amount = this.$store.state.cart.reduce(
                (acc, item) => acc + item.price * item.quantity,
                0
            );
            console.log(this.customer.amount);

            // this.customer.cart = JSON.stringify(this.$store.state.cart);
            // let productIds = this.$store.state.cart.map(item=>item.id);
            // let quantity = this.$store.state.cart.map(item=>item.quantity);

            this.customer.cart = JSON.stringify(this.$store.state.cart);
            console.log(this.customer.cart);

            axios
                .post("/api/orders", this.customer)
                .then(response => {
                    console.log(response);

                    // this.$store.commit("updateOrder", response.data);
                    // this.$store.dispatch("clearCart");

                    // this.$router.push({ name: "order.summary" });
                })
                .catch(error => {
                    console.error(error);
                });
        }
    },
    computed: {
        cart() {
            return this.$store.state.cart;
        },
        cartQuantity() {
            return this.$store.state.cart.reduce(
                (acc, item) => acc + item.quantity,
                0
            );
        },
        cartTotal() {
            let amount = this.$store.state.cart.reduce(
                (acc, item) => acc + item.price * item.quantity,
                0
            );

            return amount.toLocaleString("cs-CZ", {
                style: "currency",
                currency: "CZK",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
            });
        }
    }
};
</script>
