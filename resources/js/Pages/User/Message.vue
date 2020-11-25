<template>
  <div>
    <br />
    <div
      class="card bg-dark text-light mt-5"
      style="width: 28rem; margin-left: 35%"
      v-if="this.messages !== undefined"
    >
      <div class="card-body" v-for="message in messages" :key="message.id">
        <inertia-link
          style="color: white"
          :href="'message/' + message.sender_id"
        >
          <h5 class="card-title">
            <img
              class="mr-2"
              src="https://pro.propeller.in/assets/images/avatar-icon-40x40.png"
              width="40"
              height="40"
              alt="avatar"
            />
            {{ message.user.name }}
          </h5>
          <p class="card-text ml-5">
            {{ message.message }}
          </p>
        </inertia-link>
      </div>
    </div>
    <div v-else>
      <h4>Vous n'avez pas de message</h4>
    </div>
  </div>
</template>
<script>
import TextareaInput from "../../Shared/TextareaInput";

export default {
  components: {
    TextareaInput,
  },
  props: ["messages", "users"],

  data() {
    return {};
  },
  mounted: function () {
    setTimeout(() => {
        console.log("recharger");
 },5000);
  },
  methods: {
    logout() {},
    handleSubmit() {},
  },
};
</script>
