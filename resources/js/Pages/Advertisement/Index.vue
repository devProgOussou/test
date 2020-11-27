<template>
  <div>
    <div class="container">
      <div class="row">
        <div v-for="item in advertisements" :key="item.id" class="mt-5">
          <div id="carouselExampleControls" class="card mr-4 carousel slide mt-5" style="width: 25rem; height: 18rem" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-100" alt="First slide" :src="'http://localhost:8000/uploads/' + item.images" style="width: 25rem; height: 18rem" />
              </div>
            </div>
          </div>
          <div class="card mr-4">
            <div class="card-body" style="width: 18rem">
              <h5 class="card-title lead">{{ item.productName }}</h5>
              <p class="card-text text-sm">
                {{ item.description }}
              </p>
              <p>
                <small
                  >Posté par :
                  <strong>
                    {{ item.user.name }}
                  </strong>
                </small>
                <br />
                <small
                  >Categorie :
                  <strong>
                    {{ item.category }}
                  </strong>
                </small>
              </p>
              <inertia-link :href="'post/' + item.id">
                <button class="btn btn-info btn-md offset-6">Consulter</button>
              </inertia-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: ["advertisements"],
  created() {
    // this.$inertia
    //   .get("/")
    //   .then((response) => (this.advertisements = response))
    //   .catch((error) => console.log(error));
  },
  data() {
    return {
      q: null,
    };
  },
  methods: {
    searchAdvertisement() {
      if (this.q.length > 3) {
        this.$inertia
          .get("/" + this.q)
          .then((response) => (this.advertisements = response))
          .catch((error) => console.log(error));
      } else {
        this.$inertia
          .get("/")
          .then((response) => (this.advertisements = response))
          .catch((error) => console.log(error));
      }
    },
  },
};
</script>
