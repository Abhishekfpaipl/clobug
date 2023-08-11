import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import orderRoutes from './order.js';
import cartRoutes from './cart.js';
import productRoutes from './product.js';
import staticRoutes from './static.js';
import authRoutes from './auth.js';
import catalogRoutes from './catalog.js'
import HallofFame from "@/views/Pages/HallOfFame.vue";



const routes = [
 
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/HallofFame",
    name: "HallofFame",
    component: HallofFame,
  },

  

  ...orderRoutes,
  ...cartRoutes,
  ...productRoutes,
  ...staticRoutes,
  ...authRoutes,
  ...catalogRoutes,
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
