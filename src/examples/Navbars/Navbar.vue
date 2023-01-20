<template>
  <nav
    class="shadow-none navbar navbar-main navbar-expand-lg border-radius-xl"
    v-bind="$attrs"
    id="navbarBlur"
    data-scroll="true"
  >
    <div class="px-3 py-1 container-fluid">
      <breadcrumbs :currentPage="currentRouteName" :textWhite="textWhite" />
      <div
        class="mt-2 collapse navbar-collapse mt-sm-0 me-md-0 me-sm-4"
        :class="this.$store.state.isRTL ? 'px-0' : 'me-sm-4'"
        id="navbar"
      >
        <div
          class="pe-md-3 d-flex align-items-center"
          :class="this.$store.state.isRTL ? 'me-md-auto' : 'ms-md-auto'"
        >
        <div class="ms-md-3 pe-md-11 d-flex align-items-center">
                <h5 class="font-weight-bolder">Interface de gestion des collectivités  <strong class="text-uppercase">{{ $store.state.user && $store.state.user.data?.commune ? ' | ' + $store.state.user.data?.commune?.nom : '' }}</strong></h5>

                </div>
        </div>
        <ul class="navbar-nav justify-content-end">
          <li v-on:click="logout" class="nav-item d-flex align-items-center">
            
              <i
                class="fa fa-user"
                :class="this.$store.state.isRTL ? 'ms-sm-2' : 'me-sm-1'"
              ></i>
              <span class="d-sm-inline d-none cursor-pointer">Déconnexion </span>
  
          </li>
          <li class="nav-item d-xl-none ps-3 d-flex align-items-center">
            <a
              href="#"
              @click="toggleSidebar"
              class="p-0 nav-link text-body"
              id="iconNavbarSidenav"
            >
              <div class="sidenav-toggler-inner">
                <i class="sidenav-toggler-line"></i>
                <i class="sidenav-toggler-line"></i>
                <i class="sidenav-toggler-line"></i>
              </div>
            </a>
          </li>
          
          
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import Breadcrumbs from "../Breadcrumbs.vue";
import { mapMutations, mapActions } from "vuex";

export default {
  name: "navbar",
  data() {
    return {
      showMenu: false,
    };
  },
  props: ["minNav", "textWhite"],
  created() {
    this.minNav;
  },
  methods: {
    ...mapMutations(["navbarMinimize"]),
    ...mapActions(["toggleSidebarColor"]),

    toggleSidebar() {
      this.toggleSidebarColor("bg-white");
      this.navbarMinimize();
    },
    logout() {
      // let formData = new FormData(this.$refs.loginForm);
      let url = "/logout";
      this.$axios
        .post(url)
        .then((res) => {
          console.log(res.data);
          // let data = res.data;
          // console.log(data.user)
          // this.$store.commit("SET_USER", data.data);
          // this.$store.state.user.token = data.data.token;
          // console.log(this.store.state.status);
          localStorage.removeItem("collectivite_user");
          // localStorage.setItem("collectivite_token", data.data.token);
          this.$router.push({ path: "/sign-in" });
        })
        .catch((err) => {
          alert("echec de la deconnexion");
          console.log(err);
        });
    },




  },
  components: {
    Breadcrumbs,
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
  updated() {
    const navbar = document.getElementById("navbarBlur");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10 && this.$store.state.isNavFixed) {
        navbar.classList.add("blur");
        navbar.classList.add("position-sticky");
        navbar.classList.add("shadow-blur");
      } else {
        navbar.classList.remove("blur");
        navbar.classList.remove("position-sticky");
        navbar.classList.remove("shadow-blur");
      }
    });
  },
  
};
</script>
