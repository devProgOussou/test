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
              <label for="lastName">nom : </label>
              <input
                type="text"
                class="form-control"
                :placeholder="this.personalsProp[0].lastName"
                v-model="form.lastName"
              />
            </div>
            <div class="form-group">
              <label for="prenom">Prenom : </label>
              <input
                type="text"
                class="form-control"
                :placeholder="this.personalsProp[0].firstName"
                v-model="form.firstName"
              />
            </div>
            <div class="form-group">
              <label for="prenom">Téléphone :</label>
              <input
                type="text"
                class="form-control"
                :placeholder="this.personalsProp[0].phone"
                v-model="form.phone"
              />
            </div>
            <div class="form-group">
              <label for="address">Adresse</label>
              <input
                type="text"
                class="form-control"
                :placeholder="this.personalsProp[0].address"
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
    personalsProp: Array,
  },
  data() {
    return {
      sending: false,
      id: null,
      form: {
        lastName: this.personalsProp[0].lastName,
        firstName: this.personalsProp[0].firstName,
        phone: this.personalsProp[0].phone,
        address: this.personalsProp[0].address,
        avatar: null,
      },
    };
  },

  methods: {
    handleSubmit() {
      this.sending = true;
      var data = new FormData();

      data.append("lastName", this.form.lastName || "");
      data.append("firstName", this.form.firstName || "");
      data.append("phone", this.form.phone || "");
      data.append("address", this.form.address || "");
      data.append("avatar", this.form.avatar || "");

      this.$inertia.post(`/updateUserProfile/${this.id}`, data, {
        onSuccess: () => {
          console.log("Send Success");
        },
      });
    },
  },
  mounted: function () {
    this.id = this.personalsProp[0].user_id;
  },
};
</script>
