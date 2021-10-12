<template>
    <div class="container mx-auto">
        <div
            class="w-full mx-auto mt-8 overflow-auto items-center flex flex-col align-middle justify-center h-half"
        >
            <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">
                Děkujeme za Vaši objednávku
            </h1>
            <h2
                class="text-2xl mb-8 title-font text-gray-500"
                v-text="`Detaily budou zaslané na Váš email ${order.email}`"
            ></h2>
            <table class="table-auto w-1/2 text-left whitespace-no-wrap">
                <thead>
                    <tr>
                        <th
                            class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200 rounded-tl rounded-bl"
                        >
                            Název zboží
                        </th>
                        <th
                            class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200 rounded-tr rounded-br"
                        >
                            Cena
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in order.cart" :key="item.id">
                        <td class="p-4" v-text="item.name"></td>

                        <td class="p-4" v-text="item.price"></td>
                    </tr>
                    <tr>
                        <td class="p-4 font-bold">Celkem</td>

                        <td class="p-4 font-bold" v-text="orderTotal"></td>
                    </tr>
                </tbody>
            </table>

            <router-link
                :to="{ name: 'home.index' }"
                class="flex mx-auto text-black w-1/2 bg-yellow-400 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-500 rounded text-lg text-center justify-center mt-12"
                >Zpátky na hlavní stranu</router-link
            >
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        cartLineTotal(item) {
            let amount = item.price * item.pivot.quantity;

            return amount.toLocaleString("cs-CZ", {
                style: "currency",
                currency: "CZK",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
            });
        }
    },
    computed: {
        order() {
            // console.log(this.$store.state.order);
            return this.$store.state.order;
        },
        orderQuantity() {
            // console.log(this.$store.state.order);
            let order = this.$store.state.order;
            return order.cart.reduce((accum, item) => accum + item.quantity, 0);
        },
        orderTotal() {
            let order = this.$store.state.order;
            return order.cart.reduce((accum, item) => accum + item.price, 0);
        }
    }
};
</script>
