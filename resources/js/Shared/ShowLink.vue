<template>
  <div class="col-md-12 m-2">
    <inertia-link :href="'http://localhost:8000/showPersonals'">
      <button class="btn btn-sm btn-outline-primary">
        Voir les comptes personnels
      </button>
    </inertia-link>

    <inertia-link :href="'http://localhost:8000/home'">
      <button class="btn btn-sm btn-outline-info">
        Voir tous les comptes
      </button>
    </inertia-link>

    <inertia-link :href="'http://localhost:8000/showCompanies'" class="m-2">
      <button class="btn btn-sm btn-outline-secondary">
        Voir les comptes entreprises
      </button>
    </inertia-link>
  </div>
</template>
<script>
export default {
  name: "ShowLink",
};
</script>
