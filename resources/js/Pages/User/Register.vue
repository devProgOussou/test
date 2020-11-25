<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-10 offset-1 mt-5">
          <form @submit.prevent="handleSubmit">
            <div class="form-group">
              <file-input v-model="form.avatar" label="avatar" />
            </div>
            <div class="form-group">
              <label for="type">Type de compte</label>
              <select
                v-model="form.type"
                class="custom-select"
                label="Catégorie"
              >
                <option value="p">Personnel</option>
                <option value="C">Entreprise</option>
              </select>
            </div>
            <div class="form-group">
              <label for="lastName">nom : </label>
              <input
                type="text"
                class="form-control"
                placeholder="Votre nom"
                v-model="form.lastName"
              />
            </div>
            <div class="form-group">
              <label for="prenom">Prenom : </label>
              <input
                type="text"
                class="form-control"
                placeholder="Votre prenom"
                v-model="form.firstName"
              />
            </div>
            <div class="form-group">
              <label for="prenom">Nom de l'entreprise :</label>
              <input
                type="text"
                class="form-control"
                placeholder="Nom de l'entreprise"
                v-model="form.companyName"
              />
            </div>
            <div class="form-group">
              <label for="prenom">Téléphone :</label>
              <input
                type="text"
                class="form-control"
                placeholder="Téléphone"
                v-model="form.phone"
                required
              />
            </div>
            <div class="form-group">
              <label for="address">Adresse</label>
              <input
                type="text"
                class="form-control"
                placeholder="votre adresse"
                v-model="form.address"
                required
              />
            </div>
            <button
              type="submit"
              class="btn btn-round btn-outline-primary col-md-5 offset-4"
            >
              Soumettre
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppLayout from "../../Shared/AppLayout";
import SelectInput from "../../Shared/SelectInput";
import FileInput from "../../Shared/FileInput";

export default {
  name: "Register",
  components: {
    SelectInput,
    AppLayout,
    FileInput,
  },
  data() {
    return {
      sending: false,
      form: {
        type: null,
        lastName: null,
        firstName: null,
        companyName: null,
        phone: null,
        address: null,
        avatar: null,
      },
    };
  },

  methods: {
    handleSubmit() {
      this.sending = true;
      var data = new FormData();

      data.append("type", this.form.type || "");
      data.append("lastName", this.form.lastName || "");
      data.append("firstName", this.form.firstName || "");
      data.append("companyName", this.form.companyName || "");
      data.append("phone", this.form.phone || "");
      data.append("address", this.form.address || "");
      data.append("avatar", this.form.avatar || "");

      this.$inertia.post("/userRegistering", data, {
        onSuccess: () => {
          this.sending = false;
          console.log("Send Success");
        },
      });
    },
  },
};
</script>
