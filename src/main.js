import {createApp} from 'vue'
import axios from 'axios'
import App from './App.vue'
import VueAxios from 'vue-axios'
import { createRouter, createWebHistory } from 'vue-router'
import GallerySection from "@/components/GallerySection";
import WeatherSection from "@/components/WeatherSection";

const ap = createApp(App);
const routes = [
    { path: '/', component: WeatherSection},
    { path: '/gallery', component: GallerySection },
    { path: '/weather', component: WeatherSection },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
})
ap.use(VueAxios, axios);
ap.use(router);
ap.mount('#app');
