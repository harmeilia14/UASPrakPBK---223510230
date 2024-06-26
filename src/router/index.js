import { createRouter, createWebHistory } from 'vue-router';
import Weather from '../views/Weather.vue';
import App from '../App.vue'; // Sesuaikan path sesuai struktur proyek

const routes = [
  { path: '/', component: Weather }, // Rute untuk halaman utama, menampilkan komponen Weather.vue
  { path: '/pertemuan1', component: App }, // Ganti dengan komponen yang sesuai untuk Pertemuan 1
  { path: '/pertemuan2', component: App }, // Ganti dengan komponen yang sesuai untuk Pertemuan 2
  { path: '/pertemuan3', component: App }, // Ganti dengan komponen yang sesuai untuk Pertemuan 3
  { path: '/pertemuan4', component: App }, // Ganti dengan komponen yang sesuai untuk Pertemuan 4
  { path: '/pertemuan5', component: App }, // Ganti dengan komponen yang sesuai untuk Pertemuan 5
  { path: '/pertemuan6', component: App }, // Ganti dengan komponen yang sesuai untuk Pertemuan 6
  { path: '/pertemuan7', component: App }, // Ganti dengan komponen yang sesuai untuk Pertemuan 7
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
