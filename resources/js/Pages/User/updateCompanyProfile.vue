<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-8 offset-2">
          <br />
          <form @submit.prevent="handleSubmit">
            <div class="form-group mt-5">
              <file-input v-model="form.avatar" label="avatar" />
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
              />
            </div>
            <div class="form-group">
              <label for="address">Adresse</label>
              <input
                type="text"
                class="form-control"
                placeholder="votre adresse"
                v-model="form.address"
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
import FileInput from "../../Shared/FileInput";

export default {
  name: "Register",
  components: {
    AppLayout,
    FileInput,
  },
  props: {
    companiesProp: Array,
  },
  data() {
    return {
      sending: false,
      id: null,
      form: {
        companyName: this.companiesProp[0].companyName,
        phone: this.companiesProp[0].phone,
        address: this.companiesProp[0].address,
        avatar: null,
      },
    };
  },

  methods: {
    handleSubmit() {
      this.sending = true;
      var data = new FormData();

      data.append("companyName", this.form.companyName || "");
      data.append("phone", this.form.phone || "");
      data.append("address", this.form.address || "");
      data.append("avatar", this.form.avatar || "");

      this.$inertia.post(`/updateCompanyProfile/${this.id}`, data, {
        onSuccess: () => {
          console.log("Send Success");
        },
      });
    },
  },
  mounted: function () {
    this.id = this.companiesProp[0].user_id;
    console.log(this.companiesProp[0].user_id);
    console.log(typeof this.companiesProp);
  },
};
</script>
