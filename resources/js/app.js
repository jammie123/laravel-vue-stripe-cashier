require("./bootstrap");

import Vue from "vue";
import App from "./components/App.vue";

import Vuex from "vuex";
Vue.use(Vuex);

import createPersistedState from "vuex-persistedstate";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: require("./routes.js"),
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 };
    }
});

const store = new Vuex.Store({
    plugins: [createPersistedState()],
    state: {
        products: [],
        cart: [],
        order: {},
        total: 0,
        isloading: true
    },

    mutations: {
        updateProducts(state, products) {
            state.products = products;
        },

        addToCart(state, { name, price, id }) {
            // console.log(product);
            const record = state.cart.find(p => p.id === id);
            if (!record) {
                state.cart.push({
                    name,
                    id,
                    price,
                    quantity: 1
                });
            } else {
                record.quantity++;
            }
        },

        removeItem(state, { id }) {
            const record = state.cart.find(p => p.id === id);
            if (record.quantity <= 0) {
                state.cart.pop();
            } else {
                record.quantity--;
            }
        },
        removeFromCart(state, item) {
            state.cart.splice(item, 1);
            state.total = state.total - item.quantity * item.price;
        },
        updateOrder(state, order) {
            let cart = JSON.parse(order.cart);
            const { name, amount, email } = order;
            state.order = { cart, name, amount, email };
            console.log(cart);
        },
        updateCart(state, cart) {
            state.cart = cart;
        },
        postOrder(state, customer) {
            let cart = state.cart;
            let cartEncoded = JSON.stringify(state.cart);
            let orderEncoded = { ...customer, cartEncoded };
            state.order = { ...customer, cart };
            axios
                .post("/api/orders", orderEncoded)
                .then(response => {
                    console.log(response);
                    store.dispatch("clearCart");
                    router.push({ name: "order.summary" });
                })
                .catch(error => {
                    console.error(error);
                });
        },

        getTotal(state) {
            return state.cart.reduce(
                (acc, item) => (state.total = item.price * item.quantity),
                0
            );
        }
    },
    getters: {
        allProducts: state => state.products, // would need action/mutation if data fetched async
        getNumberOfProducts: state =>
            state.products ? state.products.length : 0,
        cartProducts: state => {
            return state.cart.map(({ id, quantity }) => {
                const product = state.products.find(p => p.id === id);
                return {
                    name: product.name,
                    price: product.price,
                    quantity
                };
            });
        },
        getQuantityOfProduct: state => id => {
            // console.log(state.cart.find(item => item.id === id).quantity == 0 ? 0 : quantity);

            let quantity = state.cart.find(item => item.id === id);
            quantity == undefined || quantity.quantity <= 0 ? 0 : quantity;
            // console.log(quantity);

            return quantity == undefined || quantity.quantity <= 0
                ? 0
                : quantity.quantity;
        }
    },
    actions: {
        getCategories({ commit }) {
            // fetch the categories and attached products from the api
            axios
                .get("/api/products")
                .then(response => {
                    commit("updateProducts", response.data);
                    this.state.isloading = false;
                })
                .catch(error => console.error(error));
        },
        addToCart({ commit }, product) {
            commit("addToCart", product);
        },
        removeItem({ commit }, product) {
            commit("removeItem", {
                id: product.id
            });
        },
        clearCart({ commit }) {
            commit("updateCart", []);
        },
        postOrder({ commit }, customer) {
            commit("postOrder", customer);
        }
    }
});

Vue.config.productionTip = false;

const app = new Vue({
    router,
    store,
    render: h => h(App),
    el: "#app",
    created() {
        store
            .dispatch("getCategories")
            .then(_ => {})
            .catch(error => console.error(error));

        // store.dispatch('getTotal');
    }
});
