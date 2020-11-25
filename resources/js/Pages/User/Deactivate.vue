<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <br /><br /><br />
          <p>Vous avez ete desactiver par l'administrateur</p>
          <small>Voulez vous le conatcter? :</small>
          <a href="#" data-toggle="modal" data-target="#modalLoginForm">Cliquer ici</a>
        </div>
      </div>
    </div>
    <form @submit.prevent="handleSubmit">
      <div class="modal fade" id="modalLoginForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header text-center">
              <h4 class="modal-title w-100 font-weight-bold">Contacter l'administrateur</h4>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body mx-3">
              <div class="md-form mb-4">
                <i class="fas fa-message"></i>
                <textarea class="form-control col-md-12" rows="5" v-model="form.messages" required></textarea>
              </div>
            </div>
            <div class="modal-footer d-flex justify-content-center">
              <button class="btn btn-default">Envoyer</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Deactivate",
  components: {},
  data() {
    return {
      form: {
        messages: null,
      },
    };
  },
  methods: {
    handleSubmit() {
      this.sending = true;
      var data = new FormData();

      data.append("messages", this.form.messages || "");

      this.$inertia.post("/contactAdmin", data, {
        onSuccess: () => {
          console.log("Send Success");
        },
      });
    },
  },
};
</script>
