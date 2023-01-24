<template>
  <div class="main-content">
    <div class="alert alert-secondary1 mx-4" role="alert">
      <span class="text-white"
        ><strong
          >Bienvenue sur l'espace de gestion des utilisateurs, vous
          pouvez</strong
        >
        <strong> Ajouter, modifier ou Supprimer un utilisateur </strong>
      </span>
    </div>

    <div class="row">
      <div class="col-12">
        <div class="card mb-4 mx-4">
          <div class="card-header pb-0">
            <div class="d-flex flex-row justify-content-between">
              <div>
                <h5 class="mb-0">Tous les utilisateurs</h5>
              </div>
              <!-- Button trigger modal -->
              <button
                type="button"
                class="btn bg-gradient-primary btn-sm mb-0 buttonSites"
                data-bs-toggle="modal"
                data-bs-target="#exampleModalMessage"
                @click="clearInput()"
              >
                +&nbsp; Ajouter un utilisateur
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
                    <th
                      class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      Prénoms
                    </th>
                    <th
                      class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      Matricule
                    </th>
                    <th
                      class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      Email
                    </th>
                    <th
                      class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      Tel
                    </th>
                    <!-- <th
                      class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      Password
                    </th>
                    <th
                      class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      password_confirmation
                    </th>
                    <th
                      class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      Poste
                    </th> -->
                    <th
                      class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      ID Commune
                    </th>
                    <th
                      class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      Role
                    </th>
                    <th
                      class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in items" :key="'user_' + item.id">
                    <td class="ps-4">
                      <p class="text-xs font-weight-bold mb-0">
                        {{ item.nom }}
                      </p>
                    </td>
                    <td class="text-center">
                      <p class="text-xs font-weight-bold mb-0">
                        {{ item.prenoms }}
                      </p>
                    </td>
                    <td class="text-center">
                      <p class="text-xs font-weight-bold mb-0">
                        {{ item.matricule }}
                      </p>
                    </td>
                    <td class="text-center">
                      <p class="text-xs font-weight-bold mb-0">
                        {{ item.email }}
                      </p>
                    </td>
                    <td class="text-center">
                      <p class="text-xs font-weight-bold mb-0">
                        {{ item.contacts }}
                      </p>
                    </td>
                    <!-- <td class="text-center">
                      <p class="text-xs font-weight-bold mb-0">
                        {{ item.password }}
                      </p>
                    </td>
                    <td class="text-center">
                      <p class="text-xs font-weight-bold mb-0">
                        {{ item.password_confirmation }}
                      </p>
                    </td>
                    <td class="text-center">
                      <p class="text-xs font-weight-bold mb-0">
                        {{ item.post }}
                      </p>
                    </td> -->
                    <td class="text-center">
                      <p class="text-xs font-weight-bold mb-0">
                        {{ item.commune_id }}
                      </p>
                    </td>
                    <td class="text-center">
                      <p class="text-xs font-weight-bold mb-0">
                        {{ item.roles[0].fullname }}
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
            Modifier un utilisateur
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
          <form ref="editUsersForm" @submit.prevent="editForm">
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
                >Prénoms:</label
              >
              <input
                type="text"
                class="form-control"
                name="prenoms"
                id="recipient-name"
              />
            </div>
            <div class="form-group">
              <label for="recipient-name" class="col-form-label"
                >Matricule:</label
              >
              <input
                type="text"
                class="form-control"
                name="matricule"
                id="recipient-name"
              />
            </div>
            <div class="form-group">
              <label for="recipient-name" class="col-form-label">Email:</label>
              <input
                type="text"
                class="form-control"
                name="email"
                id="recipient-name"
              />
            </div>
            <div class="form-group">
              <label for="recipient-name" class="col-form-label"
                >Contact:</label
              >
              <input
                type="text"
                class="form-control"
                name="contacts"
                id="recipient-name"
              />
            </div>
            <div class="form-group">
              <label for="recipient-name" class="col-form-label"
                >Mot de passe:</label
              >
              <div class="mot-de-passe">
                <input
                  :type="showPwd ? 'text' : 'password'"
                  class="form-control"
                  name="password"
                  id="password-field"
                /><span
                  class="fa fa-fw fa-eye field-icon toggle-password"
                  @click="showPwd = !showPwd"
                ></span>
              </div>
            </div>
            <div class="form-group">
              <label for="recipient-name" class="col-form-label"
                >Confirmer Mot de passe:</label
              >
              <div class="mot-de-passe">
                <input
                  :type="showPwd ? 'text' : 'password'"
                  class="form-control"
                  name="password_confirmation"
                  id="password-field"
                /><span
                  class="fa fa-fw fa-eye field-icon toggle-password"
                  @click="showPwd = !showPwd"
                ></span>
              </div>
            </div>
            <div class="form-group">
              <label for="recipient-name" class="col-form-label">Poste:</label>
              <input
                type="text"
                class="form-control"
                name="post"
                id="recipient-name"
              />
            </div>
            <div class="form-group">
              <input
                type="hidden"
                name="commune_id"
                class="form-control"
                :value="this.$store.state.user.data.commune_id"
                >
            </div>
            <div class="form-group">
              <label for="recipient-name" class="col-form-label">Roles:</label>
              <select name="role" class="form-control">
                <option value="">Choississez le rôle ⇩</option>
                <option
                  v-for="item in listRoles"
                  :key="'roles_' + item.id"
                  :value="item.name"
                >
                  {{ item.fullname }}
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
            Supprimer un utilisateur
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
            Êtes-vous sûr de vouloir supprimer cet utilisateur?
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
            Ajouter un utilisateur
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
          <form ref="addUsersForm" @submit.prevent="addForm">
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
              <label for="recipient-name" class="col-form-label"
                >Prénoms:</label
              >
              <input
                v-model="formData.prenoms"
                type="text"
                class="form-control"
                name="prenoms"
                id="recipient-name"
              />
            </div>
            <div class="form-group">
              <label for="recipient-name" class="col-form-label"
                >Matricule:</label
              >
              <input
                v-model="formData.matricule"
                type="text"
                class="form-control"
                name="matricule"
                id="recipient-name"
              />
            </div>
            <div class="form-group">
              <label for="recipient-name" class="col-form-label">Email:</label>
              <input
                v-model="formData.email"
                type="text"
                class="form-control"
                name="email"
                id="recipient-name"
              />
            </div>
            <div class="form-group">
              <label for="recipient-name" class="col-form-label"
                >Contact:</label
              >
              <input
                v-model="formData.contacts"
                type="text"
                class="form-control"
                name="contacts"
                id="recipient-name"
              />
            </div>
            <div class="form-group">
              <label for="recipient-name" class="col-form-label"
                >Mot de passe:</label
              >
              <div class="mot-de-passe">
                <input
                  v-model="formData.password"
                  :type="showPwd ? 'text' : 'password'"
                  class="form-control"
                  name="password"
                  id="password-field"
                /><span
                  class="fa fa-fw fa-eye field-icon toggle-password"
                  @click="showPwd = !showPwd"
                ></span>
              </div>
            </div>
            <div class="form-group">
              <label for="recipient-name" class="col-form-label"
                >Confirmer Mot de passe:</label
              >
              <div class="mot-de-passe">
                <input
                  v-model="formData.password_confirmation"
                  :type="showPwd ? 'text' : 'password'"
                  class="form-control"
                  name="password_confirmation"
                  id="password-field"
                /><span
                  class="fa fa-fw fa-eye field-icon toggle-password"
                  @click="showPwd = !showPwd"
                ></span>
              </div>
            </div>
            <div class="form-group">
              <label for="recipient-name" class="col-form-label">Poste:</label>
              <input
                v-model="formData.post"
                type="text"
                class="form-control"
                name="post"
                id="recipient-name"
              />
            </div>
            <div class="form-group">
              <input
                type="hidden"
                name="commune_id"
                class="form-control"
                :value="this.$store.state.user.data.commune_id"
                >
            </div>
            <div class="form-group">
              <label for="recipient-name" class="col-form-label">Role:</label>
              <select name="role" class="form-control" v-model="formData.role">
                <option value="">Choississez le rôle ⇩</option>
                <option
                  v-for="item in listRoles"
                  :key="'roles_' + item.id"
                  :value="item.name"
                >
                  {{ item.fullname }}
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

.mot-de-passe {
  display: flex;
}
.fa,
.fab,
.fad,
.fal,
.far,
.fas {
  line-height: 2 !important;
}

.fa-fw {
  width: 1.7em !important;
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
  name: "utilisateursTable",

  components: {},
  data() {
    return {
      url: "/users",
      showAlertSuccess: false,
      idToEdit: null,
      items: [],
      listCommunes: [],
      listRoles: [],
      formData: {},
      showPwd: false,
    };
  },
  methods: {
    addForm() {
      let formData = new FormData(this.$refs.addUsersForm);

      this.$axios
        .post("/users", formData)
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
              title: "Utilisateur Créé avec success",
              showConfirmButton: false,
              timer: 2000,
            })
          ) {
            setTimeout(function () {
              location.reload();
            }, 2000);
          }
          this.formData.nom = " ";
          this.formData.prenoms = " ";
          this.formData.matricule = " ";
          this.formData.email = " ";
          this.formData.contacts = " ";
          this.formData.password = " ";
          this.formData.password_confirmation = " ";
          this.formData.commune_id = " ";
          this.formData.role = " ";
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
      $("input[name=prenoms]").val(item.prenoms);
      $("input[name=matricule]").val(item.matricule);
      $("input[name=email]").val(item.email);
      $("input[name=contacts]").val(item.contacts);
      $("input[name=password]").val(item.password);
      $("input[name=password_confirmation]").val(item.password_confirmation);
      $("select[name=commune_id]").val(item.commune_id);
      $("select[name=role]").val(item.roles[0].name);
    },
    clearInput() {
      $("input[name=nom]").val("");
      $("input[name=prenoms]").val("");
      $("input[name=matricule]").val("");
      $("input[name=email]").val("");
      $("input[name=contacts]").val("");
      $("input[name=password]").val("");
      $("input[name=password_confirmation]").val("");
      $("select[name=role]").val("");
    },
    editForm() {
      let formData = new FormData(this.$refs.editUsersForm);

      this.$axios
        .post("/users/" + this.idToEdit, formData)
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
            title: "Utilisateur modifié avec success",
            showConfirmButton: false,
            timer: 2000,
          });
          //Fermer le modal
          // alert("OKy")
          this.formData.nom = " ";
          this.formData.prenoms = " ";
          this.formData.matricule = " ";
          this.formData.email = " ";
          this.formData.contacts = " ";
          this.formData.password = " ";
          this.formData.password_confirmation = " ";
          this.formData.commune_id = " ";
          this.formData.role = " ";
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
      // let formData = new FormData(this.$refs.editUsersForm);

      this.$axios
        .delete("/users/" + this.idToEdit)
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
              title: "Utilisateur supprimé avec success",
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
        .get("/users")
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
    // Recupération des communes
    getCommunes() {
      this.$axios
        .get("/communes")
        .then((res) => {
          this.listCommunes = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // Recupération des communes

    // Recupération des roles
    getRoles() {
      this.$axios
        .get("/roles")
        .then((res) => {
          this.listRoles = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // Recupération des roles
  },

  created() {
    this.getData();
    this.getCommunes();
    this.getRoles();
  },
};
</script>
