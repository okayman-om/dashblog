require("./bootstrap");

import { createApp } from "vue";
import router from './router';
import Layout from "./layout/Layout.vue";

// let app=createApp({})
// app.component('Dashboard' , Dashboard);

createApp({
    components: {
        Layout,
    },
})
    .use(router)
    .mount("#app");
