<template>
  <div class="container top-0 position-sticky z-index-sticky">
    <div class="row">
      <div class="col-12">
        <Navbar_auth
          is-blur="blur blur-rounded my-3 py-2 start-0 end-0 mx-4 shadow"
          btn-background="bg-gradient-success"
          :dark-mode="true"
        />
      </div>
    </div>
  </div>
  <main class="mt-0 main-content main-content-bg">
    <section>
      <div class="page-header min-vh-75">
        <div class="container">
          <div class="row">
            <div class="mx-auto col-xl-4 col-lg-5 col-md-6 d-flex flex-column">
              <div class="mt-8 card card-plain">
                <div class="pb-0 card-header text-start">
                  <h3 class="font-weight-bolder text-success text-gradient">
                    Bienvenue
                  </h3>
                  <p class="mb-0">
                    Entrez votre email et votre mot de passe pour vous connecter
                  </p>
                </div>
                <div class="card-body">
                  <form
                    role="form"
                    class="text-start"
                    ref="loginForm"
                    @submit.prevent="login"
                  >
                    <label>Email</label>
                    <soft-input
                      id="email"
                      type="email"
                      placeholder="Email"
                      name="email"
                    />
                    <label>Mot de passe</label>
                    <soft-input
                      id="password"
                      type="password"
                      placeholder="Mot de passe"
                      name="password"
                    />

                    <div class="text-center">
                      <soft-button
                        class="my-4 mb-2"
                        variant="gradient"
                        color="success"
                        full-width
                        >Connexion
                      </soft-button>
                    </div>
                  </form>
                </div>
                <div class="px-1 pt-0 text-center card-footer px-lg-2">
                  <p class="mx-auto mb-4 text-sm">
                    Pas encore enregistré ? Cliquez
                    <router-link
                      :to="{ name: 'Sign Up' }"
                      class="text-success text-gradient font-weight-bold"
                      >ici</router-link
                    >
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div
                class="top-0 oblique position-absolute h-100 d-md-block d-none me-n8"
              >
                <div
                  class="bg-cover oblique-image position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6"
                  :style="{
                    backgroundImage:
                      'url(' +
                      require('@/assets/img/curved-images/tresor4.png') +
                      ')',
                  }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <app-footer />
</template>

<script>
import Navbar_auth from "@/examples/PageLayout/Navbar_auth.vue";
import AppFooter from "@/examples/PageLayout/Footer.vue";
import SoftInput from "@/components/SoftInput.vue";
import SoftButton from "@/components/SoftButton.vue";
import Swal from "sweetalert2";
const body = document.getElementsByTagName("body")[0];
import { mapMutations, mapState } from "vuex";

export default {
  name: "SignIn",
  components: {
    Navbar_auth,
    AppFooter,
    SoftInput,
    SoftButton,
  },

  data() {
    return {
      loginForm: {
        username: "",
        password: "",
      },
    };
  },

  computed: {
    ...mapState(["axios"]),
  },

  created() {
    this.toggleEveryDisplay();
    this.toggleHideConfig();
    body.classList.remove("bg-gray-100");
  },
  beforeUnmount() {
    this.toggleEveryDisplay();
    this.toggleHideConfig();
    body.classList.add("bg-gray-100");
  },
  methods: {
    ...mapMutations(["toggleEveryDisplay", "toggleHideConfig"]),
    login() {
      let formData = new FormData(this.$refs.loginForm);
      let url = "/login";
      this.$axios
        .post(url, formData)
        .then((res) => {
          console.log(res.data);

          let data = res.data;
          // console.log(data.user)
          this.$store.commit("SET_USER", data.data);
          // this.$store.state.user.token = data.data.token;
          // console.log(this.store.state.status);
          localStorage.setItem("collectivite_user", JSON.stringify(data.data));
          // localStorage.setItem("collectivite_token", data.data.token);

          let timerInterval;
          if (
            Swal.fire({
              title: "Veuillez patientez!",
              timer: 2000,
              timerProgressBar: true,
              didOpen: () => {
                Swal.showLoading();
                const b = Swal.getHtmlContainer().querySelector("b");
                timerInterval = setInterval(() => {
                  b.textContent = Swal.getTimerLeft();
                }, 100);
              },
              willClose: () => {
                clearInterval(timerInterval);
              },
            }).then((result) => {
              /* Read more about handling dismissals below */
              if (result.dismiss === Swal.DismissReason.timer) {
                console.log("Chargement reussi");
              }
            })
          ) {
            this.$router.push({ path: "/" });
          }
        })
        .catch((err) => {
          console.log(err);
          Swal.fire({
            icon: "warning",
            title: `${err.response.data.message}`,
            showConfirmButton: true,
          });

        });
    },
  },
};
</script>

<style>
.bg-gradient-success {
  background-image: linear-gradient(
    310deg,
    #f53939 0%,
    #fbcf33 100%
  ) !important;
}

.text-gradient.text-success {
  background-image: linear-gradient(
    310deg,
    #f53939 0%,
    #fbcf33 100%
  ) !important;
}

.bg-gradient-dark {
  background-image: linear-gradient(
    310deg,
    #f53939 0%,
    #fbcf33 100%
  ) !important;
}

.navbar-vertical .navbar-nav > .nav-item .nav-link.active .icon {
  background-image: linear-gradient(
    310deg,
    #f53939 0%,
    #fbcf33 100%
  ) !important;
}

.swal2-container.swal2-backdrop-show,
.swal2-container.swal2-noanimation {
  backdrop-filter: blur(8px) !important;
}

.swal2-container.swal2-center > .swal2-popup {
  border: solid white !important;
}

.swal2-popup {
  width: 25em !important;
}
</style>
