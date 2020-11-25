<template>
  <div>
    <div class="container">
      <div class="row">
        <div v-for="item in advertisements" :key="item.id" class="mt-5">
          <h1 class="text-center">Mes postes</h1>
          <div class="card mr-4 mt-5" style="width: 25rem">
            <img
              class="card-img-top"
              style="height: 200px; width: 25rem"
              :src="'http://alpha-tests.defarsci.com/samba-store-v2/uploads/' + item.images"
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">{{ item.productName }}</h5>
              <p class="card-text">
                {{ item.description }}
              </p>
              <inertia-link :href="url + item.id">
                <button class="btn btn-info btn-md ml-4">Afficher</button>
              </inertia-link>
              <inertia-link
                :href="'deactivate/' + item.id"
                v-if="item.isAvailable == true"
              >
                <button class="btn btn-warning btn-round btn-md ml-3">
                  Desactiver
                </button>
              </inertia-link>
              <inertia-link
                :href="'activate/' + item.id"
                v-if="item.isAvailable == false"
              >
                <button class="btn btn-success btn-round btn-md ml-3">
                  Activer
                </button>
              </inertia-link>
              <inertia-link :href="'advertisementDestroy/' + item.id">
                <button class="btn btn-round btn-danger btn-md ml-3">
                  Supprimer
                </button>
              </inertia-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AppLayout from "../../Shared/AppLayout.vue";
export default {
  components: {
    AppLayout,
  },
  props: ["advertisements"],

  data() {
    return {
      url: "advertisement/",
    };
  },
  methods: {
    logout() {
      axios.post("/logout").then((response) => {
        window.location = "/";
      });
    },
  },
};
</script>
