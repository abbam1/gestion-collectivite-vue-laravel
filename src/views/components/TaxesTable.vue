<template>
  <div class="main-content">
<div class="alert alert-secondary1 mx-4" role="alert">
        <span class="text-white"><strong>Bienvenue sur l'espace de gestion des taxes, vous pouvez</strong>
            <strong> Ajouter, modifier ou Supprimer une taxe</strong>
            </span>
    </div>

    <div class="row">
        <div class="col-12">
            <div class="card mb-4 mx-4">
                <div class="card-header pb-0">
                    <div class="d-flex flex-row justify-content-between">
                        <div>
                            <h5 class="mb-0">Toutes les taxes</h5>
                        </div>
                        <a href="#" class="btn bg-gradient-primary fas fa-file-pdf btn-sm mb-0" type="button"> PDF</a>
                        <!-- Button trigger modal -->
                        <button type="button" class="btn bg-gradient-primary btn-sm mb-0 buttonSites" data-bs-toggle="modal" data-bs-target="#exampleModalMessage">
                            +&nbsp; Nouvelle Taxe
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
                                    Période
                                    </th>
                                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                    Fréquence
                                    </th>
                                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                    Montant
                                    </th>
                                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                    ID Compte-Taxe
                                    </th>
                                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                    ID Commune
                                    </th>
                                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="ps-4">
                                        <p class="text-xs font-weight-bold mb-0">Taxe</p>
                                    </td>
                                    <td class="text-center">
                                        <p class="text-xs font-weight-bold mb-0">Occasionnelle</p>
                                    </td>
                                    <td class="text-center">
                                        <p class="text-xs font-weight-bold mb-0">OCCASIONNELLE</p>
                                    </td>
                                    <td class="text-center">
                                        <p class="text-xs font-weight-bold mb-0">1</p>
                                    </td>
                                    <td class="text-center">
                                        <p class="text-xs font-weight-bold mb-0">2</p>
                                    </td>
                                    <td class="text-center">
                                        <p class="text-xs font-weight-bold mb-0">2</p>
                                    </td>
                                    
                                    <td class="text-center">
                                        <!-- Button trigger modal -->
                                        <button type="button" class="mx-3 buttonSites" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-original-title="Edit user">
                                            <i class="fas fa-user-edit text-secondary"></i>
                                        </button>
                                        <!-- Button trigger modal -->
                                        
                                        <span>
                                            <i class="cursor-pointer fas fa-trash text-secondary"></i>
                                        </span>
                                    </td>
                                </tr>
                                
                                <tr>
                                    <td class="ps-4">
                                        <p class="text-xs font-weight-bold mb-0">Taxe</p>
                                    </td>
                                    <td class="text-center">
                                        <p class="text-xs font-weight-bold mb-0">Occasionnelle</p>
                                    </td>
                                    <td class="text-center">
                                        <p class="text-xs font-weight-bold mb-0">OCCASIONNELLE</p>
                                    </td>
                                    <td class="text-center">
                                        <p class="text-xs font-weight-bold mb-0">1</p>
                                    </td>
                                    <td class="text-center">
                                        <p class="text-xs font-weight-bold mb-0">2</p>
                                    </td>
                                    <td class="text-center">
                                        <p class="text-xs font-weight-bold mb-0">2</p>
                                    </td>
                                    
                                    <td class="text-center">
                                        <!-- Button trigger modal -->
                                        <button type="button" class="mx-3 buttonSites" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-original-title="Edit user">
                                            <i class="fas fa-user-edit text-secondary"></i>
                                        </button>
                                        <!-- Button trigger modal -->
                                        
                                        <span>
                                            <i class="cursor-pointer fas fa-trash text-secondary"></i>
                                        </span>
                                    </td>
                                </tr>
                                
                                <tr>
                                    <td class="ps-4">
                                        <p class="text-xs font-weight-bold mb-0">Taxe</p>
                                    </td>
                                    <td class="text-center">
                                        <p class="text-xs font-weight-bold mb-0">Occasionnelle</p>
                                    </td>
                                    <td class="text-center">
                                        <p class="text-xs font-weight-bold mb-0">OCCASIONNELLE</p>
                                    </td>
                                    <td class="text-center">
                                        <p class="text-xs font-weight-bold mb-0">1</p>
                                    </td>
                                    <td class="text-center">
                                        <p class="text-xs font-weight-bold mb-0">2</p>
                                    </td>
                                    <td class="text-center">
                                        <p class="text-xs font-weight-bold mb-0">2</p>
                                    </td>
                                    
                                    <td class="text-center">
                                        <!-- Button trigger modal -->
                                        <button type="button" class="mx-3 buttonSites" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-original-title="Edit user">
                                            <i class="fas fa-user-edit text-secondary"></i>
                                        </button>
                                        <!-- Button trigger modal -->
                                        
                                        <span>
                                            <i class="cursor-pointer fas fa-trash text-secondary"></i>
                                        </span>
                                    </td>
                                </tr>
                                
                                <tr>
                                    <td class="ps-4">
                                        <p class="text-xs font-weight-bold mb-0">Taxe</p>
                                    </td>
                                    <td class="text-center">
                                        <p class="text-xs font-weight-bold mb-0">Occasionnelle</p>
                                    </td>
                                    <td class="text-center">
                                        <p class="text-xs font-weight-bold mb-0">OCCASIONNELLE</p>
                                    </td>
                                    <td class="text-center">
                                        <p class="text-xs font-weight-bold mb-0">1</p>
                                    </td>
                                    <td class="text-center">
                                        <p class="text-xs font-weight-bold mb-0">2</p>
                                    </td>
                                    <td class="text-center">
                                        <p class="text-xs font-weight-bold mb-0">2</p>
                                    </td>
                                    
                                    <td class="text-center">
                                        <!-- Button trigger modal -->
                                        <button type="button" class="mx-3 buttonSites" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-original-title="Edit user">
                                            <i class="fas fa-user-edit text-secondary"></i>
                                        </button>
                                        <!-- Button trigger modal -->
                                        
                                        <span>
                                            <i class="cursor-pointer fas fa-trash text-secondary"></i>
                                        </span>
                                    </td>
                                </tr>
                                
                                <tr>
                                    <td class="ps-4">
                                        <p class="text-xs font-weight-bold mb-0">Taxe</p>
                                    </td>
                                    <td class="text-center">
                                        <p class="text-xs font-weight-bold mb-0">Occasionnelle</p>
                                    </td>
                                    <td class="text-center">
                                        <p class="text-xs font-weight-bold mb-0">OCCASIONNELLE</p>
                                    </td>
                                    <td class="text-center">
                                        <p class="text-xs font-weight-bold mb-0">1</p>
                                    </td>
                                    <td class="text-center">
                                        <p class="text-xs font-weight-bold mb-0">2</p>
                                    </td>
                                    <td class="text-center">
                                        <p class="text-xs font-weight-bold mb-0">2</p>
                                    </td>
                                    
                                    <td class="text-center">
                                        <!-- Button trigger modal -->
                                        <button type="button" class="mx-3 buttonSites" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-original-title="Edit user">
                                            <i class="fas fa-user-edit text-secondary"></i>
                                        </button>
                                        <!-- Button trigger modal -->
                                        
                                        <span>
                                            <i class="cursor-pointer fas fa-trash text-secondary"></i>
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
        <h5 class="modal-title" id="exampleModalLabel">Modifier une taxe</h5>
        <button type="button" class="btn-close text-dark" data-bs-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
              <div class="form-group">
                <label for="recipient-name" class="col-form-label">Nom:</label>
                <input type="text" class="form-control"  id="recipient-name">
              </div>
              <div class="form-group">
                <label for="recipient-name" class="col-form-label">Période:</label>
                <input type="text" class="form-control"  id="recipient-name">
              </div>
              <div class="form-group">
                <label for="recipient-name" class="col-form-label">Fréquence:</label>
                <input type="text" class="form-control"  id="recipient-name">
              </div>
              <div class="form-group">
                <label for="recipient-name" class="col-form-label">Montant:</label>
                <input type="text" class="form-control"  id="recipient-name">
              </div>
              <div class="form-group">
                <label for="recipient-name" class="col-form-label">ID Compte-Taxe:</label>
                <input type="text" class="form-control"  id="recipient-name">
              </div>
              <div class="form-group">
                <label for="recipient-name" class="col-form-label">ID Commune:</label>
                <input type="text" class="form-control"  id="recipient-name">
              </div>
            </form>     
         </div>
      <div class="modal-footer">
        <button type="button" class="btn bg-gradient-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn bg-gradient-primary">Save changes</button>
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
            <h5 class="modal-title" id="exampleModalLabel">Ajouter une Taxe</h5>
            <button type="button" class="btn-close text-dark" data-bs-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="recipient-name" class="col-form-label">Nom:</label>
                <input type="text" class="form-control"  id="recipient-name">
              </div>
              <div class="form-group">
                <label for="recipient-name" class="col-form-label">Période:</label>
                <input type="text" class="form-control"  id="recipient-name">
              </div>
              <div class="form-group">
                <label for="recipient-name" class="col-form-label">Fréquence:</label>
                <input type="text" class="form-control"  id="recipient-name">
              </div>
              <div class="form-group">
                <label for="recipient-name" class="col-form-label">Montant:</label>
                <input type="text" class="form-control"  id="recipient-name">
              </div>
              <div class="form-group">
                <label for="recipient-name" class="col-form-label">ID Compte-Taxe:</label>
                <input type="text" class="form-control"  id="recipient-name">
              </div>
              <div class="form-group">
                <label for="recipient-name" class="col-form-label">ID Commune:</label>
                <input type="text" class="form-control"  id="recipient-name">
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn bg-gradient-secondary" data-bs-dismiss="modal">Fermer</button>
            <button type="button" class="btn bg-gradient-primary">Ajouter</button>
          </div>
        </div>
      </div>
    </div>
<!--Modal pour ajouter-->




</template>

<script>
/*import SoftAvatar from "@/components/SoftAvatar.vue";
import SoftBadge from "@/components/SoftBadge.vue";
import img1 from "../../assets/img/team-2.jpg";
import img2 from "../../assets/img/team-3.jpg";
import img3 from "../../assets/img/team-4.jpg";
import img4 from "../../assets/img/team-3.jpg";
import img5 from "../../assets/img/team-2.jpg";
import img6 from "../../assets/img/team-4.jpg";
*/

export default {
  name: "taxesTable"
  /*data() {
    return {
      img1,
      img2,
      img3,
      img4,
      img5,
      img6,
    };
  },
  components: {
    SoftAvatar,
    SoftBadge,
  },*/
};
</script>


