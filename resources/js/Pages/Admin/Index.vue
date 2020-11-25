<template>
  <div>
    <app-layout></app-layout>
    <br />
    <div class="container">
      <div class="row">
      <show-link></show-link>
        <div class="col-md-12">
          <table class="table table-dark">
            <tr class="m-5">
              <th>ID</th>
              <th>Nom</th>
              <th>email</th>
              <th>Type de compte</th>
              <th>Statut</th>
              <th>Actions</th>
            </tr>
            <tr v-for="user in users" :key="user.id">
              <td>{{ user.id }}</td>
              <td>{{ user.name }}</td>
              <td>{{ user.email }}</td>
              <td v-if="user.isCompany == 1">Entreprise</td>
              <td v-else>Personnel</td>
              <td v-if="user.isActive == 1">Actif</td>
              <td v-else>Inactif</td>
              <td>
                <inertia-link :href="'user/' + user.id">
                  <button class="btn btn-info btn-sm">Afficher</button>
                </inertia-link>
                <inertia-link
                  :href="'userDeactivate/' + user.id"
                  v-if="user.isActive == true"
                >
                  <button class="btn btn-warning btn-round btn-sm">
                    Desactiver
                  </button>
                </inertia-link>
                <inertia-link
                  :href="'userActivate/' + user.id"
                  v-if="user.isActive == false"
                >
                  <button class="btn btn-success btn-round btn-sm">
                    Activer
                  </button>
                </inertia-link>
                <inertia-link
                  :href="'userDelete/' + user.id"
                >
                  <button class="btn btn-round btn-danger btn-sm">
                    Supprimer
                  </button>
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
import AppLayout from "../../Shared/AppLayout";
import ShowLink from '../../Shared/ShowLink'

export default {
  name: "Admin",
  components: {
    AppLayout,
    ShowLink
  },
  props: ["users"],
};
</script>
