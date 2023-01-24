<template>
  <div class="container-fluid">
    <div
      class="mt-4 page-header min-height-300 border-radius-xl"
      :style="{
        backgroundPositionY: '50%',
      }"
    >
      <span class="mask bg-gradient-success opacity-6"></span>
    </div>
    <div class="mx-4 overflow-hidden card card-body blur shadow-blur mt-n6">
      <div class="row gx-4">
        <div class="col-auto">
          <div class="avatar avatar-xl position-relative">
            <img
              src="@/assets/img/User_Icon.png"
              alt="profile_image"
              class="shadow-sm w-100 border-radius-lg"
            />
          </div>
        </div>
        <div class="col-auto my-auto">
          <div class="h-100">
            <h5 class="mb-1">{{ item.nom }}</h5>
            <p class="mb-0 text-sm font-weight-bold">{{ item.fonction }}</p>
          </div>
        </div>
        <div
          class="mx-auto mt-3 col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0"
        >
          <div class="nav-wrapper position-relative end-0">
            <!-- Button trigger modal -->
            <button
                        type="button"
                        class="btn bg-gradient-primary btn-sm mb-0 buttonSites"
                        @click="setEdit(item.id, item)"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal4"
                        data-bs-original-title="Edit user"
                      >
                  +&nbsp; Modifier les Informtions
                </button>
                <!-- Button trigger modal -->
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="py-4 container-fluid">
    <div class="mt-2 row">
      <div class="mt-6 col-12 col-md-6 col-xl-6 mt-md-0">
        <div class="p-3 card h-100">
            <h6 class="mb-3">Infos Personnelles</h6>
          <!-- <h6 class="text-xs text-uppercase text-body font-weight-bolder">
            Contribuable
          </h6> -->
          <ul class="list-group">
            <li class="pt-0 text-sm border-0 list-group-item ps-0">
              <strong class="text-dark">Nom:</strong> &nbsp;
              {{ item.nom }}
            </li>
            <li class="text-sm border-0 list-group-item ps-0">
              <strong class="text-dark">Email:</strong> &nbsp; {{ item.email }}
            </li>
            <li class="text-sm border-0 list-group-item ps-0">
              <strong class="text-dark">Chiffres d'affaire:</strong> &nbsp;
              {{ item.chiffre_affaire }}
            </li>
            <li class="text-sm border-0 list-group-item ps-0">
              <strong class="text-dark">Géolocalisation:</strong> &nbsp; {{ item.geolocalisation }}
            </li>
            <li class="text-sm border-0 list-group-item ps-0">
              <strong class="text-dark">taille:</strong> &nbsp;
              {{ item.taille }}
            </li>
            <li class="text-sm border-0 list-group-item ps-0">
              <strong class="text-dark">Impot synthétique:</strong> &nbsp;
              {{ item.impot_synthetique }}
            </li>
          </ul>
        </div>
      </div>
      <div class="mt-6 col-12 col-md-6 col-xl-6 mt-md-0">
        <div class="p-3 card h-100">
            <h6 class="mb-3">Identification</h6>
          <!-- <h6 class="text-xs text-uppercase text-body font-weight-bolder">
            Contribuable
          </h6> -->
          <ul class="list-group">
            <li class="text-sm border border-0 list-group-item ps-0">
              <strong class="text-dark ">Place dans un centre commercial:</strong> &nbsp;
              {{ item.centre_commercial }}
            </li>
            <li class="pt-0 text-sm border-0 list-group-item ps-0">
              <strong class="text-dark">Adresse:</strong> &nbsp;
              {{ item.adresse }}
            </li>
            <li class="text-sm border-0 list-group-item ps-0">
              <strong class="text-dark">Fonction:</strong> &nbsp; {{ item.fonction }}
            </li>
            <li class="text-sm border-0 list-group-item ps-0">
              <strong class="text-dark">ID Contribuable:</strong> &nbsp; {{ item.contribuable_id }}
            </li>
            <li class="text-sm border-0 list-group-item ps-0">
              <strong class="text-dark">ID Site:</strong> &nbsp;
              {{ item.site_id }}
            </li>
            <li class="text-sm border-0 list-group-item ps-0">
              <strong class="text-dark">ID Activité:</strong> &nbsp;
              {{ item.activite_id }}
            </li>
          </ul>
        </div>
      </div>
      </div>
    
<br>
    <!-- New lines -->
    <TaxesTableDesSTR :id_structure="id"/>
  </div>

      <!-- Modal pour modifier -->
  <div
    class="modal fade"
    id="exampleModal4"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            Modifier une structure
          </h5>
          <button
            type="button"
            class="btn-close text-dark"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form ref="editStructuresForm" @submit.prevent="editForm">
            <input type="hidden" name="_method" value="put" />
            <div class="form-group">
              <label for="recipient-name" class="col-form-label">Nom:</label>
              <input
                type="text"
                class="form-control"
                name="nom"
                id="recipient-name"
              />
            </div>
            <div class="form-group">
              <label for="recipient-name" class="col-form-label">Email:</label>
              <input
                type="email"
                class="form-control"
                name="email"
                id="recipient-name"
              />
            </div>
            <div class="form-group">
              <label for="recipient-name" class="col-form-label"
                >Chiffre d'affaire(CFA):</label
              >
              <input
                type="text"
                class="form-control"
                name="chiffre_affaire"
                id="recipient-name"
              />
            </div>
            <div class="form-group">
              <label for="recipient-name" class="col-form-label"
                >Localisation:</label
              >
              <input
                type="text"
                class="form-control"
                name="geolocalisation"
                id="recipient-name"
              />
            </div>
            <div class="form-group">
              <label for="recipient-name" class="col-form-label">Taille:</label>
              <select class="form-control" name="taille" id="recipient-name">
                <option value="grande surface">Grande surface</option>
                <option Value="moyenne surface">Moyenne surface</option>
                <option Value="magasin">Magasin</option>
                <option Value="petit magasin">Petit magasin</option>
                <option Value="sous auvent">Sous auvent</option>
              </select>
            </div>
            <div class="form-group">
              <label for="recipient-name" class="col-form-label"
                >Êtes-vous soumis à un impôt Synthétique?</label
              >
              <select
                class="form-control"
                name="impot_synthetique"
                id="recipient-name"
              >
                <option value="1">Oui</option>
                <option value="0">Non</option>
              </select>
            </div>
            <div class="form-group">
              <label for="recipient-name" class="col-form-label"
                >Exercez-vous dans un centre commercial?</label
              >
              <select
                class="form-control"
                name="centre_commercial"
                id="recipient-name"
              >
                <option value="1">Oui</option>
                <option value="0">Non</option>
              </select>
            </div>
            <div class="form-group">
              <label for="recipient-name" class="col-form-label"
                >Adresse:</label
              >
              <input
                type="text"
                class="form-control"
                name="adresse"
                id="recipient-name"
              />
            </div>
            <div class="form-group">
              <label for="recipient-name" class="col-form-label"
                >Fonction:</label
              >
              <input
                type="text"
                class="form-control"
                name="fonction"
                id="recipient-name"
              />
            </div>
            <div class="form-group">
              <label for="recipient-name" class="col-form-label"
                >ID Contribuable:</label
              >

              <select name="contribuable_id" class="form-control">
                <option value="">Choississez l'id</option>
                <option
                  v-for="item in listContribuables"
                  :key="'contribuable_' + item.id"
                  :value="item.id"
                >
                  {{ item.nom }}
                </option>
              </select>
            </div>
            <div class="form-group">
              <label for="recipient-name" class="col-form-label"
                >ID Site:</label
              >
              <select name="site_id" class="form-control">
                <option value="">Choississez l'id</option>
                <option
                  v-for="item in listSites"
                  :key="'site_' + item.id"
                  :value="item.id"
                >
                  {{ item.nom }}
                </option>
              </select>
            </div>
            <div class="form-group">
              <label for="recipient-name" class="col-form-label"
                >ID Activité:</label
              >

              <select name="activite_id" class="form-control">
                <option value="">Choississez l'id</option>
                <option
                  v-for="item in listActivites"
                  :key="'activite_' + item.id"
                  :value="item.id"
                >
                  {{ item.nom }}
                </option>
              </select>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                ref="closeUpdate"
                class="btn bg-gradient-secondary"
                data-bs-dismiss="modal"
              >
                Fermer
              </button>
              <button
                type="submit"
                class="btn bg-gradient-primary"
                data-bs-dismiss="modal"
              >
                Modifier
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal pour modifier -->




</template>

<script>
import sophie from "@/assets/img/kal-visuals-square.jpg";
import marie from "@/assets/img/marie.jpg";
import ivana from "@/assets/img/ivana-square.jpg";
import peterson from "@/assets/img/team-4.jpg";
import nick from "@/assets/img/team-3.jpg";
import img1 from "@/assets/img/home-decor-1.jpg";
import img2 from "@/assets/img/home-decor-2.jpg";
import img3 from "@/assets/img/home-decor-3.jpg";
import $ from "jquery";
import Swal from "sweetalert2";
import setNavPills from "@/assets/js/nav-pills.js";
import setTooltip from "@/assets/js/tooltip.js";
import TaxesTableDesSTR from "./components/TaxesTableDesSTR.vue";

export default {
  name: "StructurePlus",
  components: { TaxesTableDesSTR },
  props: {
    id: {
      type: Number,
      require: true,
    },
  },
  data() {
    return {
      listContribuables: [],
      listSites: [],
      listActivites: [],
      showMenu: false,
      item: {},
      items: [],
      sophie,
      marie,
      ivana,
      peterson,
      nick,
      img1,
      img2,
      img3,
    };
  },
  methods: {
    async getData() {
      this.$axios
        .get("/structures/" + this.id)
        .then((res) => {
          this.item = res.data.data;
          console.log(this.item);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    setEdit(id, item) {
      this.idToEdit = id;
      $("input[name=nom]").val(item.nom);
      $("input[name=email]").val(item.email);
      $("input[name=chiffre_affaire]").val(item.chiffre_affaire);
      $("input[name=geolocalisation]").val(item.geolocalisation);
      $("select[name=taille]").val(item.taille);
      $("input[name=impot_synthetique]").val(item.impot_synthetique);
      $("input[name=centre_commercial]").val(item.centre_commercial);
      $("input[name=adresse]").val(item.adresse);
      $("input[name=fonction]").val(item.fonction);
      $("select[name=contribuable_id]").val(item.contribuable_id);
      $("select[name=site_id]").val(item.site_id);
      $("select[name=activite_id]").val(item.activite_id);
    },
    clearInput() {
      $("input[name=nom]").val("");
      $("input[name=email]").val("");
      $("input[name=chiffre_affaire]").val("");
      $("input[name=geolocalisation]").val("");
      $("select[name=taille]").val("");
      $("input[name=impot_synthetique]").val("");
      $("input[name=centre_commercial]").val("");
      $("input[name=adresse]").val("");
      $("input[name=fonction]").val("");
      $("input[name=contribuable_id]").val("");
      $("input[name=site_id]").val("");
      $("input[name=activite_id]").val("");
    },
    editForm() {
      let formData = new FormData(this.$refs.editStructuresForm);

      this.$axios
        .post("/structures/" + this.idToEdit, formData)
        .then((res) => {
          let data = res.data.data;
          console.log(data);
          // this.$alert("Enregistré avec succès")
          //recharger les données
          this.$refs.closeUpdate.click();
          this.idToEdit = null;
          this.getData();

          Swal.fire({
            icon: "success",
            title: "Structure modifiée avec success",
            showConfirmButton: false,
            timer: 2000,
          });

          //Fermer le modal
          // alert("OKy")
          this.formData.nom = " ";
          this.formData.email = " ";
          this.formData.chiffre_affaire = " ";
          this.formData.geolocalisation = " ";
          this.formData.taille = " ";
          this.formData.impot_synthetique = " ";
          this.formData.centre_commercial = " ";
          this.formData.adresse = " ";
          this.formData.fonction = " ";
          this.formData.contribuable_id = " ";
          this.formData.site_id = " ";
          this.formData.activite_id = " ";
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
        // Recupération des contribuables
        getContribuables() {
      this.$axios
        .get("/contribuables")
        .then((res) => {
          this.listContribuables = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },


    
    // Recupération des sites

    getSites() {
      this.$axios
        .get("/sites")
        .then((res) => {
          this.listSites = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // Recupération des sites

    // Recupération des activités
    getActivites() {
      this.$axios
        .get("/activites")
        .then((res) => {
          this.listActivites = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // Recupération des activités
  

  },

  mounted() {
    this.$store.state.isAbsolute = true;
    setNavPills();
    setTooltip(this.$store.state.bootstrap);
  },
  beforeUnmount() {
    this.$store.state.isAbsolute = false;
  },
  created() {
    this.getData();
    this.getContribuables();
    this.getActivites();
    this.getSites();
  },
};
</script>

<style>
.opacity-6 {
  opacity: 1.6 !important;
}

.box {
  justify-content: space-between;
}
</style>
