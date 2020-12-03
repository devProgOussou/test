<template>
  <div>
    <side-bar-user></side-bar-user>
    <div style="margin-top: 0px">
      <br />
      <div class="card bg-dark text-light mt-5" style="width: -7rem; margin-left: 35%">
        <div class="card-body" v-for="message in messages" :key="message.id">
          <inertia-link style="color: white" :href="'http://localhost:8000/message/' + message.sender_id">
            <h5 class="card-title">
              <img class="mr-2" src="https://pro.propeller.in/assets/images/avatar-icon-40x40.png" width="40" height="40" alt="avatar" />
              {{ message.user.name }}
            </h5>
            <p class="card-text ml-5">
              {{ message.message }}
            </p>
          </inertia-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SideBarUser from "../../Shared/SideBarUser";
import TextareaInput from "../../Shared/TextareaInput";

export default {
  components: {
    TextareaInput,
    SideBarUser,
  },
  props: ["messages", "users"],

  data() {
    return {};
  },
  mounted: function () {
    // setTimeout(() => {
    //   console.log("recharger");
    // }, 5000);
  },
  methods: {
    logout() {},
    handleSubmit() {},
  },
};
</script>
