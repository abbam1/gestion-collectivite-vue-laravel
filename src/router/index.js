import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "@/views/Dashboard.vue";
import Profile from "@/views/Profile.vue";
import SignIn from "@/views/SignIn.vue";
import SignUp from "@/views/SignUp.vue";
import Sites from "@/views/Sites.vue";
import Biens from "@/views/Biens.vue";
import Taxes from "@/views/Taxes.vue";
import CartesMag from "@/views/CartesMag.vue";
import Structures from "@/views/Structures.vue";
import Activites from "@/views/Activites.vue";
import PlusInfosContribuable from "@/views/PlusInfosContribuable.vue";
import Contribuables from "@/views/Contribuables.vue";
import Utilisateurs from "@/views/Utilisateurs.vue";
import ComptesTaxes from "@/views/ComptesTaxes.vue";
import Communes from "@/views/Communes.vue";

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
    path: "/profile",
    name: "Profile",
    component: Profile,
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
    path: "/cartesmag",
    name: "CartesMag",
    component: CartesMag,
  },
  {
    path: "/infoscontribuable",
    name: "Les Informations du Contribuable",
    component: PlusInfosContribuable,
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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
