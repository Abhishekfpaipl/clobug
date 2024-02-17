import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import orderRoutes from './order.js';
import cartRoutes from './cart.js';
import staticRoutes from './static.js';
import authRoutes from './auth.js';
import catalogRoutes from './catalog.js';
import faqsRoutes from './faqs.js';
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
  {
    path:"/Offcanvas",
    name:"Offcanvas",
    component:()=>import("@/views/OffcanVasTest.vue")
  },

  ...orderRoutes,
  ...cartRoutes,
  ...staticRoutes,
  ...authRoutes,
  ...catalogRoutes,
  ...faqsRoutes,
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
