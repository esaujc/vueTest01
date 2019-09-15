<template>
  <div>
    <FilterForm/>
    <table class="ihList">
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in inhabitantsList" :key="item.id" @click.stop="gotToInhabitantsDetail(item)">
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
import FilterForm from "@/components/FilterForm.vue"; 

export default {
  components: {
    FilterForm
  },
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
    },
    gotToInhabitantsDetail(item){
      this.$router.push({
        name: 'Inhabitant',
        // params: {id: item.id, age: item.age, name: item.name}
        params: item
      })
    }
  }

}
</script>
<style scoped>
.ihList {
  margin: 0 auto;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>