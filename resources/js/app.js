require("./bootstrap");

import Vue from "vue";
import App from "./components/App.vue";

import Vuex from "vuex";
Vue.use(Vuex);

import VueRouter from "vue-router";
Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: require("./routes.js")
});

const store = new Vuex.Store({
    state: {
        products: [],
        cart: [],
        order: {},
        total: 0
    },
    mutations: {
        updateProducts(state, products) {
            state.products = products;
        },
        addToCart(state, product) {
            let productInCartIndex = state.cart.findIndex(
                item => item.slug === product.slug
            );
            if (productInCartIndex !== -1) {
                product.quantity++;
                state.cart[productInCartIndex] = product 
                state.cart = [...state.cart];
                state.total = state.cart.reduce((acc, item) => item.price * item.quantity, 0);    

                return;
            }

            product.quantity = 1;   
            state.cart = [...state.cart, product];
            state.total = state.cart.reduce((acc, item) => item.price * item.quantity, 0);  

     
            
            
        },
        removeFromCart(state, index) {
            state.cart.splice(index, 1);
        },
        updateOrder(state, order) {
            state.order = order;
        },
        updateCart(state, cart) {
            state.cart = cart;
        },

        getTotal(state) {
            return state.cart.reduce(
                (acc, item) => 


                    state.total = item.price * item.quantity,
                    0
                
            );
        }
    },
    getters: {
        getTotal: state => {
            return state.total;
          
        },


        getCartItems: (state, product) => {
            // console.log(state.cart);
           
                // console.log(state.cart.reduce((a, b) => console.log(a), 0));
                return state.cart.reduce((a, b) => {return a + b.quantity}, 0);
        
        }
    },
    actions: {
        getCategories({ commit }) {
            // fetch the categories and attached products from the api
            axios
                .get("/api/products")
                .then(response => {
                    commit("updateProducts", response.data);
                })
                .catch(error => console.error(error));
        },
        clearCart({ commit }) {
            commit("updateCart", []);
        },

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
