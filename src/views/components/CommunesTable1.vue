<template>
  <div>
  <div class="main-content">
    <SoftAlert v-show="showAlertSuccess" icon="fa fa-check" dismissible>
      <p>Commune enregistrée avec succès</p>
    </SoftAlert>
    <SoftAlert1 v-show="showAlertDelete" icon="fa fa-check" dismissible>
      <p>Commune suprimée avec succès</p>
    </SoftAlert1>
    <div class="alert alert-secondary1 mx-4" role="alert">
      <span class="text-white"
        ><strong
          >Bienvenue sur l'espace de gestion des communes, vous pouvez</strong
        >
        <strong> Ajouter, modifier ou Supprimer une commune</strong>
      </span>
    </div>

    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header pb-0">
            <div class="d-flex flex-row justify-content-between">
              <div>
                <h5 class="mb-0">Toutes les communes</h5>
              </div>
              <!-- Button trigger modal -->
              <button
                type="button"
                class="btn bg-gradient-primary btn-sm mb-0 buttonSites"
                data-bs-toggle="modal"
                data-bs-target="#exampleModalMessage"
              >
                +&nbsp; Ajouter une commune
              </button>
              <!-- Button trigger modal -->
            </div>
          </div>
          <br />
          <div class="card-body">
            <div class="table-responsive">
              <DataTable :data="itemTest"  class="table align-items-center">
                <thead>
                  <tr>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Nom
                    </th>
                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Superficie
                    </th>
                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Geolocalisation
                    </th>
                    
                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Modifier
                    </th>
                    
                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Modifier
                    </th>
                    
                    
                  </tr>
                </thead>
              </DataTable>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

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
            Supprimer une commune
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
          <h4 class="modal-title" id="exampleModalLabel">
            Êtes-vous sûr de vouloir supprimer?
          </h4>
            <div class="modal-footer">
              <button
                type="button"
                ref="closeUpdate"
                class="btn bg-gradient-secondary"
                data-bs-dismiss="modal"
              >
                Fermer
              </button>
              <button data-bs-dismiss="modal" @click="deleteItem(id)" class="btn bg-gradient-primary">
                Confirmer
              </button>
            </div>
        </div>
      </div>
    </div>
  </div>
<!--Modal pour Supprimer-->




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
            Modifier une commune
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
          <form ref="editCommuneForm" @submit.prevent="editForm">
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
                >Superficie:</label
              >
              <input
                type="text"
                class="form-control"
                name="superficie"
                id="recipient-name"
              />
            </div>
            <div class="form-group">
              <label for="message-text" class="col-form-label"
                >Geolocalisation:</label
              >
              <textarea
                class="form-control"
                id="message-text"
                name="geolocalisation"
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
              <button type="submit" class="btn bg-gradient-primary">
                Modifier
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal pour modifier -->

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
            Ajouter une commune
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
          <form ref="addCommuneForm" @submit.prevent="addForm">
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
              <label for="recipient-name" class="col-form-label"
                >Superficie:</label
              >
              <input
                type="text"
                v-model="formData.superficie"
                class="form-control"
                name="superficie"
                id="recipient-name"
              />
            </div>
            <div class="form-group">
              <label for="message-text" class="col-form-label"
                >Geolocalisation:</label
              >
              <textarea
                class="form-control"
                v-model="formData.geolocalisation"
                id="message-text"
                name="geolocalisation"
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
</div>
</template>

<style>

.buttonSites {
  border: none;
  background-color: white;
}

.table td, .table th {
    white-space: nowrap;
    text-align: -webkit-center !important;
}

i, a {
cursor: pointer;  
}


</style>

<script>
import SoftAlert from "@/components/SoftAlert.vue";
import SoftAlert1 from "@/components/SoftAlert1.vue";
import DataTable from "datatables.net-vue3";
import DataTablesLib from "datatables.net";

DataTable.use(DataTablesLib);


export default {
  name: "communesTable",

  components: {
    SoftAlert,
    SoftAlert1,
    DataTable,
    // DataTablesLib
  },
  data() {
    return {
      url: "/communes",
      showAlertSuccess: false,
      idToEdit: null,
      items: [],
      itemTest: [],
      formData: {},
      
    };
  },
  methods: {
    addForm() {
      let formData = new FormData(this.$refs.addCommuneForm);

      this.$axios
        .post("/communes", formData)
        .then((res) => {
          let data = res.data.data;
          console.log(data);
          // this.$alert("Enregistré avec succès")
          //recharger les données
          this.$refs.modalDismiss.click();
          this.itemTest = [];
          this.getData();
          this.showAlertSuccess = true;
          //Fermer le modal
          // alert("OKy")
          this.formData.nom = " ";
          this.formData.superficie = " ";
          this.formData.geolocalisation = " ";
        })
        .catch((err) => {
          console.log(err);
        });
    },
    setEdit(id) {
     this.idToEdit = id;
    },
    editForm() {
      let formData = new FormData(this.$refs.editCommuneForm);

      this.$axios
        .post("/communes/" + this.idToEdit, formData)
        .then((res) => {
          let data = res.data.data;
          console.log(data);
          // this.$alert("Enregistré avec succès")
          //recharger les données
          this.$refs.closeUpdate.click();
          this.idToEdit = null;
          this.itemTest = [];
          this.getData();
          this.showAlertSuccess = true;
          //Fermer le modal
          // alert("OKy")
          this.formData.nom = " ";
          this.formData.superficie = " ";
          this.formData.geolocalisation = " ";
        })
        .catch((err) => {
          console.log(err);
        });
    },
    
    
    /*supprimer*/
   deleteItem() {
      // let formData = new FormData(this.$refs.editCommuneForm);

      this.$axios
        .delete("/communes/" + this.idToEdit)
        .then((res) => {
          let data = res.data.data;
          console.log(data);
          this.$refs.closeUpdate.click();
          this.itemTest = [];
          this.getData();
          this.showAlertDelete = true;
        })
        .catch((err) => {
          console.log(err);
        });

    },

    async getData() {
      this.$axios
        .get("/communes")
        .then((res) => {
          this.items = res.data.data;
/*mettre les données dans un tableau*/
          for (let i in this.items) {
            if(this.items[i].id) {
              let data = [];
              let modifier =`<i nom="${this.items[i].nom}" superficie="${this.items[i].superficie}" geolocalisation="${this.items[i].geolocalisation}"  class="valeur fas fa-user-edit text-secondary" data-bs-toggle="modal" data-bs-original-title="Edit user" data-bs-target="#exampleModal" @click="${this.setEdit(this.items[i].id)}"></i>`
              let supprimer =`<i class="cursor-pointer fas fa-trash text-secondary" data-bs-toggle="modal" data-bs-original-title="Delete user" data-bs-target="#exampleModal1" @click="${this.setEdit(this.items[i].id)}"></i>`

            data.push(this.items[i].nom);
            data.push(this.items[i].superficie);
            data.push(this.items[i].geolocalisation);
            data.push(modifier);
            data.push(supprimer);

            this.itemTest.push(data);
            }
          }
          //console.log(this.itemTest);
          
/*mettre les données dans un tableau*/

        })
        .catch((err) => {
          console.log(err);
        });
    },
  },

  mounted() {
    this.getData();
    
  },
};




</script>
