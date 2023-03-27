<template>
  <div>
    <div class="main-content">
      <div class="alert alert-secondary1 mx-4" role="alert">
        <span class="text-white"
          ><strong
            >Bienvenue sur l'espace de gestion des contribuables, vous
            pouvez</strong
          >
          <strong> Ajouter, modifier ou Supprimer un contribuable</strong>
        </span>
      </div>

      <div class="row">
        <div class="col-12">
          <div class="card mb-4 mx-4">
            <div class="card-header pb-0">
              <div class="d-flex flex-row justify-content-between">
                <div>
                  <h5 class="mb-0">Tous les contribuables</h5>
                </div>
                <!-- Button trigger modal -->
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModalMessage1"
                  class="btn bg-gradient-primary btn-sm mb-0 buttonSites"
                >
                  Exporter
                </button>
                <button
                  type="button"
                  class="btn bg-gradient-primary btn-sm mb-0 buttonSites"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModalMessage"
                  @click="clearInput()"
                >
                  +&nbsp; Ajouter un contribuable
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
                      Civilité
                    </th> -->
                      <th
                        class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                      >
                        Nom
                      </th>
                      <th
                        class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                      >
                        Prénoms
                      </th>
                      <!-- <th
                      class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                    Date de naissance
                    </th>
                    <th
                      class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                    Lieu de naissance
                    </th>
                    <th
                      class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                    Matrimoniale
                    </th>
                    <th
                      class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                    Pays d'origine
                    </th>
                    <th
                      class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                    Nationalité
                    </th>
                    <th
                      class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                    Pays de résidence
                    </th>
                    <th
                      class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                    Type de pièce
                    </th>
                    <th
                      class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                    Numéro de pièce
                    </th>
                    <th
                      class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                    Validité de piece
                    </th> -->
                      <th
                        class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                      >
                        Tel no1
                      </th>
                      <!-- <th
                      class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                    Tel no2
                    </th> -->
                      <th
                        class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                      >
                        Tel_fix
                      </th>
                      <th
                        class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                      >
                        Proféssion
                      </th>
                      <!-- <th
                      class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                    Père
                    </th>
                    <th
                      class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                    Mère
                    </th> -->
                      <th
                        class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                      >
                        Email
                      </th>
                      <!-- <th
                      class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                    Code
                    </th> -->
                      <th
                        class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in items" :key="'taxe_' + item.id">
                      <!-- <td class="ps-4">
                      <p class="text-xs font-weight-bold mb-0">
                        {{ item.civilite }}
                      </p>
                    </td> -->
                      <td class="text-center">
                        <p class="text-xs font-weight-bold mb-0">
                          {{ item.nom }}
                        </p>
                      </td>
                      <td class="text-center">
                        <p class="text-xs font-weight-bold mb-0">
                          {{ item.prenoms }}
                        </p>
                      </td>
                      <!-- <td class="text-center">
                      <p class="text-xs font-weight-bold mb-0">
                        {{ item.date_naissance }}
                      </p>
                    </td>
                    <td class="text-center">
                      <p class="text-xs font-weight-bold mb-0">
                        {{ item.lieu_naissance }}
                      </p>
                    </td>
                    <td class="text-center">
                      <p class="text-xs font-weight-bold mb-0">
                        {{ item.matrimoniale }}
                      </p>
                    </td>
                    <td class="text-center">
                      <p class="text-xs font-weight-bold mb-0">
                        {{ item.pays_origine }}
                      </p>
                    </td>
                    <td class="text-center">
                      <p class="text-xs font-weight-bold mb-0">
                        {{ item.nationalite }}
                      </p>
                    </td>
                    <td class="text-center">
                      <p class="text-xs font-weight-bold mb-0">
                        {{ item.pays_residence }}
                      </p>
                    </td> -->
                      <!-- <td class="text-center">
                      <p class="text-xs font-weight-bold mb-0">
                        {{ item.type_piece }}
                      </p>
                    </td>
                    <td class="text-center">
                      <p class="text-xs font-weight-bold mb-0">
                        {{ item.num_piece }}
                      </p>
                    </td>
                    <td class="text-center">
                      <p class="text-xs font-weight-bold mb-0">
                        {{ item.validite_piece }}
                      </p>
                    </td> -->
                      <td class="text-center">
                        <p class="text-xs font-weight-bold mb-0">
                          {{ item.phone1 }}
                        </p>
                      </td>
                      <!-- <td class="text-center">
                      <p class="text-xs font-weight-bold mb-0">
                        {{ item.phone2 }}
                      </p>
                    </td> -->
                      <td class="text-center">
                        <p class="text-xs font-weight-bold mb-0">
                          {{ item.tel_fix }}
                        </p>
                      </td>
                      <td class="text-center">
                        <p class="text-xs font-weight-bold mb-0">
                          {{ item.profession }}
                        </p>
                      </td>
                      <!-- <td class="text-center">
                      <span class="text-xs font-weight-bold mb-0">
                        {{ item.pere }}
                      </span>
                    </td>
                    <td class="text-center">
                      <span class="text-xs font-weight-bold mb-0">
                        {{ item.mere }}
                      </span>
                    </td> -->
                      <td class="text-center">
                        <span class="text-xs font-weight-bold mb-0">
                          {{ item.email }}
                        </span>
                      </td>
                      <!-- <td class="text-center">
                      <span class="text-xs font-weight-bold mb-0">
                        {{ item.code }}
                      </span>
                    </td> -->
                      <td class="text-center">
                        <!-- Button Plus d'information -->
                        <!-- <a
                        type="button"
                        class="mx-3 buttonSites"
                        href='/infoscontribuable'>

                      
                      <i class="fas fa-circle-info text-secondary"></i>
                    </a> -->
                        <!-- Button Plus d'information -->

                        <!-- Button trigger modal -->
                        <button
                          type="button"
                          class="mx-3 buttonSites"
                          @click="$router.push('/contribuables/' + item.id)"
                        >
                          <i class="fas fa-circle-info text-secondary"></i>
                        </button>
                        <!-- Button trigger modal -->

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
              Modifier un Contribuable
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
            <form ref="editContribuablesForm" @submit.prevent="editForm">
              <input type="hidden" name="_method" value="put" />
              <step1 v-show="step === 1">
                <div class="d-flex justify-content-center">
                  <h2>①/⑤</h2>
                </div>
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label"
                    >Civilité:</label
                  >
                  <select class="form-control" name="civilite" id="periode">
                    <option value="">--Choississez la civilité--</option>
                    <option value="Mr">Mr</option>
                    <option value="Mdme">Mdme</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label"
                    >Nom:</label
                  >
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
                    >Date de naissance:</label
                  >
                  <input
                    type="date"
                    class="form-control"
                    name="date_naissance"
                    id="recipient-name"
                  />
                </div>
              </step1>
              <!--end step1-->
              <step2 v-show="step === 2">
                <div class="d-flex justify-content-center">
                  <h2>②/⑤</h2>
                </div>
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label"
                    >Lieu de Naissance:</label
                  >
                  <input
                    type="text"
                    name="lieu_naissance"
                    class="form-control"
                    id="recipient-name"
                  />
                </div>
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label"
                    >Situation matrimoniale:</label
                  >
                  <select name="matrimoniale" class="form-control">
                    <option value="" selected>Choississez votre statut</option>
                    <option value="Célibataire">Célibataire</option>
                    <option value="Marié">Marié</option>
                    <option value="divorce">divorce</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="message-text" class="col-form-label"
                    >Pays d'origine:</label
                  >
                  <select class="form-control" name="pays_origine">
                    <option>pays</option>
                    <option :value="country"
                    v-for="country in countries"
                    :key="country"
                    >{{country}}</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label"
                    >Nationalité:</label
                  >
                  <input
                    type="text"
                    name="nationalite"
                    class="form-control"
                    id="recipient-name"
                  />
                </div>
              </step2>
              <!--end step2-->
              <step3 v-show="step === 3">
                <div class="d-flex justify-content-center">
                  <h2>③/⑤</h2>
                </div>
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label"
                    >Pays de résidence:</label
                  >
                  <select class="form-control" name="pays_residence">
                    <option>pays</option>
                    <option :value="country"
                    v-for="country in countries"
                    :key="country"
                    >{{country}}</option>
                  </select>

          
                </div>
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label"
                    >Type de pièce:</label
                  >
                  <select name="type_piece" class="form-control">
                    <option value="" selected>Choississez votre pièce</option>
                    <option value="cni">CNI</option>
                    <option value="passeport">Passeport</option>
                    <option value="attestation identité">
                      Attestation d'identité
                    </option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label"
                    >Numéro de pièce:</label
                  >
                  <input
                    type="text"
                    name="num_piece"
                    class="form-control"
                    id="recipient-name"
                  />
                </div>
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label"
                    >Validité de la piece:</label
                  >
                  <input
                    type="date"
                    name="validite_piece"
                    class="form-control"
                    id="recipient-name"
                  />
                </div>
              </step3>
              <!--end step3-->
              <step4 v-show="step === 4">
                <div class="d-flex justify-content-center">
                  <h2>④/⑤</h2>
                </div>
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label"
                    >Tel no1:</label
                  >
                  <input
                    type="text"
                    name="phone1"
                    class="form-control"
                    id="recipient-name"
                  />
                </div>
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label"
                    >Tel no2:</label
                  >
                  <input
                    type="text"
                    name="phone2"
                    class="form-control"
                    id="recipient-name"
                  />
                </div>
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label"
                    >Tel fix:</label
                  >
                  <input
                    type="text"
                    name="tel_fix"
                    class="form-control"
                    id="recipient-name"
                  />
                </div>
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label"
                    >Proféssion:</label
                  >
                  <input
                    type="text"
                    name="profession"
                    class="form-control"
                    id="recipient-name"
                  />
                </div>
              </step4>
              <!--end step4-->
              <step5 v-show="step === 5">
                <div class="d-flex justify-content-center">
                  <h2>⑤/⑤</h2>
                </div>
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label"
                    >Père:</label
                  >
                  <input
                    type="text"
                    name="pere"
                    class="form-control"
                    id="recipient-name"
                  />
                </div>
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label"
                    >Mère:</label
                  >
                  <input
                    type="text"
                    name="mere"
                    class="form-control"
                    id="recipient-name"
                  />
                </div>
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label"
                    >Email:</label
                  >
                  <input
                    type="email"
                    name="email"
                    class="form-control"
                    id="recipient-name"
                  />
                </div>
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label"
                    >Code:</label
                  >
                  <input
                    type="text"
                    name="code"
                    class="form-control"
                    id="recipient-name"
                  />
                </div>
              </step5>
              <!--end step5-->
              <div class="modal-footer">
                <button
                  type="button"
                  ref="modalDismiss"
                  class="btn bg-gradient-secondary"
                  data-bs-dismiss="modal"
                >
                  Fermer
                </button>
                <button
                  class="btn bg-gradient-primary"
                  v-if="step > 1"
                  @click.prevent="step--"
                >
                  Précédent
                </button>
                <button
                  class="btn bg-gradient-primary"
                  v-if="step < 5"
                  @click.prevent="step++"
                >
                  Suivant
                </button>
                <button
                  type="submit"
                  class="btn bg-gradient-primary"
                  v-if="step === 5"
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
              Supprimer une taxe
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
              Êtes-vous sûr de vouloir supprimer cette taxe?
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
              Ajouter un Contribuable
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
            <form ref="addContribuablesForm" @submit.prevent="addForm">
              <!--step1-->
              <step1 v-show="step === 1">
                <div class="d-flex justify-content-center">
                  <h2>①/⑤</h2>
                </div>
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label"
                    >Civilité:</label
                  >
                  <select
                    v-model="formData.civilite"
                    class="form-control"
                    name="civilite"
                    id="periode"
                  >
                    <option value="">--Choississez la civilité--</option>
                    <option value="Mr">Mr</option>
                    <option value="Mdme">Mdme</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label"
                    >Nom:</label
                  >
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
                    >Prénoms:</label
                  >
                  <input
                    type="text"
                    v-model="formData.prenoms"
                    class="form-control"
                    name="prenoms"
                    id="recipient-name"
                  />
                </div>
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label"
                    >Date de naissance:</label
                  >
                  <input
                    type="date"
                    v-model="formData.date_naissance"
                    class="form-control"
                    name="date_naissance"
                    id="recipient-name"
                  />
                </div>
              </step1>
              <!--end step1-->
              <step2 v-show="step === 2">
                <div class="d-flex justify-content-center">
                  <h2>②/⑤</h2>
                </div>
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label"
                    >Lieu de Naissance:</label
                  >
                  <input
                    type="text"
                    name="lieu_naissance"
                    class="form-control"
                    v-model="formData.lieu_naissance"
                    id="recipient-name"
                  />
                </div>
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label"
                    >Situation matrimoniale:</label
                  >
                  <select
                    name="matrimoniale"
                    class="form-control"
                    v-model="formData.matrimoniale"
                  >
                    <option value="" selected>Choississez votre statut</option>
                    <option value="celibataire">Célibataire</option>
                    <option value="marié(e)">Marié(e)</option>
                    <option value="veuve_veuf">Veuve/veuf</option>
                    <option value="divorcé(e)">Divorcé(e)</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="message-text" class="col-form-label"
                    >Pays d'origine:</label
                  >
                  
                  <select class="form-control"
                    v-model="formData.pays_origine"
                    name="pays_origine">
                    <option selected>pays</option>
                    <option :value="country"
                    v-for="country in countries"
                    :key="country"
                    >{{country}}</option>
                  </select>
                    </div>
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label"
                    >Nationalité:</label
                  >
                  <input
                    type="text"
                    name="nationalite"
                    class="form-control"
                    v-model="formData.nationalite"
                    id="recipient-name"
                  />
                </div>
              </step2>
              <!--end step2-->

              <step3 v-show="step === 3">
                <div class="d-flex justify-content-center">
                  <h2>③/⑤</h2>
                </div>
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label"
                    >Pays de résidence:</label
                  >
                  <select class="form-control"
                  v-model="formData.pays_residence"
                    name="pays_residence">
                    <option selected>pays</option>
                    <option :value="country"
                    v-for="country in countries"
                    :key="country"
                    >{{country}}</option>
                  </select>
    
                </div>
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label"
                    >Type de pièce:</label
                  >
                  <select
                    name="type_piece"
                    class="form-control"
                    v-model="formData.type_piece"
                  >
                    <option value="" selected>Choississez votre pièce</option>
                    <option value="cni">CNI</option>
                    <option value="passeport">Passeport</option>
                    <option value="attestation identité">
                      Attestation d'identité
                    </option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label"
                    >Numéro de pièce:</label
                  >
                  <input
                    type="text"
                    name="num_piece"
                    class="form-control"
                    v-model="formData.num_piece"
                    id="recipient-name"
                  />
                </div>
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label"
                    >Validité de la piece:</label
                  >
                  <input
                    type="date"
                    name="validite_piece"
                    class="form-control"
                    v-model="formData.validite_piece"
                    id="recipient-name"
                  />
                </div>
              </step3>
              <!--end step3-->
              <step4 v-show="step === 4">
                <div class="d-flex justify-content-center">
                  <h2>④/⑤</h2>
                </div>

                <div class="form-group">
                  <label for="recipient-name" class="col-form-label"
                    >Tel no1:</label
                  >
                  <input
                    type="text"
                    name="phone1"
                    class="form-control"
                    v-model="formData.phone1"
                    id="recipient-name"
                  />
                </div>
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label"
                    >Tel no2:</label
                  >
                  <input
                    type="text"
                    name="phone2"
                    class="form-control"
                    v-model="formData.phone2"
                    id="recipient-name"
                  />
                </div>
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label"
                    >Tel fix:</label
                  >
                  <input
                    type="text"
                    name="tel_fix"
                    class="form-control"
                    v-model="formData.tel_fix"
                    id="recipient-name"
                  />
                </div>
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label"
                    >Proféssion:</label
                  >
                  <input
                    type="text"
                    name="profession"
                    class="form-control"
                    v-model="formData.profession"
                    id="recipient-name"
                  />
                </div>
              </step4>
              <!--end step4-->
              <step5 v-show="step === 5">
                <div class="d-flex justify-content-center">
                  <h2>⑤/⑤</h2>
                </div>

                <div class="form-group">
                  <label for="recipient-name" class="col-form-label"
                    >Père:</label
                  >
                  <input
                    type="text"
                    name="pere"
                    class="form-control"
                    v-model="formData.pere"
                    id="recipient-name"
                  />
                </div>
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label"
                    >Mère:</label
                  >
                  <input
                    type="text"
                    name="mere"
                    class="form-control"
                    v-model="formData.mere"
                    id="recipient-name"
                  />
                </div>
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label"
                    >Email:</label
                  >
                  <input
                    type="email"
                    name="email"
                    class="form-control"
                    v-model="formData.email"
                    id="recipient-name"
                  />
                </div>
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label"
                    >Code:</label
                  >
                  <input
                    type="text"
                    name="code"
                    class="form-control"
                    v-model="formData.code"
                    id="recipient-name"
                  />
                </div>
              </step5>
              <div class="modal-footer">
                <button
                  type="button"
                  ref="modalDismiss"
                  class="btn bg-gradient-secondary"
                  data-bs-dismiss="modal"
                >
                  Fermer
                </button>
                <button
                  class="btn bg-gradient-primary"
                  v-if="step > 1"
                  @click.prevent="step--"
                >
                  Précédent
                </button>
                <button
                  class="btn bg-gradient-primary"
                  v-if="step < 5"
                  @click.prevent="step++"
                >
                  Suivant
                </button>
                <button
                  type="submit"
                  class="btn bg-gradient-primary"
                  v-if="step === 5"
                >
                  Ajouter
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!--Modal pour ajouter-->

    <!--Modal pour import-->
    <div
      class="modal fade"
      id="exampleModalMessage1"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalMessageTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Veuillez Sélectionner le type de fichier
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
          <div class="modal-body row d-flex justify-content-space-between">
            <button
              type="button"
              class="btn bg-gradient-secondary"
              data-bs-dismiss="modal"
              v-on:click="getExportCsv"
            >
              CSV
            </button>
            <button
              class="btn bg-gradient-primary"
              data-bs-dismiss="modal"
              v-on:click="getExportXlsx"
            >
              EXCEL
            </button>
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
import countries from "@/data/countries.js"

export default {
  name: "contribuablesTable",

  components: {},
  data() {
    return {
      url: "/contribuables",
      showAlertSuccess: false,
      idToEdit: null,
      items: [],
      formData: {},
      step: 1,
      countries : countries
    };
  },
  methods: {
    addForm() {
      let formData = new FormData(this.$refs.addContribuablesForm);

      this.$axios
        .post("/contribuables", formData)
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
              title: "Contribuable enregistré avec success",
              showConfirmButton: false,
              timer: 2000,
            })
          ) {
            setTimeout(function () {
              location.reload();
            }, 2000);
          }
          this.formData.civilite = " ";
          this.formData.nom = " ";
          this.formData.prenoms = " ";
          this.formData.date_naissance = " ";
          this.formData.lieu_naissance = " ";
          this.formData.matrimoniale = " ";
          this.formData.pays_origine = " ";
          this.formData.nationalite = " ";
          this.formData.pays_residence = " ";
          this.formData.type_piece = " ";
          this.formData.num_piece = " ";
          this.formData.validite_piece = " ";
          this.formData.phone1 = " ";
          this.formData.phone2 = " ";
          this.formData.tel_fix = " ";
          this.formData.profession = " ";
          this.formData.pere = " ";
          this.formData.mere = " ";
          this.formData.email = " ";
          this.formData.code = " ";
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
      if (item) {
        $("select[name=civilite]").val(item.civilite);
        $("input[name=nom]").val(item.nom);
        $("input[name=prenoms]").val(item.prenoms);
        $("input[name=date_naissance]").val(item.date_naissance);
        $("input[name=lieu_naissance]").val(item.lieu_naissance);
        $("select[name=matrimoniale]").val(item.matrimoniale);
        $("select[name=pays_origine]").val(item.pays_origine);
        $("input[name=nationalite]").val(item.nationalite);
        $("select[name=pays_residence]").val(item.pays_residence);
        $("select[name=type_piece]").val(item.type_piece);
        $("input[name=num_piece]").val(item.num_piece);
        $("input[name=validite_piece]").val(item.validite_piece);
        $("input[name=phone1]").val(item.phone1);
        $("input[name=phone2]").val(item.phone2);
        $("input[name=tel_fix]").val(item.tel_fix);
        $("input[name=profession]").val(item.profession);
        $("input[name=pere]").val(item.pere);
        $("input[name=mere]").val(item.mere);
        $("input[name=email]").val(item.email);
        $("input[name=code]").val(item.code);
      }
    },
    clearInput() {
      $("select[name=civilite]").val("");
      $("input[name=nom]").val("");
      $("input[name=prenoms]").val("");
      $("input[name=date_naissance]").val("");
      $("input[name=lieu_naissance]").val("");
      $("select[name=matrimoniale]").val("");
      $("select[name=pays_origine]").val("");
      $("input[name=nationalite]").val("");
      $("select[name=pays_residence]").val("");
      $("select[name=type_piece]").val("");
      $("input[name=num_piece]").val("");
      $("input[name=validite_piece]").val("");
      $("input[name=phone1]").val("");
      $("input[name=phone2]").val("");
      $("input[name=tel_fix]").val("");
      $("input[name=profession]").val("");
      $("input[name=pere]").val("");
      $("input[name=mere]").val("");
      $("input[name=email]").val("");
      $("input[name=code]").val("");
    },
    editForm() {
      let formData = new FormData(this.$refs.editContribuablesForm);

      this.$axios
        .post("/contribuables/" + this.idToEdit, formData)
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
            title: "Contribuable modifié avec success",
            showConfirmButton: false,
            timer: 2000,
          });
          //Fermer le modal
          // alert("OKy")
          this.formData.civilite = " ";
          this.formData.nom = " ";
          this.formData.prenoms = " ";
          this.formData.date_naissance = " ";
          this.formData.lieu_naissance = " ";
          this.formData.matrimoniale = " ";
          this.formData.pays_origine = " ";
          this.formData.nationalite = " ";
          this.formData.pays_residence = " ";
          this.formData.type_piece = " ";
          this.formData.num_piece = " ";
          this.formData.validite_piece = " ";
          this.formData.phone1 = " ";
          this.formData.phone2 = " ";
          this.formData.tel_fix = " ";
          this.formData.profession = " ";
          this.formData.pere = " ";
          this.formData.mere = " ";
          this.formData.email = " ";
          this.formData.code = " ";
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
      // let formData = new FormData(this.$refs.editCommuneForm);

      this.$axios
        .delete("/contribuables/" + this.idToEdit)
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
              title: "Contribuables supprimé avec success",
              showConfirmButton: false,
              timer: 2000,
            })
          ) {
            setTimeout(function () {
              location.reload();
            }, 2000);
          } //Fermer le modal
          // alert("OKy")
        })
        .catch((err) => {
          console.log(err);
        });
    },

    async getData() {
      Swal.fire({
        title: 'Chargement de la table!',
        html: 'Veuillez  patientez.',
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading()
        },
      })
      this.$axios
        .get("/contribuables")
        .then((res) => {
          this.items = res.data.data;
          Swal.close();
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
    // Recupération de l'importation
    getExportCsv() {
      this.$axios
        .get("/contribuables/export?format=csv", { responseType: "blob" })
        .then((res) => {
          let listExport = res.data;
          let fileDownload = require("js-file-download");
          fileDownload(listExport, "filename.csv");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // Recupération de l'importation

    // Recupération de l'importation1
    getExportXlsx() {
      this.$axios
        .get("/contribuables/export?format=xlsx", { responseType: "blob" })
        .then((res) => {
          let listExport = res.data;
          let fileDownload = require("js-file-download");
          fileDownload(listExport, "filename.xlsx");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // Recupération de l'importation1
  },

  created() {
    this.getData();
  },
};
</script>
