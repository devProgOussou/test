<template>
  <div>
    <div class="container">
      <div class="row">
        <div v-for="item in advertisements" :key="item.id" class="mt-5">
          <div
            id="carouselExampleControls"
            class="card mr-4 carousel slide mt-5"
            style="width: 30rem; height: 25rem"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  class="d-block w-100"
                  alt="First slide"
                  :src="'http://alpha-tests.defarsci.com/samba-store-v2/uploads/' + item.images"
                  style="width: 30rem; height: 25rem"
                />
              </div>
            </div>
          </div>
          <div class="card mr-4">
            <div class="card-body" style="width: 30rem;">
              <h5 class="card-title">{{ item.productName }}</h5>
              <p class="card-text">
                {{ item.description }}
              </p>
              <p>
                <small
                  >Posté par :
                  <strong>
                    {{ item.user.name }}
                  </strong>
                </small>
              </p>
              <inertia-link :href="'post/' + item.id">
                <button class="btn btn-info btn-lg col-md-5 offset-4">
                  Consulter
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
export default {
  components: {},
  props: ["advertisements"],
};
</script>
