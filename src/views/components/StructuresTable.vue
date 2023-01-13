<template>
  <div class="main-content">
    <div class="alert alert-secondary1 mx-4" role="alert">
      <span class="text-white"
        ><strong
          >Liste des structures rattachés aux  <strong>contribuables</strong></strong
        >
       
      </span>
    </div>

    <div class="row">
      <div class="col-12">
        <div class="card mb-4 mx-4">
          <div class="card-header pb-0">
            <div class="d-flex flex-row justify-content-between">
              <div>
                <h5 class="mb-0">Toutes les structures</h5>
              </div>
              <!-- Button trigger modal -->
              <button
                type="button"
                class="btn bg-gradient-primary btn-sm mb-0 buttonSites"
                data-bs-toggle="modal"
                data-bs-target="#exampleModalMessage"
                @click="clearInput()"
              >
                +&nbsp; Ajouter une structure
              </button>
              <!-- Button trigger modal -->
            </div>
          </div>
          <div class="card-body pb-2">
            <div class="table-responsive">
              <table class="table align-items-center" id="datatable">
                <thead>
                  <tr>
                    <th
                      class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      Nom
                    </th>
                    <!-- <th
                      class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      Email
                    </th> -->
                    <th
                      class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      Chiffre d'affaire (CFA)
                    </th>
                    <!-- <th
                      class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      Geolocalisation
                    </th> -->
                    <th
                      class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      Taille
                    </th>
                    <!-- <th
                      class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      Impot synthétique
                    </th>
                    <th
                      class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      Centre commercial
                    </th> -->
                    <th
                      class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      Adresse
                    </th>
                    <!-- <th
                      class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      Fonction
                    </th> -->
                    <!-- <th
                      class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      ID Contribuable
                    </th> -->
                    <!-- <th
                      class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      ID Site
                    </th>
                    <th
                      class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      ID Activité
                    </th> -->
                    <th
                      class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in items" :key="'commune_' + item.id">
                    <td class="ps-4">
                      <p class="text-xs font-weight-bold mb-0">
                        {{ item.nom }}
                      </p>
                    </td>
                    <!-- <td class="text-center">
                      <p class="text-xs font-weight-bold mb-0">
                        {{ item.email }}
                      </p>
                    </td> -->
                    <td class="text-center">
                      <p class="text-xs font-weight-bold mb-0">
                        {{ item.chiffre_affaire }}
                      </p>
                    </td>
                    <!-- <td class="text-center">
                      <p class="text-xs font-weight-bold mb-0">
                        {{ item.geolocalisation }}
                      </p>
                    </td> -->
                    <td class="text-center">
                      <p class="text-xs font-weight-bold mb-0">
                        {{ item.taille }}
                      </p>
                    </td>
                    <!-- <td class="text-center">
                      <p class="text-xs font-weight-bold mb-0">
                        {{ item.impot_synthetique }}
                      </p>
                    </td> -->
                    <!-- <td class="text-center">
                      <p class="text-xs font-weight-bold mb-0">
                        {{ item.centre_commercial }}
                      </p>
                    </td> -->
                    <td class="text-center">
                      <p class="text-xs font-weight-bold mb-0">
                        {{ item.adresse }}
                      </p>
                    </td>
                    <!-- <td class="text-center">
                      <p class="text-xs font-weight-bold mb-0">
                        {{ item.fonction }}
                      </p>
                    </td> -->
                    <!-- <td class="text-center">
                      <p class="text-xs font-weight-bold mb-0">
                        {{ item.contribuable_id }}
                      </p>
                    </td> -->
                    <!-- <td class="text-center">
                      <p class="text-xs font-weight-bold mb-0">
                        {{ item.site_id }}
                      </p>
                    </td>
                    <td class="text-center">
                      <p class="text-xs font-weight-bold mb-0">
                        {{ item.activite_id }}
                      </p>
                    </td> -->
                    <td class="text-center">
                      <!-- Button trigger modal -->
                      <button
                        type="button"
                        class="mx-3 buttonSites"
                        @click="setEdit(item.id, item)"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        data-bs-original-title="Edit user"
                      >
                        <i class="fas fa-user-edit text-secondary"></i>
                      </button>
                      <!-- Button trigger modal -->
                      <span>
                        <button
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal1"
                          data-bs-original-title="Delete user"
                          @click="setEdit(item.id)"
                          class="buttonSites"
                        >
                          <i
                            class="cursor-pointer fas fa-trash text-secondary"
                          ></i>
                        </button>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal pour modifier -->
  <div
    class="modal fade"
    id="exampleModal"
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

  <!--Modal pour Supprimer-->
  <div
    class="modal fade"
    id="exampleModal1"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            Supprimer une structure
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
          <h5 class="modal-title" id="exampleModalLabel">
            Êtes-vous sûr de vouloir supprimer cette structure?
          </h5>
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
              data-bs-dismiss="modal"
              @click="deleteItem(id)"
              class="btn bg-gradient-primary"
            >
              Confirmer
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--Modal pour Supprimer-->

  <!--Modal pour ajouter-->
  <div
    class="modal fade"
    id="exampleModalMessage"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalMessageTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            Ajouter une structure
          </h5>
          <button
            type="button"
            class="btn-close text-dark"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>

        <div class="modal-body">
          <form ref="addStructuresForm" @submit.prevent="addForm">
            <div class="form-group">
              <label for="recipient-name" class="col-form-label">Nom:</label>
              <input
                v-model="formData.nom"
                type="text"
                class="form-control"
                name="nom"
                id="recipient-name"
              />
            </div>
            <div class="form-group">
              <label for="recipient-name" class="col-form-label">Email:</label>
              <input
                v-model="formData.email"
                type="email"
                class="form-control"
                name="email"
                id="recipient-name"
              />
            </div>
            <div class="form-group">
              <label for="recipient-name" class="col-form-label"
                >Chiffre d'affaire (CFA):</label
              >
              <input
                v-model="formData.chiffre_affaire"
                type="number"
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
                v-model="formData.geolocalisation"
                type="text"
                class="form-control"
                name="geolocalisation"
                id="recipient-name"
              />
            </div>
            <div class="form-group">
              <label for="recipient-name" class="col-form-label">Taille:</label>
              <select
                v-model="formData.taille"
                class="form-control"
                name="taille"
                id="recipient-name"
              >
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
                v-model="formData.impot_synthetique"
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
                v-model="formData.centre_commercial"
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
                v-model="formData.adresse"
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
                v-model="formData.fonction"
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

              <select
                name="contribuable_id"
                class="form-control"
                v-model="formData.contribuable_id"
              >
                <option value="" selected>Choississez l'id</option>
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
              <select
                name="site_id"
                class="form-control"
                v-model="formData.site_id"
              >
                <option value="" selected>Choississez l'id</option>
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

              <select
                name="activite_id"
                class="form-control"
                v-model="formData.activite_id"
              >
                <option value="" selected>Choississez l'id</option>
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
                ref="modalDismiss"
                class="btn bg-gradient-secondary"
                data-bs-dismiss="modal"
              >
                Fermer
              </button>
              <button type="submit" class="btn bg-gradient-primary">
                Ajouter
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!--Modal pour ajouter-->
</template>

<style>
.buttonSites {
  border: none;
  background-color: white;
}

.swal2-styled.swal2-confirm {
  background-color: #f6921d !important;
}
</style>

<script>
import "jquery/dist/jquery.min.js";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import Swal from "sweetalert2";

export default {
  name: "structuresTable",

  components: {},
  data() {
    return {
      url: "/structures",
      showAlertSuccess: false,
      idToEdit: null,
      items: [],
      listSites: [],
      listActivites: [],
      listContribuables: [],
      formData: {},
    };
  },
  methods: {
    addForm() {
      let formData = new FormData(this.$refs.addStructuresForm);

      this.$axios
        .post("/structures", formData)
        .then((res) => {
          let data = res.data.data;
          console.log(data);
          // this.$alert("Enregistré avec succès")
          //Fermer le modal
          this.$refs.modalDismiss.click();
          //recharger les données
          this.getData();

          if (
            Swal.fire({
              icon: "success",
              title: "Structure enregistrée avec success",
              showConfirmButton: false,
              timer: 2000,
            })
          ) {
            setTimeout(function () {
              location.reload();
            }, 2000);
          }
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
    deleteItem() {
      // let formData = new FormData(this.$refs.editStructuresForm);

      this.$axios
        .delete("/structures/" + this.idToEdit)
        .then((res) => {
          let data = res.data.data;
          console.log(data);
          // this.$alert("Enregistré avec succès")
          //recharger les données
          this.$refs.closeUpdate.click();
          this.getData();
          if (
            Swal.fire({
              icon: "success",
              title: "Structure supprimée avec success",
              showConfirmButton: false,
              timer: 2000,
            })
          ) {
            setTimeout(function () {
              location.reload();
            }, 2000);
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

    async getData() {
      this.$axios
        .get("/structures")
        .then((res) => {
          this.items = res.data.data;
          $(document).ready(function () {
            $("#datatable").DataTable({
              destroy: true,
              language: {
                url:
                  "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json",
              },
            });
          });
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
    // Recupération des contribuables
  },

  // initialiser les données recupérer en get
  created() {
    this.getData();
    this.getSites();
    this.getActivites();
    this.getContribuables();
  },
  // initialiser les données recupérer en get
};
</script>
