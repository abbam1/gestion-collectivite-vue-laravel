import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "@/views/Dashboard.vue";
import Tables from "@/views/Tables.vue";
import Billing from "@/views/Billing.vue";
import VirtualReality from "@/views/VirtualReality.vue";
import Profile from "@/views/Profile.vue";
import Rtl from "@/views/Rtl.vue";
import SignIn from "@/views/SignIn.vue";
import SignUp from "@/views/SignUp.vue";
import Sites from "@/views/Sites.vue";
import Taxes from "@/views/Taxes.vue";
import Contribuables from "@/views/Contribuables.vue";
import Recensements from "@/views/Recensements.vue";
import CartesContribuables from "@/views/CartesContribuables.vue";

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/dashboard",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/tables",
    name: "Tables",
    component: Tables,
  },
  {
    path: "/billing",
    name: "Billing",
    component: Billing,
  },
  {
    path: "/virtual-reality",
    name: "Virtual Reality",
    component: VirtualReality,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/rtl-page",
    name: "Rtl",
    component: Rtl,
  },
  {
    path: "/sign-in",
    name: "Sign In",
    component: SignIn,
  },
  {
    path: "/sign-up",
    name: "Sign Up",
    component: SignUp,
  },
  {
    path: "/sites",
    name: "Sites",
    component: Sites,
  },
  {
    path: "/taxes",
    name: "Taxes",
    component: Taxes,
  },
  {
    path: "/contribuables",
    name: "Contribuables",
    component: Contribuables,
  },
  {
    path: "/recensements",
    name: "Recensements",
    component: Recensements,
  },
  {
    path: "/cartesContribuables",
    name: "CartesContribuables",
    component: CartesContribuables,
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
