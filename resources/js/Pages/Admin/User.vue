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
              <th>Nom du produit</th>
              <th>Categorie</th>
              <th>Description</th>
              <th>Image 1</th>
              <th>Image 2</th>
              <th>Image 3</th>
              <th>Actions</th>
            </tr>
            <tr v-for="item in advertisements" :key="item.id">
              <td>{{ item.id }}</td>
              <td>{{ item.productName }}</td>
              <td>{{ item.category }}</td>
              <td>{{ item.description }}</td>
              <td>
                <img
                  :src="'http://alpha-tests.defarsci.com/samba-store-v2/uploads/' + item.images"
                  style="height: 100px; width: 200px"
                />
              </td>
              <td v-if="item.images1 != null">
                <img
                  :src="'http://alpha-tests.defarsci.com/samba-store-v2/uploads/' + item.images1"
                  style="height: 100px; width: 200px"
                />
              </td>
              <td v-else>Null</td>
              <td v-if="item.images2 != null">
                <img
                  :src="'http://alpha-tests.defarsci.com/samba-store-v2/uploads/' + item.images2"
                  style="height: 100px; width: 200px"
                />
              </td>
              <td v-else>Null</td>
              <td>

                <inertia-link :href="'http://alpha-tests.defarsci.com/samba-store-v2/DeletePersonalPost/' + item.id">
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
import AppLayout from '../../Shared/AppLayout'
import ShowLink from '../../Shared/ShowLink'

export default {
    components:{
        AppLayout,
        ShowLink
    },
    props: ["advertisements"],
}
</script>
