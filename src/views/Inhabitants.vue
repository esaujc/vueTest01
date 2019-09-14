<template>
  <div>
    <table id="ihList">
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in inhabitantsList" :key="item.id">
          <td><img :src=item.thumbnail height="10%"></td>
          <td>{{item.name}}</td>
          <td>{{item.age}}</td>
        </tr>
      </tbody>
     </table>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  data: () => ({

  }),
  async created() {
    await this.fetchInhabitants();
  },
  computed: {
    ...mapState ('inhabitants',{
      inhabitantsList: 'inhabitantsList'
    }),
  },
  methods: {
    fetchInhabitants() {
      this.$store.dispatch('inhabitants/getAllInhabitants');
    }
  }

}
</script>
