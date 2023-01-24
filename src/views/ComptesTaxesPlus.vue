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
                        data-bs-target="#exampleModal3"
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
    <div class="row">
      <div class="mt-12 col-12 col-md-6 col-xl-12 mt-md-0">
        <div class="p-3 card h-100">
            <h6 class="mb-3">Resumé</h6>
          <!-- <h6 class="text-xs text-uppercase text-body font-weight-bolder">
            comptetaxes
          </h6> -->
          <ul class="list-group">
            <li class="pt-0 text-sm border-0 list-group-item ps-0">
              <strong class="text-dark">Compte Taxe:</strong> &nbsp;
              {{ item.nom }}
            </li>
            <li class="text-sm border-0 list-group-item ps-0">
              <strong class="text-dark">Code:</strong> &nbsp; {{ item.code }}
            </li>
            <li class="text-sm border-0 list-group-item ps-0">
              <strong class="text-dark">Identifiant commune:</strong> &nbsp;
              {{ item.commune_id }}
            </li>
          </ul>
        </div>
      </div>
    </div>
<br>
<br>
    <!-- New lines -->
    <TaxesTable :id_comptetaxes="id"/>
  </div>

  <!-- Modal pour modifier -->
  <div
    class="modal fade"
    id="exampleModal3"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            Modifier un Compte-taxe
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
          <form ref="editCompteTaxesForm" @submit.prevent="editForm">
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
              <label for="recipient-name" class="col-form-label"
                >Code:</label
              >
              <input
                type="text"
                class="form-control"
                name="code"
                id="recipient-name"
              />
            </div>
            <div class="form-group">
                <input type="hidden" name="commune_id" class="form-control" :value="item.commune_id">
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
import TaxesTable from "@/views/components/TaxesTable"

export default {
  name: "ComptesTaxesPlus",
  components: {TaxesTable},
  props: {
    id: {
      type: Number,
      require: true,
    },
  },
  data() {
    return {
      showMenu: false,
      item: {},
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
        .get("/comptetaxes/" + this.id)
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
      $("input[name=code]").val(item.code);
      $("select[name=commune_id]").val(item.commune_id);
    },
    clearInput() {
      $("input[name=nom]").val("");
      $("input[name=code]").val("");
      $("select[name=commune_id]").val("");
    },
    editForm() {
      let formData = new FormData(this.$refs.editCompteTaxesForm);

      this.$axios
        .post("/comptetaxes/" + this.idToEdit, formData)
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
            title: "Compte-taxes modifiée avec success",
            showConfirmButton: false,
            timer: 2000,
          });
          //Fermer le modal
          // alert("OKy")
          this.formData.nom = " ";
          this.formData.code = " ";
          this.formData.commune_id = " ";
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
