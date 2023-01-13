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

import store from "../store";

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
    meta: {requireAuth : true}

  },
  
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: {requireAuth : true}

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
    meta: {requireAuth : true}

  },
  {
    path: "/taxes",
    name: "Taxes",
    component: Taxes,
    meta: {requireAuth : true}
  },
  {
    path: "/contribuables",
    name: "Contribuables",
    component: Contribuables,
    meta: {requireAuth : true}
  },
  {
    path: "/comptesTaxes",
    name: "ComptesTaxes",
    component: ComptesTaxes,
    meta: {requireAuth : true}
  },
  {
    path: "/utilisateurs",
    name: "Utilisateurs",
    component: Utilisateurs,
    meta: {requireAuth : true}
  },
  
  {
    path: "/communes",
    name: "Communes",
    component: Communes,
    meta: {requireAuth : true}
  },
  {
    path: "/structures",
    name: "Structures",
    component: Structures,
    meta: {requireAuth : true}
  },
  {
    path: "/cartesmag",
    name: "CartesMag",
    component: CartesMag,
    meta: {requireAuth : true}
  },
  {
    path: "/infoscontribuable",
    name: "Les Informations du Contribuable",
    component: PlusInfosContribuable,
    meta: {requireAuth : true}
  },
  {
    path: "/activites",
    name: "Activites",
    component: Activites,
    meta: {requireAuth : true}
  },
  {
    path: "/biens",
    name: "Biens",
    component: Biens,
    meta: {requireAuth : true}
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

router.beforeEach((to)=>{
  if ( to.meta.requireAuth && !store.state.user.data && to.name !== 'Sign In'
) {
  // redirect the user to the login page
  return { name: 'Sign In' }
}
})

export default router;
