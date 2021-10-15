module.exports = [
    {
        path: "/",
        name: "home.index",
        component: () => import("./routes/Page/HomePage.vue")
    },
    {
        path: "/produkty",
        name: "products.index",
        component: () => import("./routes/Products/Index.vue")
    },
    {
        path: "/product/:slug",
        name: "products.show",
        meta: {
            type: true
        },
        component: () => import("./routes/Products/Show.vue")
    },
    {
        path: "/checkout",
        name: "order.checkout",
        component: () => import("./routes/Order/Checkout.vue")
    },
    {
        path: "/summary",
        name: "order.summary",
        component: () => import("./routes/Order/Summary.vue")
    }
];
