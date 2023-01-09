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
import Biens from "@/views/Biens.vue";
import Taxes from "@/views/Taxes.vue";
import Structures from "@/views/Structures.vue";
import Activites from "@/views/Activites.vue";
import Contribuables from "@/views/Contribuables.vue";
import Recensements from "@/views/Recensements.vue";
import Utilisateurs from "@/views/Utilisateurs.vue";
import ComptesTaxes from "@/views/ComptesTaxes.vue";
import Communes from "@/views/Communes.vue";
import CommuneShow from "@/views/CommuneShow";

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
    path: "/comptesTaxes",
    name: "ComptesTaxes",
    component: ComptesTaxes,
  },
  {
    path: "/recensements",
    name: "Recensements",
    component: Recensements,
  },
  {
    path: "/utilisateurs",
    name: "Utilisateurs",
    component: Utilisateurs,
  },
  
  {
    path: "/communes",
    name: "Communes",
    component: Communes,
  },
  {
    path: "/structures",
    name: "Structures",
    component: Structures,
  },
  {
    path: "/activites",
    name: "Activites",
    component: Activites,
  },
  {
    path: "/biens",
    name: "Biens",
    component: Biens,
  },
  {
    path: "/communeshow:id",
    name: "communeshow",
    component: CommuneShow,
    params:true
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
