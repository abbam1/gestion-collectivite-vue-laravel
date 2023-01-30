<template>
  <div>
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
            <h5 class="mb-1">{{ item.nom }} {{ item.prenoms }}</h5>
            <p class="mb-0 text-sm font-weight-bold">{{ item.profession }}</p>
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
                        data-bs-target="#exampleModal5"
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
    <div class="mt-3 row">
      <div class="mt-4 col-12 col-md-6 col-xl-4 mt-md-0">
        <div class="p-3 card h-100">
            <h6 class="mb-3">Infos Personnelles</h6>
          <!-- <h6 class="text-xs text-uppercase text-body font-weight-bolder">
            Contribuable
          </h6> -->
          <ul class="list-group">
            <li class="pt-0 text-sm border-0 list-group-item ps-0">
              <strong class="text-dark">Nom:</strong> &nbsp;
              {{ item.nom }}
            </li>
            <li class="text-sm border-0 list-group-item ps-0">
              <strong class="text-dark">Prénoms:</strong> &nbsp; {{ item.prenoms }}
            </li>
            <li class="text-sm border-0 list-group-item ps-0">
              <strong class="text-dark">Proféssion:</strong> &nbsp;
              {{ item.profession }}
            </li>
            <li class="text-sm border-0 list-group-item ps-0">
              <strong class="text-dark">Date de naissance:</strong> &nbsp; {{ item.date_naissance }}
            </li>
            <li class="text-sm border-0 list-group-item ps-0">
              <strong class="text-dark">Lieu de naissance:</strong> &nbsp;
              {{ item.lieu_naissance }}
            </li>
            <li class="text-sm border-0 list-group-item ps-0">
              <strong class="text-dark">Pays d'origine:</strong> &nbsp;
              {{ item.pays_origine }}
            </li>
            <li class="text-sm border-0 list-group-item ps-0">
              <strong class="text-dark">Nationalité:</strong> &nbsp;
              {{ item.nationalite }}
            </li>
            <li class="text-sm border-0 list-group-item ps-0">
              <strong class="text-dark">Situation matrimoniale:</strong> &nbsp;
              {{ item.matrimoniale }}
            </li>
          </ul>
        </div>
      </div>
      <div class="mt-4 col-12 col-md-6 col-xl-4 mt-md-0">
        <div class="p-3 card h-100">
            <h6 class="mb-3">Identification</h6>
          <!-- <h6 class="text-xs text-uppercase text-body font-weight-bolder">
            Contribuable
          </h6> -->
          <ul class="list-group">
            <li class="text-sm border border-3 list-group-item ps-0">
              <strong class="text-dark ">Code Contribuable:</strong> &nbsp;
              {{ item.code }}
            </li>
            <li class="pt-0 text-sm border-0 list-group-item ps-0">
              <strong class="text-dark">Civilité:</strong> &nbsp;
              {{ item.civilite }}
            </li>
            <li class="text-sm border-0 list-group-item ps-0">
              <strong class="text-dark">Nom du Père:</strong> &nbsp; {{ item.pere }}
            </li>
            <li class="text-sm border-0 list-group-item ps-0">
              <strong class="text-dark">Nom de la mère:</strong> &nbsp; {{ item.mere }}
            </li>
            <li class="text-sm border-0 list-group-item ps-0">
              <strong class="text-dark">Type de pièce:</strong> &nbsp;
              {{ item.type_piece }}
            </li>
            <li class="text-sm border-0 list-group-item ps-0">
              <strong class="text-dark">Numéro de la pièce:</strong> &nbsp;
              {{ item.num_piece }}
            </li>
            <li class="text-sm border-0 list-group-item ps-0">
              <strong class="text-dark">Validité de la pièce:</strong> &nbsp;
              {{ item.validite_piece }}
            </li>
           
          </ul>
        </div>
      </div>
      <div class="mt-4 col-12 col-md-6 col-xl-4 mt-md-0">
        <div class="p-3 card h-100">
            <h6 class="mb-3">Contact</h6>
          <!-- <h6 class="text-xs text-uppercase text-body font-weight-bolder">
            Contribuable
          </h6> -->
          <ul class="list-group">
            <li class="pt-0 text-sm border-0 list-group-item ps-0">
              <strong class="text-dark">Tel no1:</strong> &nbsp;
              {{ item.phone1 }}
            </li>
            <li class="text-sm border-0 list-group-item ps-0">
              <strong class="text-dark">Tel no2:</strong> &nbsp; {{ item.phone2 }}
            </li>
            <li class="text-sm border-0 list-group-item ps-0">
              <strong class="text-dark">Tel fix:</strong> &nbsp; {{ item.tel_fix }}
            </li>
            <li class="text-sm border-0 list-group-item ps-0">
              <strong class="text-dark">Email:</strong> &nbsp;
              {{ item.email }}
            </li>
            <li class="text-sm border-0 list-group-item ps-0">
              <strong class="text-dark">Pays de résidence:</strong> &nbsp;
              {{ item.pays_residence }}
            </li>
          </ul>
        </div>
      </div>
    </div>
<br>
<br>
    <!-- New lines -->
    <StructuresTable :id_contribuable="id"/>
  </div>

    <!-- Modal pour modifier -->
    <div
    class="modal fade"
    id="exampleModal5"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modifier un Contribuable</h5>
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
            <div class="form-group">
              <label for="recipient-name" class="col-form-label">Civilité:</label>
              <select
               
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
              <select
                name="matrimoniale"
                class="form-control"
               
              >
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
              <select
                class="form-control"
               
                
                name="pays_origine"
              >
              <option>pays</option>
    <option value="Afghanistan">Afghanistan</option>
    <option value="Aland Islands">Åland Islands</option>
    <option value="Albania">Albania</option>
    <option value="Algeria">Algeria</option>
    <option value="American Samoa">American Samoa</option>
    <option value="Andorra">Andorra</option>
    <option value="Angola">Angola</option>
    <option value="Anguilla">Anguilla</option>
    <option value="Antarctica">Antarctica</option>
    <option value="Antigua and Barbuda">Antigua & Barbuda</option>
    <option value="Argentina">Argentina</option>
    <option value="Armenia">Armenia</option>
    <option value="Aruba">Aruba</option>
    <option value="Australia">Australia</option>
    <option value="Austria">Austria</option>
    <option value="Azerbaijan">Azerbaijan</option>
    <option value="Bahamas">Bahamas</option>
    <option value="Bahrain">Bahrain</option>
    <option value="Bangladesh">Bangladesh</option>
    <option value="Barbados">Barbados</option>
    <option value="Belarus">Belarus</option>
    <option value="Belgium">Belgium</option>
    <option value="Belize">Belize</option>
    <option value="Benin">Benin</option>
    <option value="Bermuda">Bermuda</option>
    <option value="Bhutan">Bhutan</option>
    <option value="Bolivia">Bolivia</option>
    <option value="Bonaire, Sint Eustatius and Saba">Caribbean Netherlands</option>
    <option value="Bosnia and Herzegovina">Bosnia & Herzegovina</option>
    <option value="Botswana">Botswana</option>
    <option value="Bouvet Island">Bouvet Island</option>
    <option value="Brazil">Brazil</option>
    <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
    <option value="Brunei Darussalam">Brunei</option>
    <option value="Bulgaria">Bulgaria</option>
    <option value="Burkina Faso">Burkina Faso</option>
    <option value="Burundi">Burundi</option>
    <option value="Cambodia">Cambodia</option>
    <option value="Cameroon">Cameroon</option>
    <option value="Canada">Canada</option>
    <option value="Cape Verde">Cape Verde</option>
    <option value="Cayman Islands">Cayman Islands</option>
    <option value="Central African Republic">Central African Republic</option>
    <option value="Chad">Chad</option>
    <option value="Chile">Chile</option>
    <option value="China">China</option>
    <option value="Christmas Island">Christmas Island</option>
    <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
    <option value="Colombia">Colombia</option>
    <option value="Comoros">Comoros</option>
    <option value="Congo">Congo - Brazzaville</option>
    <option value="Congo, Democratic Republic of the Congo">Congo - Kinshasa</option>
    <option value="Cook Islands">Cook Islands</option>
    <option value="Costa Rica">Costa Rica</option>
    <option value="Cote D'Ivoire">Côte d’Ivoire</option>
    <option value="Croatia">Croatia</option>
    <option value="Cuba">Cuba</option>
    <option value="Curacao">Curaçao</option>
    <option value="Cyprus">Cyprus</option>
    <option value="Czech Republic">Czechia</option>
    <option value="Denmark">Denmark</option>
    <option value="Djibouti">Djibouti</option>
    <option value="Dominica">Dominica</option>
    <option value="Dominican Republic">Dominican Republic</option>
    <option value="Ecuador">Ecuador</option>
    <option value="Egypt">Egypt</option>
    <option value="El Salvador">El Salvador</option>
    <option value="Equatorial Guinea">Equatorial Guinea</option>
    <option value="Eritrea">Eritrea</option>
    <option value="Estonia">Estonia</option>
    <option value="Ethiopia">Ethiopia</option>
    <option value="Falkland Islands (Malvinas)">Falkland Islands (Islas Malvinas)</option>
    <option value="Faroe Islands">Faroe Islands</option>
    <option value="Fiji">Fiji</option>
    <option value="Finland">Finland</option>
    <option value="France">France</option>
    <option value="French Guiana">French Guiana</option>
    <option value="French Polynesia">French Polynesia</option>
    <option value="French Southern Territories">French Southern Territories</option>
    <option value="Gabon">Gabon</option>
    <option value="Gambia">Gambia</option>
    <option value="Georgia">Georgia</option>
    <option value="Germany">Germany</option>
    <option value="Ghana">Ghana</option>
    <option value="Gibraltar">Gibraltar</option>
    <option value="Greece">Greece</option>
    <option value="Greenland">Greenland</option>
    <option value="Grenada">Grenada</option>
    <option value="Guadeloupe">Guadeloupe</option>
    <option value="Guam">Guam</option>
    <option value="Guatemala">Guatemala</option>
    <option value="Guernsey">Guernsey</option>
    <option value="Guinea">Guinea</option>
    <option value="Guinea-Bissau">Guinea-Bissau</option>
    <option value="Guyana">Guyana</option>
    <option value="Haiti">Haiti</option>
    <option value="Heard Island and Mcdonald Islands">Heard & McDonald Islands</option>
    <option value="Holy See (Vatican City State)">Vatican City</option>
    <option value="Honduras">Honduras</option>
    <option value="Hong Kong">Hong Kong</option>
    <option value="Hungary">Hungary</option>
    <option value="Iceland">Iceland</option>
    <option value="India">India</option>
    <option value="Indonesia">Indonesia</option>
    <option value="Iran, Islamic Republic of">Iran</option>
    <option value="Iraq">Iraq</option>
    <option value="Ireland">Ireland</option>
    <option value="Isle of Man">Isle of Man</option>
    <option value="Israel">Israel</option>
    <option value="Italy">Italy</option>
    <option value="Jamaica">Jamaica</option>
    <option value="Japan">Japan</option>
    <option value="Jersey">Jersey</option>
    <option value="Jordan">Jordan</option>
    <option value="Kazakhstan">Kazakhstan</option>
    <option value="Kenya">Kenya</option>
    <option value="Kiribati">Kiribati</option>
    <option value="Korea, Democratic People's Republic of">North Korea</option>
    <option value="Korea, Republic of">South Korea</option>
    <option value="Kosovo">Kosovo</option>
    <option value="Kuwait">Kuwait</option>
    <option value="Kyrgyzstan">Kyrgyzstan</option>
    <option value="Lao People's Democratic Republic">Laos</option>
    <option value="Latvia">Latvia</option>
    <option value="Lebanon">Lebanon</option>
    <option value="Lesotho">Lesotho</option>
    <option value="Liberia">Liberia</option>
    <option value="Libyan Arab Jamahiriya">Libya</option>
    <option value="Liechtenstein">Liechtenstein</option>
    <option value="Lithuania">Lithuania</option>
    <option value="Luxembourg">Luxembourg</option>
    <option value="Macao">Macao</option>
    <option value="Macedonia, the Former Yugoslav Republic of">North Macedonia</option>
    <option value="Madagascar">Madagascar</option>
    <option value="Malawi">Malawi</option>
    <option value="Malaysia">Malaysia</option>
    <option value="Maldives">Maldives</option>
    <option value="Mali">Mali</option>
    <option value="Malta">Malta</option>
    <option value="Marshall Islands">Marshall Islands</option>
    <option value="Martinique">Martinique</option>
    <option value="Mauritania">Mauritania</option>
    <option value="Mauritius">Mauritius</option>
    <option value="Mayotte">Mayotte</option>
    <option value="Mexico">Mexico</option>
    <option value="Micronesia, Federated States of">Micronesia</option>
    <option value="Moldova, Republic of">Moldova</option>
    <option value="Monaco">Monaco</option>
    <option value="Mongolia">Mongolia</option>
    <option value="Montenegro">Montenegro</option>
    <option value="Montserrat">Montserrat</option>
    <option value="Morocco">Morocco</option>
    <option value="Mozambique">Mozambique</option>
    <option value="Myanmar">Myanmar (Burma)</option>
    <option value="Namibia">Namibia</option>
    <option value="Nauru">Nauru</option>
    <option value="Nepal">Nepal</option>
    <option value="Netherlands">Netherlands</option>
    <option value="Netherlands Antilles">Curaçao</option>
    <option value="New Caledonia">New Caledonia</option>
    <option value="New Zealand">New Zealand</option>
    <option value="Nicaragua">Nicaragua</option>
    <option value="Niger">Niger</option>
    <option value="Nigeria">Nigeria</option>
    <option value="Niue">Niue</option>
    <option value="Norfolk Island">Norfolk Island</option>
    <option value="Northern Mariana Islands">Northern Mariana Islands</option>
    <option value="Norway">Norway</option>
    <option value="Oman">Oman</option>
    <option value="Pakistan">Pakistan</option>
    <option value="Palau">Palau</option>
    <option value="Palestinian Territory, Occupied">Palestine</option>
    <option value="Panama">Panama</option>
    <option value="Papua New Guinea">Papua New Guinea</option>
    <option value="Paraguay">Paraguay</option>
    <option value="Peru">Peru</option>
    <option value="Philippines">Philippines</option>
    <option value="Pitcairn">Pitcairn Islands</option>
    <option value="Poland">Poland</option>
    <option value="Portugal">Portugal</option>
    <option value="Puerto Rico">Puerto Rico</option>
    <option value="Qatar">Qatar</option>
    <option value="Reunion">Réunion</option>
    <option value="Romania">Romania</option>
    <option value="Russian Federation">Russia</option>
    <option value="Rwanda">Rwanda</option>
    <option value="Saint Barthelemy">St. Barthélemy</option>
    <option value="Saint Helena">St. Helena</option>
    <option value="Saint Kitts and Nevis">St. Kitts & Nevis</option>
    <option value="Saint Lucia">St. Lucia</option>
    <option value="Saint Martin">St. Martin</option>
    <option value="Saint Pierre and Miquelon">St. Pierre & Miquelon</option>
    <option value="Saint Vincent and the Grenadines">St. Vincent & Grenadines</option>
    <option value="Samoa">Samoa</option>
    <option value="San Marino">San Marino</option>
    <option value="Sao Tome and Principe">São Tomé & Príncipe</option>
    <option value="Saudi Arabia">Saudi Arabia</option>
    <option value="Senegal">Senegal</option>
    <option value="Serbia">Serbia</option>
    <option value="Serbia and Montenegro">Serbia</option>
    <option value="Seychelles">Seychelles</option>
    <option value="Sierra Leone">Sierra Leone</option>
    <option value="Singapore">Singapore</option>
    <option value="Sint Maarten">Sint Maarten</option>
    <option value="Slovakia">Slovakia</option>
    <option value="Slovenia">Slovenia</option>
    <option value="Solomon Islands">Solomon Islands</option>
    <option value="Somalia">Somalia</option>
    <option value="South Africa">South Africa</option>
    <option value="South Georgia and the South Sandwich Islands">South Georgia & South Sandwich Islands</option>
    <option value="South Sudan">South Sudan</option>
    <option value="Spain">Spain</option>
    <option value="Sri Lanka">Sri Lanka</option>
    <option value="Sudan">Sudan</option>
    <option value="Suriname">Suriname</option>
    <option value="Svalbard and Jan Mayen">Svalbard & Jan Mayen</option>
    <option value="Swaziland">Eswatini</option>
    <option value="Sweden">Sweden</option>
    <option value="Switzerland">Switzerland</option>
    <option value="Syrian Arab Republic">Syria</option>
    <option value="Taiwan, Province of China">Taiwan</option>
    <option value="Tajikistan">Tajikistan</option>
    <option value="Tanzania, United Republic of">Tanzania</option>
    <option value="Thailand">Thailand</option>
    <option value="Timor-Leste">Timor-Leste</option>
    <option value="Togo">Togo</option>
    <option value="Tokelau">Tokelau</option>
    <option value="Tonga">Tonga</option>
    <option value="Trinidad and Tobago">Trinidad & Tobago</option>
    <option value="Tunisia">Tunisia</option>
    <option value="Turkey">Turkey</option>
    <option value="Turkmenistan">Turkmenistan</option>
    <option value="Turks and Caicos Islands">Turks & Caicos Islands</option>
    <option value="Tuvalu">Tuvalu</option>
    <option value="Uganda">Uganda</option>
    <option value="Ukraine">Ukraine</option>
    <option value="United Arab Emirates">United Arab Emirates</option>
    <option value="United Kingdom">United Kingdom</option>
    <option value="United States">United States</option>
    <option value="United States Minor Outlying Islands">U.S. Outlying Islands</option>
    <option value="Uruguay">Uruguay</option>
    <option value="Uzbekistan">Uzbekistan</option>
    <option value="Vanuatu">Vanuatu</option>
    <option value="Venezuela">Venezuela</option>
    <option value="Viet Nam">Vietnam</option>
    <option value="Virgin Islands, British">British Virgin Islands</option>
    <option value="Virgin Islands, U.s.">U.S. Virgin Islands</option>
    <option value="Wallis and Futuna">Wallis & Futuna</option>
    <option value="Western Sahara">Western Sahara</option>
    <option value="Yemen">Yemen</option>
    <option value="Zambia">Zambia</option>
    <option value="Zimbabwe">Zimbabwe</option>
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
            <div class="form-group">
              <label for="recipient-name" class="col-form-label"
                >Pays de résidence:</label
              >
              <select
                class="form-control"
            
                
                name="pays_residence"
              >
              <option>pays</option>
    <option value="Afghanistan">Afghanistan</option>
    <option value="Aland Islands">Åland Islands</option>
    <option value="Albania">Albania</option>
    <option value="Algeria">Algeria</option>
    <option value="American Samoa">American Samoa</option>
    <option value="Andorra">Andorra</option>
    <option value="Angola">Angola</option>
    <option value="Anguilla">Anguilla</option>
    <option value="Antarctica">Antarctica</option>
    <option value="Antigua and Barbuda">Antigua & Barbuda</option>
    <option value="Argentina">Argentina</option>
    <option value="Armenia">Armenia</option>
    <option value="Aruba">Aruba</option>
    <option value="Australia">Australia</option>
    <option value="Austria">Austria</option>
    <option value="Azerbaijan">Azerbaijan</option>
    <option value="Bahamas">Bahamas</option>
    <option value="Bahrain">Bahrain</option>
    <option value="Bangladesh">Bangladesh</option>
    <option value="Barbados">Barbados</option>
    <option value="Belarus">Belarus</option>
    <option value="Belgium">Belgium</option>
    <option value="Belize">Belize</option>
    <option value="Benin">Benin</option>
    <option value="Bermuda">Bermuda</option>
    <option value="Bhutan">Bhutan</option>
    <option value="Bolivia">Bolivia</option>
    <option value="Bonaire, Sint Eustatius and Saba">Caribbean Netherlands</option>
    <option value="Bosnia and Herzegovina">Bosnia & Herzegovina</option>
    <option value="Botswana">Botswana</option>
    <option value="Bouvet Island">Bouvet Island</option>
    <option value="Brazil">Brazil</option>
    <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
    <option value="Brunei Darussalam">Brunei</option>
    <option value="Bulgaria">Bulgaria</option>
    <option value="Burkina Faso">Burkina Faso</option>
    <option value="Burundi">Burundi</option>
    <option value="Cambodia">Cambodia</option>
    <option value="Cameroon">Cameroon</option>
    <option value="Canada">Canada</option>
    <option value="Cape Verde">Cape Verde</option>
    <option value="Cayman Islands">Cayman Islands</option>
    <option value="Central African Republic">Central African Republic</option>
    <option value="Chad">Chad</option>
    <option value="Chile">Chile</option>
    <option value="China">China</option>
    <option value="Christmas Island">Christmas Island</option>
    <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
    <option value="Colombia">Colombia</option>
    <option value="Comoros">Comoros</option>
    <option value="Congo">Congo - Brazzaville</option>
    <option value="Congo, Democratic Republic of the Congo">Congo - Kinshasa</option>
    <option value="Cook Islands">Cook Islands</option>
    <option value="Costa Rica">Costa Rica</option>
    <option value="Cote D'Ivoire">Côte d’Ivoire</option>
    <option value="Croatia">Croatia</option>
    <option value="Cuba">Cuba</option>
    <option value="Curacao">Curaçao</option>
    <option value="Cyprus">Cyprus</option>
    <option value="Czech Republic">Czechia</option>
    <option value="Denmark">Denmark</option>
    <option value="Djibouti">Djibouti</option>
    <option value="Dominica">Dominica</option>
    <option value="Dominican Republic">Dominican Republic</option>
    <option value="Ecuador">Ecuador</option>
    <option value="Egypt">Egypt</option>
    <option value="El Salvador">El Salvador</option>
    <option value="Equatorial Guinea">Equatorial Guinea</option>
    <option value="Eritrea">Eritrea</option>
    <option value="Estonia">Estonia</option>
    <option value="Ethiopia">Ethiopia</option>
    <option value="Falkland Islands (Malvinas)">Falkland Islands (Islas Malvinas)</option>
    <option value="Faroe Islands">Faroe Islands</option>
    <option value="Fiji">Fiji</option>
    <option value="Finland">Finland</option>
    <option value="France">France</option>
    <option value="French Guiana">French Guiana</option>
    <option value="French Polynesia">French Polynesia</option>
    <option value="French Southern Territories">French Southern Territories</option>
    <option value="Gabon">Gabon</option>
    <option value="Gambia">Gambia</option>
    <option value="Georgia">Georgia</option>
    <option value="Germany">Germany</option>
    <option value="Ghana">Ghana</option>
    <option value="Gibraltar">Gibraltar</option>
    <option value="Greece">Greece</option>
    <option value="Greenland">Greenland</option>
    <option value="Grenada">Grenada</option>
    <option value="Guadeloupe">Guadeloupe</option>
    <option value="Guam">Guam</option>
    <option value="Guatemala">Guatemala</option>
    <option value="Guernsey">Guernsey</option>
    <option value="Guinea">Guinea</option>
    <option value="Guinea-Bissau">Guinea-Bissau</option>
    <option value="Guyana">Guyana</option>
    <option value="Haiti">Haiti</option>
    <option value="Heard Island and Mcdonald Islands">Heard & McDonald Islands</option>
    <option value="Holy See (Vatican City State)">Vatican City</option>
    <option value="Honduras">Honduras</option>
    <option value="Hong Kong">Hong Kong</option>
    <option value="Hungary">Hungary</option>
    <option value="Iceland">Iceland</option>
    <option value="India">India</option>
    <option value="Indonesia">Indonesia</option>
    <option value="Iran, Islamic Republic of">Iran</option>
    <option value="Iraq">Iraq</option>
    <option value="Ireland">Ireland</option>
    <option value="Isle of Man">Isle of Man</option>
    <option value="Israel">Israel</option>
    <option value="Italy">Italy</option>
    <option value="Jamaica">Jamaica</option>
    <option value="Japan">Japan</option>
    <option value="Jersey">Jersey</option>
    <option value="Jordan">Jordan</option>
    <option value="Kazakhstan">Kazakhstan</option>
    <option value="Kenya">Kenya</option>
    <option value="Kiribati">Kiribati</option>
    <option value="Korea, Democratic People's Republic of">North Korea</option>
    <option value="Korea, Republic of">South Korea</option>
    <option value="Kosovo">Kosovo</option>
    <option value="Kuwait">Kuwait</option>
    <option value="Kyrgyzstan">Kyrgyzstan</option>
    <option value="Lao People's Democratic Republic">Laos</option>
    <option value="Latvia">Latvia</option>
    <option value="Lebanon">Lebanon</option>
    <option value="Lesotho">Lesotho</option>
    <option value="Liberia">Liberia</option>
    <option value="Libyan Arab Jamahiriya">Libya</option>
    <option value="Liechtenstein">Liechtenstein</option>
    <option value="Lithuania">Lithuania</option>
    <option value="Luxembourg">Luxembourg</option>
    <option value="Macao">Macao</option>
    <option value="Macedonia, the Former Yugoslav Republic of">North Macedonia</option>
    <option value="Madagascar">Madagascar</option>
    <option value="Malawi">Malawi</option>
    <option value="Malaysia">Malaysia</option>
    <option value="Maldives">Maldives</option>
    <option value="Mali">Mali</option>
    <option value="Malta">Malta</option>
    <option value="Marshall Islands">Marshall Islands</option>
    <option value="Martinique">Martinique</option>
    <option value="Mauritania">Mauritania</option>
    <option value="Mauritius">Mauritius</option>
    <option value="Mayotte">Mayotte</option>
    <option value="Mexico">Mexico</option>
    <option value="Micronesia, Federated States of">Micronesia</option>
    <option value="Moldova, Republic of">Moldova</option>
    <option value="Monaco">Monaco</option>
    <option value="Mongolia">Mongolia</option>
    <option value="Montenegro">Montenegro</option>
    <option value="Montserrat">Montserrat</option>
    <option value="Morocco">Morocco</option>
    <option value="Mozambique">Mozambique</option>
    <option value="Myanmar">Myanmar (Burma)</option>
    <option value="Namibia">Namibia</option>
    <option value="Nauru">Nauru</option>
    <option value="Nepal">Nepal</option>
    <option value="Netherlands">Netherlands</option>
    <option value="Netherlands Antilles">Curaçao</option>
    <option value="New Caledonia">New Caledonia</option>
    <option value="New Zealand">New Zealand</option>
    <option value="Nicaragua">Nicaragua</option>
    <option value="Niger">Niger</option>
    <option value="Nigeria">Nigeria</option>
    <option value="Niue">Niue</option>
    <option value="Norfolk Island">Norfolk Island</option>
    <option value="Northern Mariana Islands">Northern Mariana Islands</option>
    <option value="Norway">Norway</option>
    <option value="Oman">Oman</option>
    <option value="Pakistan">Pakistan</option>
    <option value="Palau">Palau</option>
    <option value="Palestinian Territory, Occupied">Palestine</option>
    <option value="Panama">Panama</option>
    <option value="Papua New Guinea">Papua New Guinea</option>
    <option value="Paraguay">Paraguay</option>
    <option value="Peru">Peru</option>
    <option value="Philippines">Philippines</option>
    <option value="Pitcairn">Pitcairn Islands</option>
    <option value="Poland">Poland</option>
    <option value="Portugal">Portugal</option>
    <option value="Puerto Rico">Puerto Rico</option>
    <option value="Qatar">Qatar</option>
    <option value="Reunion">Réunion</option>
    <option value="Romania">Romania</option>
    <option value="Russian Federation">Russia</option>
    <option value="Rwanda">Rwanda</option>
    <option value="Saint Barthelemy">St. Barthélemy</option>
    <option value="Saint Helena">St. Helena</option>
    <option value="Saint Kitts and Nevis">St. Kitts & Nevis</option>
    <option value="Saint Lucia">St. Lucia</option>
    <option value="Saint Martin">St. Martin</option>
    <option value="Saint Pierre and Miquelon">St. Pierre & Miquelon</option>
    <option value="Saint Vincent and the Grenadines">St. Vincent & Grenadines</option>
    <option value="Samoa">Samoa</option>
    <option value="San Marino">San Marino</option>
    <option value="Sao Tome and Principe">São Tomé & Príncipe</option>
    <option value="Saudi Arabia">Saudi Arabia</option>
    <option value="Senegal">Senegal</option>
    <option value="Serbia">Serbia</option>
    <option value="Serbia and Montenegro">Serbia</option>
    <option value="Seychelles">Seychelles</option>
    <option value="Sierra Leone">Sierra Leone</option>
    <option value="Singapore">Singapore</option>
    <option value="Sint Maarten">Sint Maarten</option>
    <option value="Slovakia">Slovakia</option>
    <option value="Slovenia">Slovenia</option>
    <option value="Solomon Islands">Solomon Islands</option>
    <option value="Somalia">Somalia</option>
    <option value="South Africa">South Africa</option>
    <option value="South Georgia and the South Sandwich Islands">South Georgia & South Sandwich Islands</option>
    <option value="South Sudan">South Sudan</option>
    <option value="Spain">Spain</option>
    <option value="Sri Lanka">Sri Lanka</option>
    <option value="Sudan">Sudan</option>
    <option value="Suriname">Suriname</option>
    <option value="Svalbard and Jan Mayen">Svalbard & Jan Mayen</option>
    <option value="Swaziland">Eswatini</option>
    <option value="Sweden">Sweden</option>
    <option value="Switzerland">Switzerland</option>
    <option value="Syrian Arab Republic">Syria</option>
    <option value="Taiwan, Province of China">Taiwan</option>
    <option value="Tajikistan">Tajikistan</option>
    <option value="Tanzania, United Republic of">Tanzania</option>
    <option value="Thailand">Thailand</option>
    <option value="Timor-Leste">Timor-Leste</option>
    <option value="Togo">Togo</option>
    <option value="Tokelau">Tokelau</option>
    <option value="Tonga">Tonga</option>
    <option value="Trinidad and Tobago">Trinidad & Tobago</option>
    <option value="Tunisia">Tunisia</option>
    <option value="Turkey">Turkey</option>
    <option value="Turkmenistan">Turkmenistan</option>
    <option value="Turks and Caicos Islands">Turks & Caicos Islands</option>
    <option value="Tuvalu">Tuvalu</option>
    <option value="Uganda">Uganda</option>
    <option value="Ukraine">Ukraine</option>
    <option value="United Arab Emirates">United Arab Emirates</option>
    <option value="United Kingdom">United Kingdom</option>
    <option value="United States">United States</option>
    <option value="United States Minor Outlying Islands">U.S. Outlying Islands</option>
    <option value="Uruguay">Uruguay</option>
    <option value="Uzbekistan">Uzbekistan</option>
    <option value="Vanuatu">Vanuatu</option>
    <option value="Venezuela">Venezuela</option>
    <option value="Viet Nam">Vietnam</option>
    <option value="Virgin Islands, British">British Virgin Islands</option>
    <option value="Virgin Islands, U.s.">U.S. Virgin Islands</option>
    <option value="Wallis and Futuna">Wallis & Futuna</option>
    <option value="Western Sahara">Western Sahara</option>
    <option value="Yemen">Yemen</option>
    <option value="Zambia">Zambia</option>
    <option value="Zimbabwe">Zimbabwe</option>
            </select>
            </div>
            <div class="form-group">
              <label for="recipient-name" class="col-form-label"
                >Type de pièce:</label
              >
              <select
                name="type_piece"
                class="form-control"
               
              >
                <option value="" selected>Choississez votre pièce</option>
                <option value="cni">CNI</option>
                <option value="passeport">Passeport</option>
                <option value="attestation identité">Attestation d'identité</option>
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

</div>


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
import StructuresTable from "@/views/components/StructuresTable"

export default {
  name: "ContribuablePlus",
  components: {StructuresTable},
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
        .get("/contribuables/" + this.id)
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
