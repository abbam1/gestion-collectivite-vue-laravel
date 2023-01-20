<template>
  <div
    class="w-auto h-auto collapse navbar-collapse max-height-vh-100 h-100"
    id="sidenav-collapse-main"
  >
    <ul class="navbar-nav" >
      <li class="nav-item">
        <sidenav-collapse navText="Vue d'ensemble " :to="{ name: 'Dashboard' }">
          <template #icon>
            <shop />
          </template>
        </sidenav-collapse>
      </li>
      <li class="mt-3 nav-item">
        <h6
          class="text-xs ps-4 text-uppercase font-weight-bolder opacity-6"
          :class="this.$store.state.isRTL ? 'me-4' : 'ms-2'"
        >
          PARAMETRES
        </h6>
      </li>
      <li class="nav-item" v-for="menu in listMenuPerso" :key="menu.titre">
        <sidenav-collapse :navText="menu.titre" :to="menu.route">
          <template #icon>
            <office />
          </template>
        </sidenav-collapse>
      </li>
      <!-- <li class="nav-item">
        <sidenav-collapse navText="Activités" :to="{ name: 'Activites' }">
          <template #icon>
            <office />
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item">
        <sidenav-collapse navText="Communes" :to="{ name: 'Communes' }">
          <template #icon>
            <office />
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item">
        <sidenav-collapse navText="Structures" :to="{ name: 'Structures' }">
          <template #icon>
            <office />
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item">
        <sidenav-collapse navText="Taxes" :to="{ name: 'Taxes' }">
          <template #icon>
            <credit-card />
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item">
        <sidenav-collapse navText="Contribuables" :to="{ name: 'Contribuables' }">
          <template #icon>
            <office />
          </template>
        </sidenav-collapse>
      </li> 
      <li class="nav-item">
        <sidenav-collapse navText="Comptes-Taxes" :to="{ name: 'ComptesTaxes' }">
          <template #icon>
            <office />
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item">
        <sidenav-collapse navText="Biens" :to="{ name: 'Biens' }">
          <template #icon>
            <office />
          </template>
        </sidenav-collapse>
      </li> 
      <li class="nav-item">
        <sidenav-collapse navText="Cartes" :to="{ name: 'CartesMag' }">
          <template #icon>
            <office />
          </template>
        </sidenav-collapse>
      </li> 
      
      <li class="nav-item">
        <sidenav-collapse navText="Utilisateurs" :to="{ name: 'Utilisateurs' }">
          <template #icon>
            <office />
          </template>
        </sidenav-collapse>
      </li>
       -->
    </ul>
  </div>
</template>

<script>
import SidenavCollapse from "./SidenavCollapse.vue";
import Shop from "../../components/Icon/Shop.vue";
import Office from "../../components/Icon/Office.vue";

export default {
  name: "SidenavList",
  components: {
    SidenavCollapse,
    Shop,
    Office,
  },
  props: {
    cardBg: String,
  },

  data() {
    return {
      title: "Soft UI Dashboard PRO",
      controls: "dashboardsExamples",
      isActive: "active",
      listMenu: [
        {
          titre: "Sites",
          route: { name: "Sites" },
          abilities: ["manager"],
        },
        {
          titre: "Communes",
          route: { name: "Communes" },
          abilities: ["admin"],
        },
        {
          titre: "Activités",
          route: { name: "Activites" },
          abilities: ["admin", "manager"],
        },
        {
          titre: "Taxes",
          route: { name: "Taxes" },
          abilities: ["manager"],
        },
        {
          titre: "Contribuables",
          route: { name: "Contribuables" },
          abilities: ["manager"],
        },
        {
          titre: "Comptes-Taxes",
          route: { name: "ComptesTaxes" },
          abilities: ["manager"],
        },
        {
          titre: "Biens",
          route: { name: "Biens" },
          abilities: ["manager"],
        },
        {
          titre: "Cartes",
          route: { name: "CartesMag" },
          abilities: ["manager"],
        },
        {
          titre: "Utilisateurs",
          route: { name: "Utilisateurs" },
          abilities: ["manager", "admin"],
        },
      ],
    };
  },

  computed:{

    listMenuPerso(){
      let lt = [];
      lt = this.listMenu.filter((val) => {
        return val.abilities.includes(this.$store.state.user.data?.roles[0]?.name);
      })
      return lt;
    }
  },

  methods: {
    getRoute() {
      const routeArr = this.$route.path.split("/");
      return routeArr[1];
    },
  },

  created(){
    console.log(this.$store.state.user.data);
  }
};
</script>
