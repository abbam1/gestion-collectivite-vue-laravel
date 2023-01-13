<template>
  <div class="main-content">
    <div class="alert alert-secondary1 mx-4" role="alert">
      <span class="text-white"
        ><strong
          >Bienvenue sur l'espace de gestion des Activités, vous pouvez</strong
        >
        <strong> Ajouter, modifier ou Supprimer une Activité</strong>
      </span>
    </div>

    <div class="row">
      <div class="col-12">
        <div class="card mb-4 mx-4">
          <div class="card-header pb-0">
            <div class="d-flex flex-row justify-content-between">
              <div>
                <h5 class="mb-0">Toutes les Activités</h5>
              </div>
              <!-- Button trigger modal -->
              <button
                type="button"
                class="btn bg-gradient-primary btn-sm mb-0 buttonSites"
                data-bs-toggle="modal"
                data-bs-target="#exampleModalMessage"
                @click="clearInput()"
              >
                +&nbsp; Ajouter une Activité
              </button>
              <!-- Button trigger modal -->
            </div>
          </div>
          <div class="card-body pb-2">
            <div class="table-responsive">
              <table class="table align-items-center" id="datatable">
                <thead>
                  <tr>
                    <!-- <th
                      class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      ID
                    </th> -->
                    <th
                      class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      Nom
                    </th>
                    <th
                      class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      Description
                    </th>
                    <th
                      class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in items" :key="'activite_' + item.id">
                    <!-- <td class="ps-4">
                      <p class="text-xs font-weight-bold mb-0">
                        {{ item.id }}
                      </p>
                    </td> -->
                    <td class="ps-4">
                      <p class="text-xs font-weight-bold mb-0">
                        {{ item.nom }}
                      </p>
                    </td>
                    <td class="text-center">
                      <p class="text-xs font-weight-bold mb-0">
                        {{ item.description }}
                      </p>
                    </td>
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
            Modifier une Activité
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
        <form ref="editActivitesForm" @submit.prevent="editForm">
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
              <label for="message-text" class="col-form-label"
                >Description:</label
              >
              <textarea
                class="form-control"
                id="message-text"
                name="description"
              ></textarea>
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
            Supprimer une activité
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
            Êtes-vous sûr de vouloir supprimer cette activité?
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
            Ajouter une activité
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
          <form ref="addActivitesForm" @submit.prevent="addForm">
            <div class="form-group">
              <label for="recipient-name" class="col-form-label">Nom:</label>
              <input
                type="text"
                v-model="formData.nom"
                class="form-control"
                name="nom"
                id="recipient-name"
              />
            </div>
            <div class="form-group">
              <label for="message-text" class="col-form-label"
                >Description:</label
              >
              <textarea
                class="form-control"
                v-model="formData.description"
                id="message-text"
                name="description"
              ></textarea>
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
  name: "activitesTable",

  components: {},
  data() {
    return {
      url: "/activites",
      showAlertSuccess: false,
      idToEdit: null,
      items: [],
      formData: {},
    };
  },
  methods: {
    addForm() {
      let formData = new FormData(this.$refs.addActivitesForm);

      this.$axios
        .post("/activites", formData)
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
              title: "Activité enregistrée avec success",
              showConfirmButton: false,
              timer: 2000,
            })
          ) {
            setTimeout(function () {
              location.reload();
            }, 2000);
          }
          this.formData.nom = " ";
          this.formData.description = " ";
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
      $("textarea[name=description]").val(item.description);
    },
    clearInput() {
      $("input[name=nom]").val("");
      $("textarea[name=description]").val("");
    },
    editForm() {
    let formData = new FormData(this.$refs.editActivitesForm);

      this.$axios
        .post("/activites/" + this.idToEdit, formData)
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
            title: "Activité modifiée avec success",
            showConfirmButton: false,
            timer: 2000,
          });
          //Fermer le modal
          // alert("OKy")
          this.formData.nom = " ";
          this.formData.description = " ";
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
    // let formData = new FormData(this.$refs.editActivitesForm);

      this.$axios
        .delete("/activites/" + this.idToEdit)
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
              title: "Activité supprimée avec success",
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
        });
    },

    async getData() {
      this.$axios
        .get("/activites")
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
  },

  created() {
    this.getData();
  },
};
</script>
