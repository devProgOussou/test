<template>
  <div>
    <br />
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1 class="text-center">ADMIN SHOW COMPANy</h1>
        </div>
        <div class="col-md-12">
          <br /><br />
          <show-link></show-link>
        </div>
        <div class="col-md-12">
          <table class="table table-dark">
            <tr class="m-5">
              <th>ID</th>
              <th>Nom de l'entreprise</th>
              <th>Adresse</th>
              <th>Telephone</th>
              <th>Actions</th>
            </tr>
            <tr v-for="item in company" :key="item.id">
              <td>{{ item.id }}</td>
              <td>{{ item.companyName }}</td>
              <td>{{ item.address }}</td>
              <td>{{ item.phone }}</td>
              <td></td>
              <td>
                <inertia-link :href="'http://localhost:8000/user/' + item.user_id">
                  <button class="btn btn-info btn-sm">Afficher</button>
                </inertia-link>

                <inertia-link :href="'http://localhost:8000/companyDelete/' + item.user_id">
                  <button class="btn btn-round btn-danger btn-sm">Supprimer le compte</button>
                </inertia-link>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ShowLink from "../../Shared/ShowLink";
export default {
  components: {
    ShowLink,
  },
  data() {
    return {};
  },
  props: ["company", "advertisements"],
  mounted: function () {},
};
</script>
