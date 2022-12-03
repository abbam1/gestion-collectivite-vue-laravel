<template>
  <div class="main-content">

<SoftAlert v-show="showAlertSuccess" icon="fa fa-check" dismissible>
    <p>Commune enregistrée avec succès</p>
</SoftAlert>
<SoftAlert1 v-show="showAlertDelete" icon="fa fa-check" dismissible>
    <p>Commune suprimée avec succès</p>
</SoftAlert1>
    <div class="alert alert-secondary1 mx-4" role="alert">
        <span class="text-white"><strong>Bienvenue sur l'espace de gestion des communes, vous pouvez</strong>
            <strong> Ajouter, modifier ou Supprimer une commune</strong>
            </span>
    </div>

    <div class="row">
        <div class="col-12">
            <div class="card mb-4 mx-4">
                <div class="card-header pb-0">
                    <div class="d-flex flex-row justify-content-between">
                        <div>
                            <h5 class="mb-0">Toutes les communes</h5>
                        </div>
                        <!-- Button trigger modal -->
                        <button type="button" class="btn bg-gradient-primary btn-sm mb-0 buttonSites" data-bs-toggle="modal" data-bs-target="#exampleModalMessage">
                            +&nbsp; Ajouter une commune
                        </button>
                        <!-- Button trigger modal -->
                    </div>
                </div>
                <div class="card-body px-0 pt-0 pb-2">
                    <div class="table-responsive p-0">
                        <table class="table align-items-center mb-0">
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
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in items" :key="('commune_'+item.id)">
                                    <td class="ps-4">
                                        <p class="text-xs font-weight-bold mb-0">{{item.nom}}</p>
                                    </td>
                                    <td class="text-center">
                                        <p class="text-xs font-weight-bold mb-0">{{item.superficie}}</p>
                                    </td>
                                    <td class="text-center">
                                        <span class="text-xs font-weight-bold mb-0"><i class="fas fa-solid fa-map-pin"></i>{{item.geolocalisation}}</span>
                                    </td>
                                    <td class="text-center">
                                        <!-- Button trigger modal -->
                                        <button type="button" class="mx-3 buttonSites" @click="setEdit(item.id)" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-original-title="Edit user">
                                            <i class="fas fa-user-edit text-secondary"></i>
                                        </button>
                                        <!-- Button trigger modal -->
                                        <span>
                                            <button @click="deleteItem(item.id)" class="buttonSites">
                                                <i class="cursor-pointer fas fa-trash text-secondary "></i>
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
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" >
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modifier une commune</h5>
        <button type="button" class="btn-close text-dark" data-bs-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form ref="editCommuneForm" @submit.prevent="editForm">
            <input type="hidden" name="_method" value="put"/>
              <div class="form-group">
                <label for="recipient-name" class="col-form-label">Nom:</label>
                <input type="text"  class="form-control" name="nom"  id="recipient-name">
              </div>
              <div class="form-group">
                <label for="recipient-name" class="col-form-label">Superficie:</label>
                <input type="text" class="form-control" name="superficie" id="recipient-name">
              </div>
              <div class="form-group">
                <label for="message-text" class="col-form-label">Geolocalisation:</label>
                <textarea class="form-control" id="message-text" name="geolocalisation"></textarea>
              </div>
              <div class="modal-footer">
                <button type="button" ref="closeUpdate" class="btn bg-gradient-secondary" data-bs-dismiss="modal">Fermer</button>
                <button type="submit"  class="btn bg-gradient-primary">Modifier</button>
              </div>
            </form>      
        </div>
      
    </div>
  </div>
</div>
<!-- Modal pour modifier -->




<!--Modal pour ajouter-->
    <div class="modal fade" id="exampleModalMessage" tabindex="-1" role="dialog" aria-labelledby="exampleModalMessageTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Ajouter une commune</h5>
            <button type="button" class="btn-close text-dark" data-bs-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body">
            <form ref="addCommuneForm" @submit.prevent="addForm">
              <div class="form-group">
                <label for="recipient-name" class="col-form-label">Nom:</label>
                <input type="text"  class="form-control" name="nom"  id="recipient-name">
              </div>
              <div class="form-group">
                <label for="recipient-name" class="col-form-label">Superficie:</label>
                <input type="text" class="form-control" name="superficie" id="recipient-name">
              </div>
              <div class="form-group">
                <label for="message-text" class="col-form-label">Geolocalisation:</label>
                <textarea class="form-control" id="message-text" name="geolocalisation"></textarea>
              </div>
              <div class="modal-footer">
                <button type="button" ref="modalDismiss" class="btn bg-gradient-secondary" data-bs-dismiss="modal">Fermer</button>
                <button type="submit" class="btn bg-gradient-primary">Ajouter</button>
              </div>
            </form>
          </div>
          
        </div>
      </div>
    </div>
<!--Modal pour ajouter-->


</template>




<style>
.buttonSites{
border: none;
background-color: white;

}


</style>


<script>
import SoftAlert from "@/components/SoftAlert.vue"
import SoftAlert1 from "@/components/SoftAlert1.vue"

export default {
    name: "communesTable",

    components:{
        SoftAlert,
        SoftAlert1,
    },
     data(){
        return {
            url:"/api/communes",
            showAlertSuccess:false,
            idToEdit:null,
            items:[],
        }
    },  
    methods:{
        addForm(){
            let formData = new FormData(this.$refs.addCommuneForm);

            this.$axios.post("http://127.0.0.1:8000/api/communes",formData)
                    .then( (res) => {
                        let data = res.data.data;
                        console.log(data)
                        // this.$alert("Enregistré avec succès")
                        //recharger les données
                        this.$refs.modalDismiss.click()
                        this.getData()
                        this.showAlertSuccess = true;
                        //Fermer le modal
                        // alert("OKy")
                    })
                    .catch((err) => {
                        console.log(err);
                    })
        },
        setEdit(id){
            this.idToEdit = id;
        },  
        editForm(){
            let formData = new FormData(this.$refs.editCommuneForm);

            this.$axios.post("http://127.0.0.1:8000/api/communes/"+this.idToEdit,formData)
                    .then( (res) => {
                        let data = res.data.data;
                        console.log(data)
                        // this.$alert("Enregistré avec succès")
                        //recharger les données
                        this.$refs.closeUpdate.click()
                        this.idToEdit = null
                        this.getData()
                        this.showAlertSuccess = true;
                        //Fermer le modal
                        // alert("OKy")
                    })
                    .catch((err) => {
                        console.log(err);
                    })
        },
        deleteItem(id){
            // let formData = new FormData(this.$refs.editCommuneForm);

            this.$axios.delete("http://127.0.0.1:8000/api/communes/"+id)
                    .then( (res) => {
                        let data = res.data.data;
                        console.log(data)
                        // this.$alert("Enregistré avec succès")
                        //recharger les données
                        this.$refs.closeUpdate.click()
                        this.getData()
                        this.showAlertDelete = true;
                        //Fermer le modal
                        // alert("OKy")
                    })
                    .catch((err) => {
                        console.log(err);
                    })
        },

        async getData() {
            this.$axios.get("api/communes")
                .then((res) => {
                    this.items = res.data.data

                })
                .catch((err) => {
                    console.log(err)
                })
        }
    },

    created() {
        this.getData();
    }
  
};
</script>
