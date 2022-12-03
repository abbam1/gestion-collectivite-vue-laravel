<template>
  <div class="main-content">
    <div class="alert alert-secondary1 mx-4" role="alert">
        <span class="text-white"><strong>Bienvenue sur l'espace de gestion des sites, vous pouvez</strong>
            <strong> Ajouter, modifier ou Supprimer un site</strong>
            </span>
    </div>

    <div class="row">
        <div class="col-12">
            <div class="card mb-4 mx-4">
                <div class="card-header pb-0">
                    <div class="d-flex flex-row justify-content-between">
                        <div>
                            <h5 class="mb-0">Tous les sites</h5>
                        </div>
                        <!-- Button trigger modal -->
                        <button type="button" class="btn bg-gradient-primary btn-sm mb-0 buttonSites" data-bs-toggle="modal" data-bs-target="#exampleModalMessage">
                            +&nbsp; Ajouter un site
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
                                    Description
                                    </th>
                                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                    Geolocalisation
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
                                        <p class="text-xs font-weight-bold mb-0">Siporex</p>
                                    </td>
                                    <td class="text-center">
                                        <p class="text-xs font-weight-bold mb-0">Ceci est une breve description</p>
                                    </td>
                                    <td class="text-center">
                                        <span class="text-xs font-weight-bold mb-0"><i class="fas fa-solid fa-map-pin"></i></span>
                                    </td>
                                    <td class="text-center">
                                        <p class="text-xs font-weight-bold mb-0">3</p>
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
                                        <p class="text-xs font-weight-bold mb-0">Siporex</p>
                                    </td>
                                    <td class="text-center">
                                        <p class="text-xs font-weight-bold mb-0">Ceci est une breve description</p>
                                    </td>
                                    <td class="text-center">
                                        <span class="text-xs font-weight-bold mb-0"><i class="fas fa-solid fa-map-pin"></i></span>
                                    </td>
                                    <td class="text-center">
                                        <p class="text-xs font-weight-bold mb-0">3</p>
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
                                        <p class="text-xs font-weight-bold mb-0">Siporex</p>
                                    </td>
                                    <td class="text-center">
                                        <p class="text-xs font-weight-bold mb-0">Ceci est une breve description</p>
                                    </td>
                                    <td class="text-center">
                                        <span class="text-xs font-weight-bold mb-0"><i class="fas fa-solid fa-map-pin"></i></span>
                                    </td>
                                    <td class="text-center">
                                        <p class="text-xs font-weight-bold mb-0">3</p>
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
                                        <p class="text-xs font-weight-bold mb-0">Siporex</p>
                                    </td>
                                    <td class="text-center">
                                        <p class="text-xs font-weight-bold mb-0">Ceci est une breve description</p>
                                    </td>
                                    <td class="text-center">
                                        <span class="text-xs font-weight-bold mb-0"><i class="fas fa-solid fa-map-pin"></i></span>
                                    </td>
                                    <td class="text-center">
                                        <p class="text-xs font-weight-bold mb-0">3</p>
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
        <h5 class="modal-title" id="exampleModalLabel">Modifier un site</h5>
        <button type="button" class="btn-close text-dark" data-bs-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
              <div class="form-group">
                <label for="recipient-name" class="col-form-label">Nom:</label>
                <input type="text"  class="form-control"  id="recipient-name">
              </div>
              <div class="form-group">
                <label for="recipient-name" class="col-form-label">Description:</label>
                <input type="text" class="form-control"  id="recipient-name">
              </div>
              <div class="form-group">
                <label for="message-text" class="col-form-label">Geolocalisation:</label>
                <textarea class="form-control" id="message-text"></textarea>
              </div>
            </form>      </div>
      <div class="modal-footer">
        <button type="button" class="btn bg-gradient-secondary" data-bs-dismiss="modal">Fermer</button>
        <button type="button" class="btn bg-gradient-primary">Modifier</button>
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
            <h5 class="modal-title" id="exampleModalLabel">Ajouter un site</h5>
            <button type="button" class="btn-close text-dark" data-bs-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="recipient-name" class="col-form-label">Nom:</label>
                <input type="text" value="Siporex" class="form-control"  id="recipient-name">
              </div>
              <div class="form-group">
                <label for="recipient-name" class="col-form-label">Description:</label>
                <input type="text" class="form-control"  id="recipient-name">
              </div>
              <div class="form-group">
                <label for="message-text" class="col-form-label">Geolocalisation:</label>
                <textarea class="form-control" id="message-text"></textarea>
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




<style>
.buttonSites{
border: none;
background-color: white;

}


</style>


<script>


export default {
  name: "sitesTable"
  
};
</script>
