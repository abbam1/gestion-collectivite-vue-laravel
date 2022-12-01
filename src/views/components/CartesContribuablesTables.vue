<template>
    <div class="main-content">
    <div class="alert alert-secondary1 mx-4" role="alert">
        <span class="text-white"><strong>Bienvenue sur l'espace de gestion des ventes, vous pouvez</strong>
            <strong> verifier l'historique des ventes de cartes contribuables</strong>
            </span>
    </div>

    <div class="row">
        <div class="col-12">
            <div class="card mb-4 mx-4">
                <div class="card-header pb-0">
                    <div class="d-flex flex-row justify-content-between">
                        <div>
                            <h5 class="mb-0">Tous les ventes</h5>
                        </div>
                        <a href="#" class="btn bg-gradient-primary btn-sm mb-0" type="button">+&nbsp; Ajouter un site</a>
                    </div>
                </div>
                <div class="card-body px-0 pt-0 pb-2">
                    <div class="table-responsive p-0">
                        <table class="table align-items-center mb-0">
                            <thead>
                                <tr>
                                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                    N°carte
                                    </th>
                                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                    Contribuable
                                    </th>
                                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                    N°TéL TreMo
                                    </th>
                                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                    Statut
                                    </th>
                                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="ps-4">
                                        <p class="text-xs font-weight-bold mb-0">OCC22000000010</p>
                                    </td>
                                    <td class="text-center">
                                        <p class="text-xs font-weight-bold mb-0">AYE AYE JEAN</p>
                                    </td>
                                    <td class="text-center">
                                        <span class="text-xs font-weight-bold mb-0">0709813582</span>
                                    </td>
                                    <td class="text-center">
                                        <p class="text-xs font-weight-bold mb-0">ACTIF</p>
                                    </td>
                                    <td class="text-center">
                                        <a href="#" class="mx-3" data-bs-toggle="tooltip"
                                            data-bs-original-title="Edit user">
                                            <i class="fas fa-user-edit text-secondary"></i>
                                        </a>
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
     name: "cartesContribuablesTables"
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
   