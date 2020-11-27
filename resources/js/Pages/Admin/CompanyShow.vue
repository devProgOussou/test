<template>
  <div>
    <br />
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1 class="text-center">ADMIN COMPANIES SHOW</h1>
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
            <tr v-for="company in companies" :key="company.id">
              <td>{{ company.id }}</td>
              <td>{{ company.companyName }}</td>
              <td>{{ company.address }}</td>
              <td>{{ company.phone }}</td>
              <td></td>
              <td>
                <inertia-link :href="'company/' + company.id">
                  <button class="btn btn-info btn-sm">Afficher</button>
                </inertia-link>

                <inertia-link :href="'companyDelete/' + company.id">
                  <button class="btn btn-round btn-danger btn-sm">Supprimer</button>
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
  props: ["companies"],
  data() {
    return {};
  },
  mounted() {},
};
</script>
