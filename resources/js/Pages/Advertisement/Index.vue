<template>
  <div>
    <div class="album py-5 bg-light">
      <div class="container">
        <div class="row">
          <div class="col-md-4" v-for="item in advertisements" :key="item.id">
            <div class="card mb-4 box-shadow">
              <img class="card-img-top" :src="'http://localhost:8000/uploads/' + item.images" alt="Card image cap" />
              <div class="card-body">
                <p>{{ item.productName }}</p>
                <p class="card-text">{{ item.description }}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <small style="float: left"
                    >Posté par :
                    <strong>
                      {{ item.user.name }}
                    </strong>
                  </small>
                  <small class="text-muted">9 mins</small>
                </div>
              </div>
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
  mounted() {
    let unix_timestamp = 1549312452;
    var date = new Date(unix_timestamp * 1000);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();
    var formattedTime = hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);

    console.log(formattedTime);
  },
};
</script>
