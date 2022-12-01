<template>
  <navbar btn-background="bg-gradient-primary" />
  <div
    class="pt-5 m-3 page-header align-items-start min-vh-50 pb-11 border-radius-lg"
    :style="{
      backgroundImage:
        'url(' + require('@/assets/img/curved-images/curved6.jpg') + ')',
    }"
  >
    <span class="mask bg-gradient-dark opacity-6"></span>
  </div>
  <div class="container">
    <div class="row mt-lg-n10 mt-md-n11 mt-n10 justify-content-center">
      <div class="mx-auto col-xl-4 col-lg-5 col-md-7">
        <div class="card z-index-0">
          <div class="pt-4 text-center card-header">
            <h5>Enregistrez vous</h5>
          </div>
          <div class="d-flex justify-content-center">
            
              <img src="../assets/img/logo-ct.png" width="100" height="100">

          </div>
          <div class="card-body">
            <form role="form" @submit.prevent="register" ref="registerForm">
              <div class="mb-3">
                <soft-input
                  name="nom"
                  type="text"
                  placeholder="Nom"
                  aria-label="Name"
                />
              </div>
              <div class="mb-3">
                <soft-input
                  name="prenoms"
                  type="text"
                  placeholder="Prenoms"
                  aria-label="Prenom"
                />
              </div>
              <div class="mb-3">
                <soft-input
                  name="matricule"
                  type="text"
                  placeholder="Matricule"
                  aria-label="Matricule"
                />
              </div>
              <div class="mb-3">
                <soft-input
                  name="email"
                  type="email"
                  placeholder="Email"
                  aria-label="Email"
                />
              </div>
              <div class="mb-3">
                <soft-input
                  name="contacts"
                  type="text"
                  placeholder="Tel"
                  aria-label="Tel"
                />
              </div>
              <div class="mb-3">
                <soft-input
                  name="password"
                  type="text"
                  placeholder="Mot de passe"
                  aria-label="Password"
                />
              </div>
              <div class="mb-3">
                <soft-input
                  name="password_confirmation"
                  type="text"
                  placeholder="Confirmer le Mot de passe"
                  aria-label="Password"
                />
              </div>
              
              <div class="text-center">
                <soft-button
                  color="dark"
                  full-width
                  variant="gradient"
                  class="my-4 mb-2"
                  >Inscription</soft-button
                >
              </div>
              <p class="text-sm mt-3 mb-0">
                Vous avez déjà un compte?                <router-link
                  :to="{ name: 'Sign In' }"
                  class="text-dark font-weight-bolder"
                >
                  Connexion
                </router-link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <app-footer />
</template>

<script>
import Navbar from "@/examples/PageLayout/Navbar.vue";
import AppFooter from "@/examples/PageLayout/Footer.vue";
import SoftInput from "@/components/SoftInput.vue";
import SoftButton from "@/components/SoftButton.vue";
// import axios from "axios";

import { mapMutations, mapState } from "vuex";

export default {
  name: "SignupBasic",
  components: {
    Navbar,
    AppFooter,
    SoftInput,
    SoftButton,
  },
  data(){
    return {
      
    }
  },
  computed:{
    ...mapState(['axios'])
  },
  created() {
    this.toggleEveryDisplay();
    this.toggleHideConfig();
  },
  beforeUnmount() {
    this.toggleEveryDisplay();
    this.toggleHideConfig();
  },
  methods: {
    ...mapMutations(["toggleEveryDisplay", "toggleHideConfig"]),
    
    
    register(){
  let formData = new FormData(this.$refs.registerForm)
  let url = "http://127.0.0.1:8000/api/register"
  this.axios.post(url,formData)
    .then(res => {
      console.log(res) 
      let data = res.data;
      this.$store.state.user.data = data.user;
      this.$store.state.user.token = data.token;
      localStorage.setItem("collectivite_user", this.store.state.user)
    })
    .catch((err) => {
      console.log(err)
    })
  
}
  },
};
</script>
